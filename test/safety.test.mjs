import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, symlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanText, scanFile, resolveBaseRef, listScanTargets, scanIdentity, scanCommitMeta, scanCommitRange, resolveDenylistFile, selfExcludedPaths } from '../scripts/check-public-safety.mjs';

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url));
const CHECKER_PATH = fileURLToPath(new URL('../scripts/check-public-safety.mjs', import.meta.url));
const TEST_FILE_PATH = fileURLToPath(import.meta.url);

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

// --- I3: credential coverage was 5 narrow regexes; this closes the gap. --
// Every fixture below is an obviously-fake, structurally-plausible stand-in
// (the brief's own placeholder shapes) -- never a real credential.

test('flags authToken= and auth_token= (not just the underscore-prefixed _authToken)', () => {
  assert.ok(scanText('authToken=abc123').length > 0);
  assert.ok(scanText('auth_token=abc123').length > 0);
});

test('flags bare token=, password=, and secret= assignments', () => {
  assert.ok(scanText('token=abc123').length > 0);
  assert.ok(scanText('password=abc123').length > 0);
  assert.ok(scanText('secret=abc123').length > 0);
});

test('flags client_secret= and aws_secret_access_key= (secret/token/password match as substrings of a longer identifier)', () => {
  assert.ok(scanText('client_secret=abc123').length > 0);
  assert.ok(scanText('aws_secret_access_key=abc123').length > 0);
});

test('flags NPM_TOKEN= and other TOKEN-suffixed environment-variable-shaped assignments', () => {
  assert.ok(scanText('NPM_TOKEN=abc123').length > 0);
  assert.ok(scanText('GITHUB_TOKEN=abc123').length > 0);
});

test('flags common provider token prefixes: npm_, ghp_, AKIA...', () => {
  assert.ok(scanText('npm_0123456789abcdefghijklmnopqrstuvwxyz').length > 0, 'npm_ automation token shape');
  assert.ok(scanText('ghp_0123456789abcdefghijklmnopqrstuvwx').length > 0, 'GitHub PAT shape');
  assert.ok(scanText('AKIAIOSFODNN7EXAMPLE').length > 0, 'AWS access key ID shape (this exact value is AWS\'s own published example, not a real key)');
});

test('flags a PEM private-key block (highest-severity credential class), with or without an algorithm name', () => {
  assert.ok(scanText('-----BEGIN RSA PRIVATE KEY-----\nMIIB...\n-----END RSA PRIVATE KEY-----').length > 0);
  assert.ok(scanText('-----BEGIN PRIVATE KEY-----\nMIIB...\n-----END PRIVATE KEY-----').length > 0);
  assert.ok(scanText('-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXk\n-----END OPENSSH PRIVATE KEY-----').length > 0);
});

test('flags an Authorization: Basic header (Bearer was already covered; Basic was not)', () => {
  assert.ok(scanText('Authorization: Basic dXNlcjpwYXNzd29yZA==').length > 0);
});

// I7 (M06/M07): api_key and Bearer had regexes but no dedicated test at all
// -- a mutation deleting or breaking either one left the suite green.

test('flags api_key= and api-key= assignments', () => {
  assert.ok(scanText('api_key=abc123').length > 0);
  assert.ok(scanText('api-key=abc123').length > 0);
});

test('flags a Bearer token', () => {
  assert.ok(scanText('Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9').length > 0);
});

test('does not flag "Bearer" followed by a short word (below the length floor) -- balance against false positives like ordinary prose', () => {
  assert.deepEqual(scanText('Bearer of good news'), []);
});

test('does not flag a bare mention of "token"/"secret"/"password" with no assignment operator (balance against false positives)', () => {
  assert.deepEqual(scanText('the access token expired, please request a new one'), []);
  assert.deepEqual(scanText('this field holds a secret value chosen by the user'), []);
  assert.deepEqual(scanText('password strength requirements are documented separately'), []);
  assert.deepEqual(scanText('the plugins token catches it at any nesting depth'), []);
});

test('flags URLs whose host is not on the public allowlist', () => {
  // Uses .com, not .invalid: C3 allowlists the RFC 2606 reserved TLDs
  // (.invalid/.test/.example) below, since they can never resolve to
  // anything real -- so a host actually meant to represent "a real,
  // non-public host" in a test fixture must not use one of those TLDs
  // itself, or it would (correctly, now) be allowlisted instead of flagged.
  assert.ok(scanText('see https://intranet.example.com/repo').length > 0);
});

// --- C3(b): RFC 2606 reserved TLDs are allowlisted for the host check. ---
//
// .invalid/.test/.example are reserved by RFC 2606 specifically so they can
// NEVER be delegated/resolve to anything real -- unlike an arbitrary host
// ending in .com, allowlisting these costs zero true positives: no real
// leak can ever look like this. Before this fix, the checker's own docs
// (docs/plans/phase-1-generator.md, quoting this task's own .invalid test
// fixtures verbatim) tripped this exact check on its own quoted example
// code -- disagreeing with its own stated threat model.

