import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanText, scanFile, resolveBaseRef, listScanTargets, scanIdentity, scanCommitMeta, scanCommitRange } from '../scripts/check-public-safety.mjs';

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url));
const CHECKER_PATH = fileURLToPath(new URL('../scripts/check-public-safety.mjs', import.meta.url));

function sha256(text) {
  return createHash('sha256').update(text).digest('hex');
}

function git(args, cwd) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

// Fixtures deliberately use RFC-reserved `.invalid` hosts and obviously-fake
// tokens (`abc123`). Naming a real internal host or credential here would
// itself leak it into a public repo -- the one thing this file exists to
// prevent. See docs/public-safety.md for why this checker is allowlist-based
// rather than a denylist of real internal terms.

test('flags any registry that is not public npm', () => {
  assert.ok(scanText('registry=https://feed.example.invalid/npm/').length > 0);
});

test('flags credential material', () => {
  assert.ok(scanText('//feed.example.invalid/:_authToken=abc123').length > 0);
  assert.ok(scanText('//feed.example.invalid/:_password=abc123').length > 0);
});

test('flags URLs whose host is not on the public allowlist', () => {
  assert.ok(scanText('see https://intranet.example.invalid/repo').length > 0);
});

test('passes clean public content', () => {
  assert.deepEqual(scanText("import { rspack } from '@rspack/core';"), []);
  assert.deepEqual(scanText('registry=https://registry.npmjs.org/'), []);
  assert.deepEqual(scanText('https://github.com/rstackjs/build-tools-performance'), []);
});

// A prior commit in this repo's real history shipped a dangling reference to
// a gitignored local scratch path under /Users/<name>/... (found via `git
// fsck --unreachable`, since it was later scrubbed from reachable history --
// see task-7-report.md). These fixtures use an obviously-fake name, never the
// real one, and never a real hostname either.
test('flags local filesystem paths (/Users/<name>, /home/<name>)', () => {
  assert.ok(scanText('Plan: /Users/exampledev/scratch/notes.md').length > 0);
  assert.ok(scanText('cwd: /home/exampledev/project').length > 0);
});

test('flags a Windows-style local user path too (same class of leak)', () => {
  assert.ok(scanText('See C:\\Users\\exampledev\\scratch\\notes.md').length > 0);
});

test('does NOT flag an angle-bracket placeholder path used in documentation', () => {
  // This checker's own docs (and this task's brief) describe the pattern as
  // `/Users/<name>` and `/home/<name>` -- a literal placeholder, not a real
  // leaked path. The checker must be able to describe itself without
  // self-triggering.
  assert.deepEqual(scanText('Local filesystem paths -- /Users/<name>, /home/<name>.'), []);
});

// Real upstream fixture content (cases/react-10k/src/d0/d6/d4/f3.jsx, an
// upstream file this fork never touched) contains the substring "office"
// (from an icon package name) and the substring "local" (from the same
// name). Neither is a filesystem path, a credential, or a URL with a
// non-allowlisted host, so a precise structural scanner must pass it clean
// even though a naive keyword search for "office" or "local" would not.
test('does not flag inherited upstream content merely for containing "local"/"office" as substrings', () => {
  const upstreamLine = "import I from '@iconify-icons/material-symbols/local-post-office-outline.js'";
  assert.deepEqual(scanText(upstreamLine), []);
});