test('allowlists RFC 2606 reserved TLDs (.invalid, .test, .example) for the general URL-host check', () => {
  assert.deepEqual(scanText('see https://anything.example.invalid/path'), []);
  assert.deepEqual(scanText('see https://anything.example.test/path'), []);
  assert.deepEqual(scanText('see https://anything.example.example/path'), []);
  assert.deepEqual(scanText('see https://plain.invalid/path'), []);
});

test('the reserved-TLD allowlist does not affect the registry check, which stays strict regardless (a non-public registry is still flagged even on a reserved TLD)', () => {
  assert.ok(scanText('registry=https://feed.example.invalid/npm/').length > 0);
});

// --- I4: only http(s):// was host-checked; non-http schemes passed clean. -

test('flags non-allowlisted hosts in non-http(s) URL schemes: ssh://, git+ssh://, ftp://', () => {
  assert.ok(scanText('clone via ssh://intranet.example.com/repo.git').length > 0);
  assert.ok(scanText('clone via git+ssh://intranet.example.com/repo.git').length > 0);
  assert.ok(scanText('fetch via ftp://intranet.example.com/files').length > 0);
});

test('non-http(s) schemes still pass clean for an allowlisted host', () => {
  assert.deepEqual(scanText('clone via ssh://github.com/rstackjs/build-tools-performance.git'), []);
});

test('flags the scp shorthand (git@host:path, no :// at all) for a non-allowlisted host', () => {
  assert.ok(scanText('clone via git@intranet.example.com:org/repo.git').length > 0);
});

test('the scp shorthand passes clean for an allowlisted host (e.g. a real GitHub clone URL)', () => {
  assert.deepEqual(scanText('clone via git@github.com:rstackjs/build-tools-performance.git'), []);
});

test('flags the leading-"//" .npmrc registry form for a non-allowlisted host (this is real .npmrc syntax, not prose)', () => {
  assert.ok(scanText('//npm.intranet.example.com/:always-auth=true').length > 0);
});

test('the leading-"//" .npmrc form passes clean for the real public npm registry host', () => {
  assert.deepEqual(scanText('//registry.npmjs.org/some-scope'), []);
});

test('an ordinary "//" line comment (no host-shaped text right after it) is not flagged by the .npmrc-form check', () => {
  assert.deepEqual(scanText('// this is a normal comment, not a registry line'), []);
  assert.deepEqual(scanText('// see the design doc for details'), []);
});

test('passes clean public content', () => {
  assert.deepEqual(scanText("import { rspack } from '@rspack/core';"), []);
  assert.deepEqual(scanText('registry=https://registry.npmjs.org/'), []);
  assert.deepEqual(scanText('https://github.com/rstackjs/build-tools-performance'), []);
});

test('M2: allowlists docs.renovatebot.com, the $schema host .github/renovate.json already references (so touching that file does not newly self-trigger)', () => {
  assert.deepEqual(scanText('https://docs.renovatebot.com/renovate-schema.json'), []);
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

test('does NOT flag a backtick-quoted path placeholder used in documentation prose (C3: this exact shape is docs/public-safety.md\'s own prose)', () => {
  assert.deepEqual(scanText('a filesystem path under `/Users/` or `/home/`, an email domain'), []);
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

// M5: the denylist file's parsed terms are cached (keyed on path + mtime +
// size) so a real CLI run -- which calls detectAll once per scanned file
// and once per scanned commit -- does not re-read and re-compile it from
// scratch every single time. This test proves the cache is CORRECT, not
// just present: it must still notice a real change to the file's content,
// not serve stale terms forever.
test('M5: the denylist cache correctly picks up a real change to the file\'s content (mtime/size-keyed, not "cache forever")', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-cache-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 'fictional-term-alpha\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(scanText('mentions fictional-term-alpha here').length > 0, 'the original term must match');
    assert.deepEqual(scanText('mentions fictional-term-beta here'), [], 'the not-yet-added term must not match yet');

    // Overwrite with different content -- a real change, not a re-write of
    // the same bytes -- and confirm the NEW term is picked up and the OLD
    // one no longer matches, proving the cache busted rather than serving
    // the first read forever.
    writeFileSync(file, 'fictional-term-beta\n');
    assert.deepEqual(scanText('mentions fictional-term-alpha here'), [], 'the old term must no longer match after the file changed');
    assert.ok(scanText('mentions fictional-term-beta here').length > 0, 'the new term must match once the file changed');
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

// --- I6: denylist terms are matched LITERALLY by default, not as regexes. --
//
// Compiling a human-supplied denylist term as a regex silently defeats the
// exact protection this file exists to provide: an invalid regex (e.g. a
// term containing unbalanced quantifiers) previously threw inside a try/catch
// that swallowed the error and moved on, so the term was silently NEVER
// checked for -- no warning, no crash, just quiet non-protection. A valid-
// but-unintended regex is just as bad in the other direction: it can match
// MORE than the exact term the user named. Each fixture below uses an
// obviously-fake stand-in term, never a real internal name.

test('a denylist term containing regex metacharacters (unbalanced quantifiers) is matched literally, not silently dropped as an invalid regex', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-literal-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    // As a regex, 'C++Toolkit' throws SyntaxError ("Nothing to repeat"): the
    // OLD behavior silently skipped this line entirely, with no warning.
    writeFileSync(file, 'C++Toolkit\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(
      scanText('internal docs still mention C++Toolkit here').length > 0,
      'a literal term that happens to look like an invalid regex must still be matched, not silently dropped'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('a denylist term containing parentheses is matched as literal parens, not as a regex capture group', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-literal-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 'Project (Blue)\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(scanText('the plan is called Project (Blue) internally').length > 0, 'the exact literal term must match');
    assert.deepEqual(
      scanText('the plan is called Project Blue internally'),
      [],
      'must NOT match the parenthesis-free text -- that is what regex-group interpretation did under the old behavior'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('a denylist term containing a dot is matched as a literal dot, not "any character"', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-literal-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 'acme.internal\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(scanText('reach out via acme.internal for details').length > 0, 'the exact literal term must match');
    assert.deepEqual(
      scanText('reach out via acmeXinternal for details'),
      [],
      'must NOT match "acmeXinternal" -- that is what "." meaning "any character" did under the old behavior'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('a denylist line prefixed with "re:" opts back into regex matching, for the rare case that is genuinely wanted', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-regex-optin-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 're:proj-\\d{4}\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    assert.ok(scanText('internal ticket proj-1234 filed').length > 0);
    assert.ok(scanText('internal ticket proj-5678 filed').length > 0);
    assert.deepEqual(scanText('internal ticket proj-abcd filed'), [], 're:-prefixed pattern must still behave as a real regex (\\d{4} must not match letters)');
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('an unparseable "re:" line is skipped with a stderr warning that never echoes the term itself', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-badregex-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, 're:(unclosed-paren-fictionalcodename\nfictional-plain-term\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    const originalError = console.error;
    const errs = [];
    console.error = (...args) => errs.push(args.join(' '));
    try {
      const violations = scanText('this mentions fictional-plain-term only');
      assert.ok(violations.length > 0, 'the OTHER, valid line in the same file must still be applied');
    } finally {
      console.error = originalError;
    }
    assert.ok(errs.length > 0, 'expected a stderr warning about the unparseable line');
    assert.ok(!errs.some((l) => /unclosed-paren-fictionalcodename/.test(l)), 'the warning must never echo the unparseable term itself');
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

// I8: a term shaped for catastrophic backtracking must not hang the checker.
// Literal-by-default (above) is the primary fix: `(a+)+$` with no `re:`
// prefix is now just an exact, harmless literal string to search for.
test('a catastrophic-backtracking-shaped term with no "re:" prefix does not hang the checker (I6 literal-by-default resolves I8)', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-redos-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    writeFileSync(file, '(a+)+$\n');
    process.env.SAFETY_DENYLIST_FILE = file;
    const adversarial = 'a'.repeat(40) + '!'; // classic (a+)+$ catastrophic-backtracking trigger, if compiled as regex
    const start = Date.now();
    const violations = scanText(`padding before ${adversarial} padding after`);
    const elapsedMs = Date.now() - start;
    assert.ok(elapsedMs < 2000, `expected near-instant completion, took ${elapsedMs}ms`);
    assert.deepEqual(violations, [], 'the literal string "(a+)+$" does not appear in the scanned text, so there must be no match');
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
}, 5000);

test('an oversized "re:" pattern is rejected (length-capped) rather than compiled unconditionally', () => {
  const prev = process.env.SAFETY_DENYLIST_FILE;
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-deny-oversize-'));
  const file = path.join(dir, 'denylist.txt');
  try {
    const hugePattern = 're:' + 'a'.repeat(500);
    writeFileSync(file, `${hugePattern}\n`);
    process.env.SAFETY_DENYLIST_FILE = file;
    const originalError = console.error;
    const errs = [];
    console.error = (...args) => errs.push(args.join(' '));
    let violations;
    try {
      violations = scanText('a'.repeat(500));
    } finally {
      console.error = originalError;
    }
    assert.deepEqual(violations, [], 'an oversized regex pattern must be rejected, not compiled and matched');
    assert.ok(errs.length > 0, 'expected a stderr warning about the oversized pattern');
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

// --- C1: the denylist file must never become its own scan target. --------
//
// SAFETY_DENYLIST_FILE holds the real sensitive terms this checker protects.
// If it resolves INSIDE the repo, it is one `git add -A` away from being
// committed, and (before this fix) an untracked copy inside the repo was
// picked up by listScanTargets and scanned as ordinary content -- meaning
// every term in it matched itself, and the CLI printed each one. These tests
// use an obviously-fake stand-in term, never a real internal name.

test('resolveDenylistFile resolves SAFETY_DENYLIST_FILE to an absolute path and reports whether it is inside the repo', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-denylist-loc-'));
  const prev = process.env.SAFETY_DENYLIST_FILE;
  try {
    assert.equal(resolveDenylistFile({ cwd: dir }), null, 'unset SAFETY_DENYLIST_FILE must resolve to null');

    process.env.SAFETY_DENYLIST_FILE = path.join(dir, 'inside.txt');
    const inside = resolveDenylistFile({ cwd: dir });
    assert.equal(inside.insideRepo, true);
    assert.equal(inside.absolute, path.join(dir, 'inside.txt'));

    process.env.SAFETY_DENYLIST_FILE = path.join(path.dirname(dir), 'outside-denylist.txt');
    assert.equal(resolveDenylistFile({ cwd: dir }).insideRepo, false);
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('listScanTargets hard-excludes the denylist file regardless of location, even though it is untracked and inside the repo', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-denylist-scope-'));
  const prev = process.env.SAFETY_DENYLIST_FILE;
  try {
    initBaseAndFeatureBranch(dir);
    const denylistPath = path.join(dir, '.local-denylist-test.txt');
    writeFileSync(denylistPath, 'fictional-codename-decoy\n');
    process.env.SAFETY_DENYLIST_FILE = denylistPath;
    const targets = listScanTargets({ cwd: dir });
    assert.ok(!targets.includes('.local-denylist-test.txt'), 'the denylist file must never be a scan target');
  } finally {
    rmSync(dir, { recursive: true, force: true });
    if (prev === undefined) delete process.env.SAFETY_DENYLIST_FILE;
    else process.env.SAFETY_DENYLIST_FILE = prev;
  }
});

test('CLI refuses to run (clear error, distinct non-zero exit) when SAFETY_DENYLIST_FILE resolves inside the repo, and the term never reaches stdout/stderr', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-denylist-inside-'));
  const prev = process.env.SAFETY_DENYLIST_FILE;
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), "import { rspack } from '@rspack/core';\n");
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a clean feature file'], dir);

    mkdirSync(path.join(dir, 'outside'));
    const secretTerm = 'fictional-codename-decoy-alpha';
    writeFileSync(path.join(dir, 'outside', 'deny.txt'), `${secretTerm}\n`);
    process.env.SAFETY_DENYLIST_FILE = path.join(dir, 'outside', 'deny.txt');

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected a non-zero exit. output:\n${out}`);
    assert.notEqual(code, 1, 'a refusal must be distinguishable from "violations found" (exit 1)');
    assert.doesNotMatch(out, new RegExp(secretTerm), 'the denylist term itself must never appear in CLI output, under this or any other code path');
    assert.match(out, /SAFETY_DENYLIST_FILE/, 'the error must clearly name the problem');
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
      ['line one is clean', '_authToken=abc123', 'line three is clean', 'see https://intranet.example.com/x'].join('\n') + '\n'
    );
    const violations = scanFile(file);
    assert.equal(violations.length, 2, `expected exactly 2 violations, got ${JSON.stringify(violations)}`);
    assert.equal(violations[0].file, file);
    assert.equal(violations[0].line, 2);
    assert.match(violations[0].match, /_authToken/);
    assert.match(violations[0].description, /credential/);
    assert.equal(violations[1].line, 4);
    assert.match(violations[1].match, /intranet\.example\.com/);
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

// --- C3(c): marker-scoped suppression, an alternative to whole-file      -
// exclusion (SELF_PATHS). A file that is otherwise fully scanned can carry
// a small number of deliberately-quoted trigger shapes -- e.g. this
// checker's own documentation demonstrating what it detects -- without each
// one becoming an invisible, permanent, whole-file exclusion. Each
// suppression is a single, visible, diff-reviewable line that must carry a
// reason (`-- <reason>`) to take effect at all, unlike SELF_PATHS, which
// silently hides an entire file with no per-use justification.

test('a "safety-check: ignore-line" marker (with a reason) suppresses violations on that exact line only', () => {
  const text = ['_authToken=abc123 // safety-check: ignore-line -- deliberate fixture, see test file', 'clean line here'].join('\n');
  assert.deepEqual(scanText(text), []);
});

test('"ignore-line" does not suppress a violation on a DIFFERENT line, even the very next one', () => {
  const text = ['_authToken=abc123 // safety-check: ignore-line -- deliberate fixture', '_password=abc123'].join('\n');
  const violations = scanText(text);
  assert.equal(violations.length, 1, `expected exactly the un-marked line to still be flagged, got: ${JSON.stringify(violations)}`);
});

test('a suppression marker with NO reason after it does not suppress anything -- justification is required, not just the marker keyword', () => {
  const withReason = '_authToken=abc123 // safety-check: ignore-line -- deliberate fixture, see test file';
  const withoutReason = '_authToken=abc123 // safety-check: ignore-line';
  assert.deepEqual(scanText(withReason), [], 'sanity: the WITH-reason form must suppress');
  assert.ok(scanText(withoutReason).length > 0, 'a bare marker with no reason text must NOT suppress -- must fail open, not silently');
});

test('an "ignore-next-block" marker suppresses a fenced code block that follows it, but not content after the block closes', () => {
  const text = [
    '<!-- safety-check: ignore-next-block -- deliberate fixture demonstrating detection -->',
    '',
    '```js',
    "assert.ok(scanText('_authToken=abc123').length > 0);",
    '```',
    '',
    '_password=abc123',
  ].join('\n');
  const violations = scanText(text);
  assert.equal(violations.length, 1, `expected only the post-block line to be flagged, got: ${JSON.stringify(violations)}`);
  assert.match(violations[0], /password/);
});

test('"ignore-next-block" falls back to "until the next blank line" when no fenced block follows', () => {
  const text = [
    '<!-- safety-check: ignore-next-block -- deliberate fixture, no fence here -->',
    '_authToken=abc123 is deliberately shown here as an example.',
    '',
    '_password=abc123',
  ].join('\n');
  const violations = scanText(text);
  assert.equal(violations.length, 1, `expected only the line after the blank line to be flagged, got: ${JSON.stringify(violations)}`);
  assert.match(violations[0], /password/);
});

test('documented limitation: the marker must be on ONE line -- a multi-line comment before the fence makes the fallback (not the fence) apply, ending the suppressed range too early', () => {
  // A real mistake made and caught while applying this to
  // docs/plans/phase-1-generator.md: writing the marker as a wrapped,
  // multi-line HTML comment meant the line right after the marker was
  // non-blank prose (a comment continuation line), not the fence -- so the
  // "next fenced block" search never triggered, and the "until next blank
  // line" fallback ended the suppressed range at the comment's OWN closing
  // line, before the fence even started. Fixed by keeping the marker (with
  // its reason) on a single line. This test pins that behavior down so a
  // future change to the algorithm has to decide this deliberately.
  const text = [
    '<!-- safety-check: ignore-next-block -- reason continues',
    'onto a second line, which is what confuses the search -->',
    '',
    '```js',
    "assert.ok(scanText('_authToken=abc123').length > 0);",
    '```',
  ].join('\n');
  const violations = scanText(text);
  assert.ok(violations.length > 0, 'the fenced block is NOT suppressed when the marker itself spans multiple lines');
});

test('this checker\'s OWN source is clean when scanned directly -- it no longer needs whole-file self-exclusion (C3)', () => {
  // Before C3, this file's own source (specifically one deliberate worked
  // example in a header comment) would self-trigger, which was the whole
  // reason it sat in SELF_PATHS. That example is now protected by a single
  // `safety-check: ignore-line` marker instead (see the header comment
  // above SELF_PATHS), so the file's real source is clean on its own merits
  // -- confirmed here directly, the same way the OLD version of this test
  // proved the opposite.
  const ownSource = readFileSync(CHECKER_PATH, 'utf8');
  assert.deepEqual(scanText(ownSource), []);
});

test('self-exclusion is still doing real work for the one file that remains in SELF_PATHS: test/safety.test.mjs\'s OWN source, scanned directly, IS flagged', () => {
  // Proves the ONE remaining self-exclusion (see SELF_PATHS) is necessary
  // and not vacuous: without it, this very file would flag itself, because
  // it must literally contain dozens of trigger fixtures ("_authToken=",
  // ".local", "Bearer", private-key blocks, etc.) to be able to test them.
  const ownSource = readFileSync(TEST_FILE_PATH, 'utf8');
  const violations = scanText(ownSource);
  assert.ok(
    violations.length > 0,
    'expected this test file\'s own source to contain pattern text that scanText (with no path-awareness) would flag'
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

test('M3: a failed internal git command (e.g. probing a bad SAFETY_BASE_REF candidate) does not leak git\'s own stderr through the CLI', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-stderr-'));
  const prev = process.env.SAFETY_BASE_REF;
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), "import { rspack } from '@rspack/core';\n");
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: clean'], dir);

    // A ref that does not exist: resolveBaseRef's first (failing) probe of
    // it is exactly the tryGit call that used to leak git's own
    // "fatal: Needed a single revision" to stderr.
    process.env.SAFETY_BASE_REF = 'this-ref-does-not-exist-zzz';
    const { stdout, stderr } = runCli([], dir);
    assert.doesNotMatch(stderr || '', /fatal:/, `tryGit must not leak git's stderr through the CLI. stderr:\n${stderr}\nstdout:\n${stdout}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
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

test('listScanTargets no longer excludes this checker\'s own source (C3: retired from SELF_PATHS once its real self-triggers were fixed narrowly instead)', () => {
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  assert.ok(targets.has('scripts/check-public-safety.mjs'), 'checker script is changed on this branch and must now be in scope like any other file');
  assert.ok(!targets.has('test/safety.test.mjs'), 'checker test must still self-exclude (see SELF_PATHS and C3(d))');
});

test('listScanTargets no longer excludes docs/plans/phase-1-generator.md (C3: its false positives were fixed -- TLD allowlist + a marker -- instead of hiding the whole file)', () => {
  // Real finding from running the CLI against this actual repo (see
  // task-7-report.md): docs/plans/phase-1-generator.md is a real,
  // already-committed (Tasks 1-6) planning document that quotes this task's
  // brief -- including its scanText test fixtures (the same .invalid hosts
  // and abc123 placeholders used in test/safety.test.mjs) -- verbatim, as
  // part of specifying what Task 7 should build. C3 in the fix report found
  // this file's actual false positives were narrowly fixable (2 host FPs by
  // allowlisting RFC 2606 reserved TLDs, 2 credential FPs by a single
  // marker-scoped suppression around the quoted block) rather than needing
  // the whole file hidden.
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  assert.ok(
    targets.has('docs/plans/phase-1-generator.md'),
    'docs/plans/phase-1-generator.md is changed on this branch (Tasks 1-6) and must now be in scope like any other file'
  );
});

test('the self-exclusion set (SELF_PATHS) does not grow without a deliberate, reviewed reason', () => {
  assert.deepEqual(
    selfExcludedPaths().sort(),
    ['test/safety.test.mjs'],
    'C3(d): only test/safety.test.mjs should ever need whole-file exclusion -- if this fails because a path was added, make sure narrower fixes (char-class/backtick fixes, TLD allowlisting, marker-scoped suppression) were tried first, per C3 in the fix report'
  );
});

test('listScanTargets does not scan an untouched upstream file under cases/ -- not because of a directory exclusion, but simply because it is not part of the diff', () => {
  // cases/react-10k predates this fork and is never in the diff against
  // main. This is NOT enforced by a `cases/`-prefix exclusion (see C2: that
  // exclusion used to also strip out this fork's OWN changes under cases/,
  // which is exactly the blind spot fixed here) -- it holds simply because
  // an unmodified tracked file is never part of `git diff --name-only` and
  // was never untracked either. (cases/rome existed in this repo's earlier
  // upstream history but is not present at the current HEAD, so
  // react-10k -- confirmed present -- is used instead.)
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  const anyCasesFile = git(['ls-files', 'cases/react-10k'], REPO_ROOT).split('\n')[0];
  assert.ok(anyCasesFile, 'fixture sanity: cases/react-10k must have at least one tracked file');
  assert.ok(!targets.has(anyCasesFile), `${anyCasesFile} must not be in scope: it is untouched, not because it is under cases/`);
});

test('listScanTargets includes a file this fork ADDS under cases/ (fork-added content is not vendor-excluded merely for its directory)', () => {
  // C2: a fork-added file under cases/ (e.g. a newly generated benchmark
  // case) must be scanned like any other new content. It used to be
  // silently stripped back out by an always-on `cases/`-prefix filter,
  // applied AFTER the diff -- so it never mattered whether the file was in
  // the diff at all.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cases-scope-'));
  try {
    initBaseAndFeatureBranch(dir);
    mkdirSync(path.join(dir, 'cases', 'newcase'), { recursive: true });
    writeFileSync(path.join(dir, 'cases', 'newcase', 'leak.txt'), 'nothing suspicious\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a new case'], dir);

    const targets = listScanTargets({ cwd: dir });
    assert.ok(targets.includes('cases/newcase/leak.txt'), 'a fork-added file under cases/ must be in scope');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('listScanTargets includes a file this fork MODIFIES under cases/ (not just newly-added ones)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cases-scope-'));
  try {
    git(['init', '-q', '-b', 'main'], dir);
    mkdirSync(path.join(dir, 'cases', 'existing'), { recursive: true });
    writeFileSync(path.join(dir, 'cases', 'existing', 'vendor.txt'), 'upstream content, untouched by this fork\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'chore: base commit with an upstream cases/ file'], dir);
    git(['checkout', '-q', '-b', 'feature'], dir);

    writeFileSync(path.join(dir, 'cases', 'existing', 'vendor.txt'), 'upstream content, NOW MODIFIED by this fork\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: modify an existing case'], dir);

    const targets = listScanTargets({ cwd: dir });
    assert.ok(targets.includes('cases/existing/vendor.txt'), 'a fork-modified file under cases/ must be in scope, not just fork-added ones');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('listScanTargets\' no-base fallback now includes cases/ too (there is no vendor-directory special-case left to exclude it)', () => {
  // Before C2, this fallback path ("no base ref resolves at all") was the
  // ONE place isVendorPath actually did something: it kept a shallow clone
  // with no main/origin from scanning all of cases/. Removing it means the
  // fallback now scans everything tracked, cases/ included -- traded
  // deliberately for correctness in the common (base-resolves) path; see
  // the timing measured in the fix report for why this remains fast enough.
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
    assert.ok(targets.has('cases/vendored.txt'), 'the no-base fallback must no longer special-case cases/ out of scope');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI catches a real leak planted in a NEW file under cases/ (the exact blind spot C2 closes)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-cases-new-'));
  try {
    initBaseAndFeatureBranch(dir);
    mkdirSync(path.join(dir, 'cases', 'newcase'), { recursive: true });
    writeFileSync(path.join(dir, 'cases', 'newcase', 'leak.txt'), 'Plan: /Users/exampledev/scratch/notes.md\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a new case (with an accidental leak)'], dir);

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected a non-zero exit for a leak under cases/. output:\n${out}`);
    assert.match(out, /cases\/newcase\/leak\.txt/, 'must name the fork-added cases/ file');
    assert.match(out, /\/Users\/exampledev/, 'must show the matched leak text');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI catches a real leak planted by MODIFYING an existing file under cases/', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-cases-mod-'));
  try {
    git(['init', '-q', '-b', 'main'], dir);
    mkdirSync(path.join(dir, 'cases', 'existing'), { recursive: true });
    writeFileSync(path.join(dir, 'cases', 'existing', 'vendor.txt'), 'upstream content, untouched by this fork\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'chore: base commit with an upstream cases/ file'], dir);
    git(['checkout', '-q', '-b', 'feature'], dir);

    writeFileSync(path.join(dir, 'cases', 'existing', 'vendor.txt'), 'cwd: /home/exampledev/project\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: modify an existing case (with an accidental leak)'], dir);

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected a non-zero exit for a leak in a modified cases/ file. output:\n${out}`);
    assert.match(out, /cases\/existing\/vendor\.txt/, 'must name the fork-modified cases/ file');
    assert.match(out, /\/home\/exampledev/, 'must show the matched leak text');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('listScanTargets includes this fork\'s own changed files (e.g. .gitignore, the generator, its docs)', () => {
  const targets = new Set(listScanTargets({ cwd: REPO_ROOT }));
  for (const f of ['.gitignore', 'scripts/generate-case.mjs', 'docs/design/synthetic-chunk-scaling.md']) {
    assert.ok(targets.has(f), `expected ${f} to be in scope (changed vs this fork's base)`);
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
  // spawnSync (not execFileSync) deliberately: execFileSync only exposes
  // stderr via `err.stderr` on the THROWING (non-zero exit) path -- on a
  // clean (exit 0) run its return value is stdout only, so any test
  // asserting something about stderr on a clean run would be silently
  // vacuous (this was a real bug, caught while writing the M3 test).
  // spawnSync always returns both, regardless of exit code.
  const result = spawnSync('node', [CHECKER_PATH, ...args], { cwd, encoding: 'utf8' });
  return { code: result.status, stdout: result.stdout ?? '', stderr: result.stderr ?? '' };
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

// I7 (M28): the docs' core pre-commit promise -- "this also covers what you
// are about to commit" -- was previously untested: every other CLI fixture
// happened to `git add` + commit before scanning, so a mutation that
// dropped the untracked-files half of listScanTargets entirely would have
// left the whole suite green.
test('CLI scans a genuinely UNTRACKED file (never `git add`ed at all) -- the working-tree-diff-plus-untracked design this checker documents', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-untracked-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'untracked-leak.txt'), '_authToken=abc123\n');
    // Deliberately no `git add` at all -- this is the exact state a
    // pre-commit hook runs in before `git commit` stages anything further.

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected the untracked file to be scanned. output:\n${out}`);
    assert.match(out, /untracked-leak\.txt/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// I7 (M30): --files-only / --commits-only are documented in --help but were
// previously untested -- a mutation that made either flag a no-op left the
// suite green.
test('--files-only skips commit-metadata scanning (a bad commit identity alone is not flagged)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-filesonly-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), 'perfectly clean file content\n');
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local', 'add', '.'], dir);
    git(['-c', 'user.name=Some Dev', '-c', 'user.email=somedev@Some-Machine.local',
      'commit', '-q', '-m', 'feat: bad identity, clean file'], dir);

    assert.notEqual(runCli([], dir).code, 0, 'fixture sanity: without --files-only, the bad identity must be flagged');

    const { code, stdout, stderr } = runCli(['--files-only'], dir);
    const out = stdout + (stderr || '');
    assert.equal(code, 0, `expected --files-only to skip the bad commit identity entirely. output:\n${out}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('--commits-only skips file-content scanning (a bad file alone, with a good identity, is not flagged)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-commitsonly-'));
  try {
    initBaseAndFeatureBranch(dir);
    writeFileSync(path.join(dir, 'feature.txt'), '_authToken=abc123\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: bad file content, good identity'], dir);

    assert.notEqual(runCli([], dir).code, 0, 'fixture sanity: without --commits-only, the bad file must be flagged');

    const { code, stdout, stderr } = runCli(['--commits-only'], dir);
    const out = stdout + (stderr || '');
    assert.equal(code, 0, `expected --commits-only to skip the bad file content entirely. output:\n${out}`);
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

// --- I1: --all, an audit mode answering "is this repo leaking?" (full    -
// scan), not just "does my branch add a leak?" (the default, diff-scoped   -
// mode). listScanTargets({baseRef: null}) already implements the full-scan -
// path (used internally as the no-base-resolvable fallback); --all is the  -
// small addition that lets a human actually reach it on purpose.

test('CLI --all scans every tracked file, not just what changed vs. base -- catching a leak that predates this fork and was never touched', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-all-'));
  try {
    // A leak already committed on `main`, before this branch ever forked --
    // this fork never touches it, so the default (diff-scoped) mode must
    // NOT see it (fixture sanity, checked below); --all must.
    git(['init', '-q', '-b', 'main'], dir);
    writeFileSync(path.join(dir, 'preexisting.txt'), 'Plan: /Users/exampledev/scratch/notes.md\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'chore: base commit (already has a leak, predates this fork)'], dir);
    git(['checkout', '-q', '-b', 'feature'], dir);
    writeFileSync(path.join(dir, 'feature.txt'), "import { rspack } from '@rspack/core';\n");
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a clean feature file, never touching preexisting.txt'], dir);

    const { code: defaultCode, stdout: defaultOut } = runCli([], dir);
    assert.equal(defaultCode, 0, `fixture sanity: the default scope must be clean (the pre-existing leak is on main, not part of this branch's diff). stdout:\n${defaultOut}`);

    const { code, stdout, stderr } = runCli(['--all'], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected --all to catch the pre-existing leak on main. output:\n${out}`);
    assert.match(out, /preexisting\.txt/, 'must name the pre-existing file, not just this branch\'s own changes');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('--help documents --all', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-help-all-'));
  try {
    const { stdout } = runCli(['--help'], dir);
    assert.match(stdout, /--all/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('M4: --help does not overclaim a general "structurally-plausible identifier" allowlist that does not exist, and says plainly what is out of scope', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-help-scope-'));
  try {
    const { stdout } = runCli(['--help'], dir);
    assert.doesNotMatch(
      stdout,
      /structurally-plausible identifiers/,
      'must not claim an identifier allowlist that no check in this file actually implements'
    );
    assert.match(stdout, /codename|ticket|employee|identifier/i, 'must say plainly that internal-looking identifiers/codenames are out of scope');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- I5: a symlink-to-directory in scan scope must not abort the whole   -
// scan (EISDIR), and a crash must never look like "no violations found".  -
// This repo already has a real symlink (node_modules), saved from this
// exact failure mode only by being gitignored.

test('CLI does not abort the entire scan when a symlink-to-directory is in scope (EISDIR), and still finds a real violation in another file', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-eisdir-'));
  try {
    initBaseAndFeatureBranch(dir);
    // Named to sort FIRST among scan targets (alphabetically before
    // feature.txt), so if EISDIR aborted the scan before this fix, nothing
    // after it would ever be checked -- reproducing the exact failure mode
    // named in the review.
    mkdirSync(path.join(dir, 'a-real-dir'));
    writeFileSync(path.join(dir, 'a-real-dir', 'placeholder.txt'), 'x\n');
    symlinkSync(path.join(dir, 'a-real-dir'), path.join(dir, '.aaa-link'));
    writeFileSync(path.join(dir, 'feature.txt'), '_authToken=abc123\n');
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'feat: add a dir-symlink and a real violation'], dir);

    // Fixture sanity: the symlink really does sort first and really is a
    // directory-shaped entry from scanFile's point of view.
    const targets = listScanTargets({ cwd: dir });
    assert.equal(targets[0], '.aaa-link', 'fixture sanity: the symlink must sort before the real violation file');
    assert.throws(() => scanFile(path.join(dir, '.aaa-link')), /EISDIR/, 'fixture sanity: scanFile itself still throws EISDIR on a directory (unchanged) -- main() must catch it, not scanFile');

    const { code, stdout, stderr } = runCli([], dir);
    const out = stdout + (stderr || '');
    assert.notEqual(code, 0, `expected the real violation to still be found. output:\n${out}`);
    assert.match(out, /feature\.txt/, 'the scan must have continued past the symlink to reach the real violation');
    assert.match(out, /_authToken/, 'must show the matched leak text');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('CLI --all also tolerates a symlink-to-directory (same EISDIR guard applies in the full-scan fallback path)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-safety-cli-eisdir-all-'));
  try {
    git(['init', '-q', '-b', 'main'], dir);
    mkdirSync(path.join(dir, 'a-real-dir'));
    writeFileSync(path.join(dir, 'a-real-dir', 'placeholder.txt'), 'x\n');
    symlinkSync(path.join(dir, 'a-real-dir'), path.join(dir, '.aaa-link'));
    writeFileSync(path.join(dir, 'clean.txt'), "import { rspack } from '@rspack/core';\n");
    git([...GOOD_IDENTITY, 'add', '.'], dir);
    git([...GOOD_IDENTITY, 'commit', '-q', '-m', 'chore: base with a dir-symlink'], dir);

    const { code, stdout, stderr } = runCli(['--all'], dir);
    const out = stdout + (stderr || '');
    assert.equal(code, 0, `expected a clean exit (the symlink is skipped, not fatal, and clean.txt is clean). output:\n${out}`);
    assert.match(out, /clean/i);
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