test('SAFETY_DENYLIST_FILE absent (the normal public-clone case): scanText works unchanged', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  delete process.env.SAFETY_DENYLIST_FILE;
  try {
    assert.deepEqual(scanText('nothing suspicious here'), []);
    assert.ok(scanText('_authToken=abc123').length > 0);
  } finally {
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('SAFETY_DENYLIST_FILE, when present, adds an extra check without replacing the built-in ones', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    // A specific, obviously-fake stand-in term -- never a real internal name.
    writeFileSync(file, '# comment lines and blanks are ignored\n\nfictional-codename-zzz\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(scanText('project fictional-codename-zzz launches soon').length > 0);
    assert.ok(
      scanText('_authToken=abc123').length > 0,
      'built-in checks must still run when a denylist file is also present'
    );
    assert.deepEqual(scanText('nothing matches here'), []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('SAFETY_DENYLIST_FILE pointing at a nonexistent path is a silent no-op, not a crash', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  process.env.SAFETY_DENYLIST_FILE = path.join(process.cwd(), '.tmp-does-not-exist', 'nope.txt');
  try {
    assert.deepEqual(scanText('nothing suspicious here'), []);
  } finally {
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('documented caveat: an overly generic denylist term produces noise on real upstream content -- this is why docs/public-safety.md tells the user to pick specific terms, not dictionary words', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-generic-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 'office\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    const upstreamLine = "import I from '@iconify-icons/material-symbols/local-post-office-outline.js'";
    assert.ok(
      scanText(upstreamLine).length > 0,
      'a bare dictionary word in the denylist file WILL match unrelated upstream content -- pick specific terms'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('scanFile reports file, 1-based line number, and matched text for each violation', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-file-'));
  const file = path.join(dir, 'sample.txt');
  try {
    writeFileSync(
      file,
      ['line one is clean', '_authToken=abc123', 'line three is clean', 'see https://intranet.example.invalid/x'].join('\n') + '\n'
    );
    const violations = scanFile(file);
    assert.equal(violations.length, 2, `expected exactly 2 violations, got ${JSON.stringify(violations)}`);
    assert.equal(violations[0].file, file);
    assert.equal(violations[0].line, 2);
    assert.match(violations[0].match, /_authToken/);
    assert.match(violations[0].description, /credential/);
    assert.equal(violations[1].line, 4);
    assert.match(violations[1].match, /intranet\.example\.invalid/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('scanFile on a clean file returns an empty array', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-file-'));
  const file = path.join(dir, 'clean.txt');
  try {
    writeFileSync(file, "import { rspack } from '@rspack/core';\n");
    assert.deepEqual(scanFile(file), []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// Non-vacuity proof (corrupt -> confirm failure -> revert -> confirm
// byte-identical). This is the pattern every new test in this file is held
// to; spelled out in full once, here, because it is the most literal
// reading of "apply the exact corruption, confirm the expected failure,
// revert, confirm byte-identical (SHA-256)".
test('non-vacuity: corrupting a clean fixture with a credential makes scanFile flag it; reverting restores the original bytes exactly', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-vacuity-'));
  const file = path.join(dir, 'case.params.json');
  const original = '{\n  "name": "tiny",\n  "seed": 1\n}\n';
  try {
    writeFileSync(file, original);
    const originalHash = sha256(readFileSync(file, 'utf8'));

    // Baseline: clean fixture must not be flagged.
    assert.deepEqual(scanFile(file), [], 'fixture must start clean');

    // Apply the exact corruption this test targets.
    const corrupted = original.replace('"seed": 1', '"seed": 1,\n  "_authToken": "abc123"');
    writeFileSync(file, corrupted);

    // Confirm the expected failure: scanFile must now flag it.
    const violations = scanFile(file);
    assert.ok(violations.length > 0, 'corrupted fixture must be flagged');
    assert.ok(violations.some((v) => /credential/.test(v.description)));

    // Revert.
    writeFileSync(file, original);

    // Confirm byte-identical to the pre-corruption content, and clean again.
    const revertedHash = sha256(readFileSync(file, 'utf8'));
    assert.equal(revertedHash, originalHash, 'revert must restore byte-identical content (SHA-256)');
    assert.deepEqual(scanFile(file), [], 'reverted fixture must be clean again');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('self-exclusion is doing real work: this checker\'s OWN source, scanned directly with scanText (bypassing file-scope selection), IS flagged', () => {
  // Proves the self-exclusion applied by the CLI's file-scope resolution
  // (tested below) is necessary and not vacuous: without it, this file would
  // flag itself, because it must literally contain the pattern source
  // ("_authToken", ".local", "Bearer", etc.) to be able to detect them.
  const ownSource = readFileSync(CHECKER_PATH, 'utf8');
  const violations = scanText(ownSource);
  assert.ok(
    violations.length > 0,
    'expected the checker\'s own source to contain pattern text that scanText (with no path-awareness) would flag'
  );
});

// --- Scope resolution: which files/commits actually get scanned. ---------
//
// This repo (build-tools-performance) is itself the integration fixture for
// these tests: it really does have an untouched upstream vendor tree
// (cases/), a real fork base ref (main, unmoved since this branch forked
// from it), and this checker's own files really are new/changed relative to
// that base. Using the real repo (read-only git commands only) is more
// honest here than reinventing a fake one, and it is what proves the scoping
// decision actually holds for the repo it protects.

test('resolveBaseRef finds this repo\'s real fork point (main / origin/main)', () => {
  const ref = resolveBaseRef({ cwd: REPO_ROOT });
  assert.ok(ref, 'expected a base ref to resolve in this repo');
  // Whichever candidate wins, it must point at a real, resolvable commit.
  assert.doesNotThrow(() => git(['rev-parse', '--verify', ref], REPO_ROOT));
});

test('resolveBaseRef honors SAFETY_BASE_REF when set to a valid ref', () => {
  const prev = process.env.SAFETY_BASE_REF;
  process.env.SAFETY_BASE_REF = 'HEAD';
  try {
    assert.equal(resolveBaseRef({ cwd: REPO_ROOT }), 'HEAD');
  } finally {
    if (prev === undefined) delete process.env.SAFETY_BASE_REF;
    else process.env.SAFETY_BASE_REF = prev;
  }
});

test('resolveBaseRef returns null (not a throw) when no base ref can be found', () => {
  // An isolated, freshly-initialized repo with a single commit and no
  // main/origin -- deterministically exercises the "nothing resolves"
  // fallback path without depending on this checkout's own branch layout.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-scope-'));
  try {
    git(['init', '-q'], dir);
    git(['config', 'user.email', 'test@example.invalid'], dir);
    git(['config', 'user.name', 'Test'], dir);
    writeFileSync(path.join(dir, 'f.txt'), 'x\n');
    git(['add', '.'], dir);
    git(['commit', '-q', '-m', 'init'], dir);
    const prev = process.env.SAFETY_BASE_REF;
    delete process.env.SAFETY_BASE_REF;
    try {
      assert.equal(resolveBaseRef({ cwd: dir }), null);
    } finally {
      if (prev !== undefined) process.env.SAFETY_BASE_REF = prev;
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('listScanTargets excludes this checker\'s own files even though they are new/untracked', () => {
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  assert.ok(!targets.has('scripts/check-public-safety.mjs'), 'checker script must self-exclude');
  assert.ok(!targets.has('test/safety.test.mjs'), 'checker test must self-exclude');
});

test('listScanTargets excludes docs/plans/phase-1-generator.md, which embeds this task\'s own brief/fixtures verbatim', () => {
  // Real finding from running the CLI against this actual repo (see
  // task-7-report.md): docs/plans/phase-1-generator.md is a real,
  // already-committed (Tasks 1-6) planning document that quotes this task's
  // brief -- including its scanText test fixtures (the same .invalid hosts
  // and abc123 placeholders used in test/safety.test.mjs) -- verbatim, as
  // part of specifying what Task 7 should build. This is exactly "docs that
  // document the checker" and belongs in the same self-exclusion set as the
  // checker's own source and test file, not treated as a real leak.
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  assert.ok(
    !targets.has('docs/plans/phase-1-generator.md'),
    'docs/plans/phase-1-generator.md must self-exclude (it documents this checker\'s own fixtures)'
  );
});

test('listScanTargets excludes untouched upstream vendor content under cases/', () => {
  // cases/react-10k predates this fork and is never in the diff against
  // main; the vendor-dir exclusion also holds even if base resolution ever
  // changed. (cases/rome existed in this repo's earlier upstream history but
  // is not present at the current HEAD, so react-10k -- confirmed present --
  // is used instead.)
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  const anyCasesFile = git(['ls-files', 'cases/react-10k'], REPO_ROOT).split('\n')[0];
  assert.ok(anyCasesFile, 'fixture sanity: cases/react-10k must have at least one tracked file');
  assert.ok(!targets.has(anyCasesFile), `${anyCasesFile} must be excluded as upstream vendor content`);
});

test('listScanTargets includes this fork\'s own changed files (e.g. .gitignore, the generator, its docs)', () => {
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  for (const f of ['.gitignore', 'scripts/generate-case.mjs', 'docs/design/synthetic-chunk-scaling.md']) {
    assert.ok(targets.has(f), `expected ${f} to be in scope (changed vs this fork's base)`);
  }
});

test('listScanTargets falls back to a defined tracked-file list (still excluding vendor dirs) when no base ref resolves', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-scope-fallback-'));
  try {
    git(['init', '-q'], dir);
    git(['config', 'user.email', 'test@example.invalid'], dir);
    git(['config', 'user.name', 'Test'], dir);
    writeFileSync(path.join(dir, 'kept.txt'), 'x\n');
    mkdirSync(path.join(dir, 'cases'));
    writeFileSync(path.join(dir, 'cases', 'vendored.txt'), 'y\n');
    git(['add', '.'], dir);
    git(['commit', '-q', '-m', 'init'], dir);
    const targets = new Set(listScanTargets({ cwd: dir, baseRef: null }));
    assert.ok(targets.has('kept.txt'));
    assert.ok(!targets.has('cases/vendored.txt'));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- Commit metadata: author/committer identity + commit message. --------
//
// This is the item file-only scanning would always miss: 17 real commits in
// this repo's history were authored as <user>@<hostname>.local because no
// git user.email was set (found via `git fsck --unreachable` against this
// repo's own history -- see task-7-report.md; that specific historical range
// is validated separately, outside this portable test file, since it depends
// on this one clone's local reflog and would not survive a fresh clone or
// `git gc`). These fixtures use obviously-fake stand-ins, never the real
// name/host.

test('scanIdentity rejects a .local-suffixed email -- the exact shape git falls back to with no user.email set', () => {
  const violations = scanIdentity({ name: 'Dev Example', email: 'dev@Example-Laptop.local' });
  assert.ok(violations.length > 0);
});

test('scanIdentity rejects other reserved/non-routable email suffixes too', () => {
  for (const email of ['dev@build-host.localdomain', 'dev@ci.internal', 'dev@machine.lan']) {
    assert.ok(scanIdentity({ name: 'Dev', email }).length > 0, `expected ${email} to be rejected`);
  }
});

test('scanIdentity rejects a bare hostname with no TLD at all', () => {
  assert.ok(scanIdentity({ name: 'Dev', email: 'dev@buildhost' }).length > 0);
});

test('scanIdentity accepts a GitHub noreply-shaped email (the structural shape, not one hardcoded account)', () => {
  assert.deepEqual(scanIdentity({ name: 'Some Contributor', email: '12345+someuser@users.noreply.github.com' }), []);
});

test('scanIdentity accepts a plausible real-looking email (structure only -- corporate emails are normal and expected in OSS history)', () => {
  assert.deepEqual(scanIdentity({ name: 'Some Contributor', email: 'person@example.com' }), []);
});

test('scanCommitMeta labels violations by which field they came from, and scans the message too', () => {
  const violations = scanCommitMeta({
    authorName: 'Dev', authorEmail: 'dev@Example-Laptop.local',
    committerName: 'Dev', committerEmail: 'dev@Example-Laptop.local',
    message: 'oops pasted //feed.example.invalid/:_authToken=abc123 into the commit message',
  });
  assert.ok(violations.some((v) => /^author:/.test(v)));
  assert.ok(violations.some((v) => /^committer:/.test(v)));
  assert.ok(violations.some((v) => /^commit message:/.test(v) && /credential/.test(v)));
});

test('scanCommitMeta on a fully clean, plausible commit is clean', () => {
  assert.deepEqual(
    scanCommitMeta({
      authorName: 'Some Contributor', authorEmail: '12345+someuser@users.noreply.github.com',
      committerName: 'Some Contributor', committerEmail: '12345+someuser@users.noreply.github.com',
      message: 'fix: correct an off-by-one in chunk counting',
    }),
    []
  );
});

test('non-vacuity: a .local identity is flagged, then correcting user.email to a real address clears it', () => {
  // Same red -> fix -> green shape as the file-based non-vacuity test above,
  // applied to data instead of a file (there is no on-disk artifact here to
  // hash, so the "byte-identical" revert check is not applicable -- the
  // equivalent guarantee is that the SAME scanIdentity call, given the
  // corrected input, returns exactly [] again).
  const broken = { name: 'Dev', email: 'dev@Example-Laptop.local' };
  assert.ok(scanIdentity(broken).length > 0, 'must be flagged before the fix');
  const fixed = { name: 'Dev', email: '999+devexample@users.noreply.github.com' };
  assert.deepEqual(scanIdentity(fixed), [], 'must be clean after configuring a real git user.email');
});

test('scanCommitRange scans real git history and flags exactly the commit with a .local author, not the clean one', () => {
  // A self-contained repro of the actual incident class (17 real commits in
  // this repo were authored this way -- see task-7-report.md): commit once
  // with a normal identity, once with no user.email configured (git's own
  // fallback produces the `<user>@<hostname>.local` shape; this test pins
  // the exact fallback value via a per-command -c override instead of
  // relying on this sandbox's real hostname, so it is deterministic).
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-commits-'));
  try {
    git(['init', '-q'], dir);
    writeFileSync(path.join(dir, 'a.txt'), '1\n');
    git(['-c', 'user.name=Good Dev', '-c', 'user.email=999+gooddev@users.noreply.github.com',
      'add', '.'], dir);
    git(['-c', 'user.name=Good Dev', '-c', 'user.email=999+gooddev@users.noreply.github.com',
      'commit', '-q', '-m', 'clean: a normal commit'], dir);

    writeFileSync(path.join(dir, 'b.txt'), '2\n');
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local',
      'add', '.'], dir);
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local',
      'commit', '-q', '-m', 'feat: forgot to set user.email first'], dir);

    const results = scanCommitRange('HEAD~1..HEAD', { cwd: dir });
    assert.equal(results.length, 1, 'HEAD~1..HEAD must contain exactly the second commit');
    assert.ok(results[0].violations.length > 0);
    assert.ok(results[0].violations.some((v) => /author/.test(v) && /\.local/i.test(v)));

    const both = scanCommitRange('HEAD', { cwd: dir });
    assert.equal(both.length, 2);
    // Identify by violation count instead of message text (order is
    // oldest-first from git log's default, but this checker's contract does
    // not promise an order -- so match on content, not position).
    const withViolations = both.filter((r) => r.violations.length > 0);
    const withoutViolations = both.filter((r) => r.violations.length === 0);
    assert.equal(withViolations.length, 1, 'exactly one commit (the .local one) must be flagged');
    assert.equal(withoutViolations.length, 1, 'exactly one commit (the clean one) must not be flagged');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- CLI: one command, exit code, human-readable file:line:match output. -

function runCli(args, cwd) {
  try {
    const stdout = execFileSync('node', [CHECKER_PATH, ...args], { cwd, encoding: 'utf8' });
    return { code: 0, stdout };
  } catch (err) {
    return { code: err.status, stdout: err.stdout ?? '', stderr: err.stderr ?? '' };
  }
}

const GOOD_IDENTITY = ['-c', 'user.name=Good Dev', '-c', 'user.email=999+gooddev@users.noreply.github.com'];

// This checker is meant to run on a feature branch, checking what that
// branch adds on top of a known-good base -- exactly how it will actually be
// run in this repo (feat/synthetic-chunk-scaling-cases vs main). A
// single-branch, single-commit repo has no divergence to diff against, which
// would make base == HEAD and trivially report "clean" without scanning
// anything at all. So every CLI test sets up a real base commit on `main`
// plus one feature commit ahead of it, and runs the CLI from the feature
// branch -- the same shape as this repo's own default scope resolution.
function initBaseAndFeatureBranch(dir) {
  git(['init', '-q', '-b', 'main'], dir);
  writeFileSync(path.join(dir, 'base.txt'), 'base content\n');
  git([...GOOD_IDENTITY, 'add', '.'], dir);
  git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'chore: base commit'], dir);
  git(['checkout', '-q', '-b', 'feature'], dir);
}

test('CLI --help exits 0 and prints usage without needing a git repo at all', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-help-'));
  try {
    const { code, stdout } = runCli(['--help'], dir);
    assert.equal(code, 0);
    assert.match(stdout, /SAFETY_DENYLIST_FILE/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI exits 0 and reports clean for a real (non-trivial) diff against base with no violations', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-clean-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), "import { rspack } from '@rspack/core';\n");
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a clean feature file'], dir);

    // Fixture sanity: there really is a non-empty diff being scanned here,
    // or this test would pass vacuously (nothing to scan is trivially "clean").
    assert.equal(resolveBaseRef({ cwd: dir }), 'main');
    assert.deepEqual(listScanTargets({ cwd: dir }), ['feature.txt']);

    const { code, stdout } = runCli([], dir);
    assert.equal(code, 0, `expected exit 0, got ${code}. stdout:\n${stdout}`);
    assert.match(stdout, /clean/i);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI exits non-zero and names the file, line, and matched text for a real violation', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-dirty-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), 'line one\n_authToken=abc123\nline three\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: oops'], dir);

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + stderr;
    assert.notEqual(code, 0, `expected a non-zero exit for a real violation. stdout:\n${out}`);
    assert.match(out, /feature\.txt/, 'must name the file');
    assert.match(out, /:2:/, 'must name the line number');
    assert.match(out, /_authToken/, 'must include the matched text');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI exits non-zero for a commit-metadata-only violation (no file content involved at all)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-badauthor-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), 'perfectly clean file content\n');
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local', 'add', '.'], dir);
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local',
      'commit', '-q', '-m', 'feat: no user.email configured'], dir);

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + stderr;
    assert.notEqual(code, 0, `expected a non-zero exit for a bad commit identity. stdout:\n${out}`);
    assert.match(out, /\.local/i);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- Validate against reality: this actual repo, right now. --------------
//
// Everything above proves the mechanism works on controlled fixtures (both
// directions: known-bad input is caught, known-good input -- including the
// specific false-positive shapes this repo has actually hit -- passes
// clean). These last two tests apply that already-proven mechanism to this
// repo's own real, current state, so "the checker reports this repo clean"
// is a living, re-checked assertion, not just a claim in a report. They are
// intentionally not red/green-proven in isolation the same way as the tests
// above: there is no controlled "corrupt this real repo and confirm failure"
// step, because deliberately corrupting the actual repo (even temporarily)
// to prove a test can fail is itself the kind of risky action this checker
// exists to prevent taking lightly. Their failure mode IS the point: if this
// repo's own fork-owned files or commit history ever regress, these fail.

test('reality check: this repo\'s own fork-owned files (as actually scoped) are clean right now', () => {
  const targets = listScanTargets({ cwd: REPO_ROOT });
  assert.ok(targets.length > 0, 'fixture sanity: scope must not be empty');
  const violations = targets.flatMap((rel) => scanFile(path.join(REPO_ROOT, rel)));
  assert.deepEqual(violations, [], `expected no violations, got: ${JSON.stringify(violations)}`);
});

test('reality check: every commit this fork has made (base..HEAD) is clean right now', () => {
  const base = resolveBaseRef({ cwd: REPO_ROOT });
  assert.ok(base, 'fixture sanity: a base ref must resolve in this repo');
  const results = scanCommitRange(`${base}..HEAD`, { cwd: REPO_ROOT });
  assert.ok(results.length > 0, 'fixture sanity: this fork must have made at least one commit past its base');
  const bad = results.filter((r) => r.violations.length > 0);
  assert.deepEqual(bad, [], `expected no flagged commits, got: ${JSON.stringify(bad)}`);
});

test('reality check: this repo\'s real (dangling, pre-filter-branch) .local-author history is still caught when present', (t) => {
  // The 17 real commits this repo once had, authored with no user.email set,
  // are no longer reachable from any ref (a filter-branch rewrite fixed their
  // identity before commit e99e9fc8 -- see task-7-report.md) -- only kept
  // alive by this one clone's reflog, which git may eventually prune (default
  // 90 days) or which a fresh clone would never have had at all. So this is a
  // best-effort confirmation, not a portable regression test: skip cleanly if
  // the objects are gone, rather than failing a future run for an unrelated
  // reason (object pruning, not a checker regression).
  const oldTip = '54ca292525d7051a1294e17eb0d6ad09dbfae9a4';
  const oldBase = '80822e950cb07fa3cd38330fa2332073f6102c75'; // = main, still reachable
  let stillPresent = false;
  try {
    git(['cat-file', '-e', oldTip], REPO_ROOT);
    stillPresent = true;
  } catch {
    stillPresent = false;
  }
  if (!stillPresent) {
    t.skip('pre-filter-branch commits have been pruned from this clone; see task-7-report.md for the transcript captured while they still existed');
    return;
  }
  const results = scanCommitRange(`${oldBase}..${oldTip}`, { cwd: REPO_ROOT });
  assert.equal(results.length, 17, 'expected exactly the 17 historical commits authored with no user.email set');
  assert.ok(results.every((r) => r.violations.length > 0), 'every one of them must be flagged');
});
