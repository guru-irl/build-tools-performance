// scripts/check-public-safety.mjs
//
// PUBLIC-SAFETY CHECKER -- ALLOWLIST-based, on purpose.
//
// This repo is a PUBLIC fork. A denylist of internal codenames, hostnames,
// or registry URLs -- committed here to protect them -- would BE the leak:
// it would publish exactly the terms it exists to keep private, including in
// this file's own source and its test fixtures. So this checker asserts what
// is PERMITTED (a small set of known-public hosts, generic credential-syntax
// markers that are themselves public knowledge, and structurally-plausible
// identifiers) and flags anything outside that shape. It never encodes a real
// internal name, host, or path anywhere in this file or in test/safety.test.mjs.
//
// Environment-specific terms (if you have any to check for) live in an
// UNCOMMITTED local file supplied via the SAFETY_DENYLIST_FILE environment
// variable. This checker works correctly when that file is absent (the
// normal state for anyone who clones this public repo) and uses it as an
// ADDITIONAL check when present. See docs/public-safety.md for how to use it
// -- deliberately without saying what should go in it.
//
// Scope note: this module exports pure functions (scanText, scanFile,
// scanIdentity, scanCommitMeta) that do not know or care which files are "in
// scope" -- that decision (which deliberately excludes untouched upstream
// vendor content under cases/, see listScanTargets near the bottom of this
// file) is made by the CLI layer, not by the scanners themselves.
//
// Self-exclusion, concretely: this file and test/safety.test.mjs are excluded
// from the CLI's file-content scan (see SELF_PATHS below), because both must
// describe real trigger SHAPES to define/exercise them. For example, a line
// like `_authToken=00000000-0000-0000-0000-000000000000` (an illustrative,
// obviously-fake value, not a real token) is exactly what scanText's
// credential check looks for -- so this comment itself would be flagged by
// scanText if this file were ever scanned without that exclusion applied.
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Hosts a public benchmark repo legitimately links to. Deliberately small:
// every entry here is something a reviewer can eyeball and vouch for. Extend
// this list, don't loosen the matching (e.g. don't switch to a substring or
// suffix match without a very good reason -- suffix matches are exactly how
// a host allowlist gets quietly widened into "anything ending in .com").
const PUBLIC_HOSTS = new Set([
  'registry.npmjs.org',
  'npmjs.com',
  'github.com',
  'raw.githubusercontent.com',
  'objects.githubusercontent.com',
  'nodejs.org',
  'developer.mozilla.org',
  'rspack.rs',
  'rspack.dev',
  'vite.dev',
  'rollupjs.org',
  'webpack.js.org',
  'localhost',
  '127.0.0.1',
  // RFC 2606 reserved documentation domains: never resolve to anything real,
  // safe to allow unconditionally.
  'example.com',
  'example.org',
  'example.net',
]);

// Reserved / non-routable suffixes that show up as the DOMAIN half of a git
// identity when a machine has no real user.email configured -- `git commit`
// falls back to `<unixname>@<hostname>`, and mDNS-advertising hostnames on
// most systems end in one of these. A real, deliverable email address never
// ends in one of these suffixes, so this is an allowlist-shaped check (reject
// the reserved shape, allow everything else) rather than a denylist of real
// domains.
const RESERVED_EMAIL_SUFFIXES = [
  '.local', '.localdomain', '.lan', '.home', '.internal', '.corp',
  '.example', '.invalid', '.test', '.localhost',
];

// Local filesystem paths that reveal a real username or machine layout. The
// username-shaped run deliberately excludes `<` and `>` so that
// documentation using the literal placeholder `/Users/<name>` (as this
// checker's own docs and this task's brief do) never self-triggers: a real
// path never contains angle brackets, so excluding them costs no true
// positives.
const LOCAL_PATH_PATTERNS = [
  { name: 'Unix /Users path', re: /\/Users\/[^/\s'"()<>]+/g },
  { name: 'Unix /home path', re: /\/home\/[^/\s'"()<>]+/g },
  { name: 'Windows Users path', re: /[A-Za-z]:\\Users\\[^\\\s'"()<>]+/g },
];

// Credential-assignment SYNTAX recognized by npm's own (public) .npmrc
// format, plus a generic api_key/Bearer shape. Knowing that `.npmrc` supports
// `_authToken` / `_password` / `_auth` is public documentation, not a
// secret -- these patterns never encode a real credential VALUE, only the
// shape that precedes one.
const CREDENTIAL_PATTERNS = [
  { name: '_authToken', re: /_authToken\s*["']?\s*[:=]/gi },
  { name: '_password', re: /_password\s*["']?\s*[:=]/gi },
  { name: '_auth', re: /(?<!_auth[a-z]*)_auth\s*["']?\s*[:=]/gi },
  { name: 'api_key', re: /api[_-]?key\s*["']?\s*[:=]/gi },
  { name: 'Bearer token', re: /\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/g },
];

/**
 * Core scan: returns `{ description, index, match }` for every violation
 * found in `text`, with byte offsets into `text` so callers that have a file
 * path can turn `index` into a line number (see scanFile below). Internal --
 * scanText (the documented, stable public interface) maps this to plain
 * description strings.
 */
function detectAll(text) {
  const found = [];

  for (const { name, re } of LOCAL_PATH_PATTERNS) {
    for (const m of text.matchAll(re)) {
      found.push({ description: `local filesystem path (${name})`, index: m.index, match: m[0] });
    }
  }

  for (const { name, re } of CREDENTIAL_PATTERNS) {
    for (const m of text.matchAll(re)) {
      found.push({ description: `credential material (${name})`, index: m.index, match: m[0] });
    }
  }

  for (const m of text.matchAll(/^[ \t]*registry\s*=\s*(\S+)/gim)) {
    let host;
    try {
      host = new URL(m[1]).hostname.toLowerCase();
    } catch {
      found.push({ description: 'unparseable registry value', index: m.index, match: m[0] });
      continue;
    }
    if (host !== 'registry.npmjs.org') {
      found.push({ description: `non-public registry: ${host}`, index: m.index, match: m[0] });
    }
  }

  for (const m of text.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
    const host = m[1].toLowerCase();
    if (!PUBLIC_HOSTS.has(host)) {
      found.push({ description: `non-allowlisted host: ${host}`, index: m.index, match: m[0] });
    }
  }

  // ADDITIONAL check, only when the caller's environment supplies one: a
  // local, uncommitted, line-oriented list of extra regexes to flag. Read
  // fresh on every call (not cached at module load) so a caller can point
  // this at a different file, or none, between calls in the same process --
  // this is what lets test/safety.test.mjs exercise both the
  // present-and-absent cases directly via process.env without reloading the
  // module. Missing file (the normal public-clone state) is a silent no-op,
  // not an error: this checker must work with no denylist file at all.
  const denylistPath = process.env.SAFETY_DENYLIST_FILE;
  if (denylistPath && existsSync(denylistPath)) {
    const lines = readFileSync(denylistPath, 'utf8').split('\n');
    for (const raw of lines) {
      const term = raw.trim();
      if (!term || term.startsWith('#')) continue;
      let re;
      try {
        re = new RegExp(term, 'gi');
      } catch {
        continue; // an unparseable line in the user's own local file is their problem, not a crash
      }
      for (const m of text.matchAll(re)) {
        // Deliberately does not echo `term` here: the description string is
        // what a caller might log, persist, or forward, and the term itself
        // is exactly the thing this file must never carry. The MATCHED TEXT
        // (m[0], the actual snippet found in the scanned content, not the
        // denylist file) is still reported so a developer can find and fix
        // it -- see scanFile below and the CLI reporter, which do print it.
        found.push({ description: 'local denylist term matched', index: m.index, match: m[0] });
      }
    }
  }

  return found;
}

/**
 * 1-based line number containing byte offset `index` in `text`.
 */
function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

/**
 * Scan arbitrary text for public-safety violations. Returns a list of human
 * -readable descriptions, empty if clean. This is the stable, documented
 * interface: it takes no options and returns `string[]`, so it composes
 * trivially with anything (a file's content, a commit message, a config
 * snippet) without that caller needing to know file paths or line numbers.
 */
export function scanText(text) {
  return detectAll(text).map((v) => v.description);
}

/**
 * Scan a file on disk. Same detection as scanText, but returns structured
 * `{ file, line, match, description }` records (line is 1-based) so a CLI
 * reporter can name exactly where a violation is -- required for this tool
 * to be usable ("clear output naming the file, line, and matched text").
 * Throws if the file cannot be read (a missing/unreadable path is a caller
 * bug, not a silent pass).
 */
export function scanFile(filePath) {
  const text = readFileSync(filePath, 'utf8');
  return detectAll(text).map((v) => ({
    file: filePath,
    line: lineOf(text, v.index),
    match: v.match,
    description: v.description,
  }));
}

// --- Commit metadata: author/committer identity + commit message. --------
//
// File-content scanning alone cannot catch this class of leak: a commit
// authored as <user>@<hostname>.local (git's fallback identity when
// user.email is never configured) never appears in any file's content, only
// in commit metadata. This happened for real, 17 times, in this repo's own
// history (see task-7-report.md) before that history was rewritten.
//
// A real, deliverable email address never ends in a reserved/non-routable
// suffix like `.local` (RESERVED_EMAIL_SUFFIXES, defined above). This is
// intentionally an ALLOWLIST-shaped check -- reject the small set of
// known-bogus shapes, allow everything else -- rather than a denylist of
// specific real domains, so it does not need to know (or encode) anything
// about who actually contributes to this repo.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isPlausiblePublicEmail(email) {
  if (typeof email !== 'string' || !EMAIL_SHAPE.test(email)) return false;
  const domain = email.slice(email.indexOf('@') + 1).toLowerCase();
  return !RESERVED_EMAIL_SUFFIXES.some((suffix) => domain.endsWith(suffix));
}

/**
 * Scan a single git identity (author OR committer: `{ name, email }`).
 * Flags emails shaped like a machine's fallback identity (no real
 * user.email configured), plus anything scanText itself would flag if the
 * name/email fields happen to embed a path, credential, or bad host.
 */
export function scanIdentity({ name = '', email = '' } = {}) {
  const found = [];
  if (!isPlausiblePublicEmail(email)) {
    found.push(`git identity email is not a plausible public address: ${email}`);
  }
  found.push(...scanText(`${name} ${email}`));
  return found;
}

/**
 * Scan one commit's full metadata: author identity, committer identity, and
 * the commit message (which can carry a pasted credential or path just as
 * easily as a file can). Each violation is labeled by source so a reporter
 * can point at exactly which field is the problem.
 */
export function scanCommitMeta({
  authorName = '', authorEmail = '', committerName = '', committerEmail = '', message = '',
} = {}) {
  const found = [];
  for (const v of scanIdentity({ name: authorName, email: authorEmail })) found.push(`author: ${v}`);
  for (const v of scanIdentity({ name: committerName, email: committerEmail })) found.push(`committer: ${v}`);
  for (const v of scanText(message)) found.push(`commit message: ${v}`);
  return found;
}

// Field/record separators that cannot appear in normal git metadata: 0x1f
// (unit separator) between fields, 0x1e (record separator) between commits.
// Needed because a commit message (the last field) can itself contain
// almost any character, including newlines -- a naive newline-delimited
// format would misparse a multi-line commit message as multiple commits.
const FIELD_SEP = '\x1f';
const RECORD_SEP = '\x1e';
const LOG_FORMAT = ['%H', '%an', '%ae', '%cn', '%ce', '%B'].join(FIELD_SEP) + RECORD_SEP;

/**
 * Scan every commit in `range` (any `git log`-accepted revision range, e.g.
 * `base..HEAD`) for public-safety violations in its author identity,
 * committer identity, and message. Returns one `{ sha, violations }` entry
 * per commit (violations is `[]` for a clean commit) -- callers that only
 * want problems can filter on `violations.length`.
 */
export function scanCommitRange(range, { cwd = process.cwd() } = {}) {
  const raw = tryGit(['log', `--format=${LOG_FORMAT}`, range], cwd);
  if (raw === null) return [];
  return raw
    .split(RECORD_SEP)
    .map((r) => r.replace(/^\n/, ''))
    .filter((r) => r.trim().length > 0)
    .map((record) => {
      const [sha, authorName, authorEmail, committerName, committerEmail, ...rest] = record.split(FIELD_SEP);
      const message = rest.join(FIELD_SEP).replace(/\n+$/, '');
      return { sha, violations: scanCommitMeta({ authorName, authorEmail, committerName, committerEmail, message }) };
    });
}

// --- Scope: which files/commits get scanned. ------------------------------
//
// cases/ (~16,000 files) is upstream fixture content this fork has never
// authored or curated -- see docs/public-safety.md. Scanning it wholesale
// produces noise (e.g. a real upstream fixture legitimately contains the
// substring "local" as part of an icon package name, and another contains a
// third party's own /Users/<name> path in ITS OWN test fixtures). This fork's
// own content is what this checker actually needs to guard, so the default
// scope is "changed vs. this fork's base" (option a in the task's own
// scoping guidance), with a defined-path-list fallback (option b) when no
// base ref is available, and an always-on vendor-directory exclusion as
// defense in depth either way.
const VENDOR_DIR_PREFIXES = ['cases/'];

// This checker necessarily documents its own detection patterns in prose and
// test fixtures, and so would flag itself (or its test file) if scanned as
// ordinary content -- see the header comment. This is the only exclusion
// list in this file that is about the checker's OWN files, not vendored
// content, and it is small and enumerable on purpose.
//
// docs/plans/phase-1-generator.md is included here too, and this is a real
// finding, not a hypothetical: that file is this fork's own already-committed
// (Tasks 1-6) implementation plan, and its Task 7 section quotes this task's
// brief -- including its scanText test fixtures (the same .invalid hosts and
// abc123 placeholder used in test/safety.test.mjs) -- verbatim, as part of
// specifying what this checker should build. Scanning the actual repo with
// this file NOT excluded produces exactly 4 false-positive violations, all
// from that one quoted code block (see task-7-report.md). Excluding the
// whole file (rather than just that section) is a deliberate, coarser
// choice: this document is planning/specification material describing code
// across all of Phase 1, written and reviewed before any of it existed, and
// treating it as a unit is simpler and more robust than tracking line ranges
// inside it. The tradeoff is that a future edit elsewhere in this same file
// would also go unscanned -- accepted here because this file's role (a
// plan, not runtime code) makes that a low-probability place for a real
// leak to land, and it is easy to revisit if that changes.
const SELF_PATHS = new Set([
  'scripts/check-public-safety.mjs',
  'test/safety.test.mjs',
  'docs/public-safety.md',
  'docs/plans/phase-1-generator.md',
]);

function isVendorPath(relPath) {
  return VENDOR_DIR_PREFIXES.some((prefix) => relPath.startsWith(prefix));
}

function tryGit(args, cwd) {
  try {
    return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

// Candidates tried in order when SAFETY_BASE_REF is not set. This fork's own
// convention (see docs/plans/phase-1-generator.md) branches off main, and
// main is never advanced locally except by fetching upstream -- so main (or
// origin/main, if this is a fresh clone that has not created a local main
// yet) is the right diff base for "what has this fork actually changed".
const BASE_REF_CANDIDATES = ['origin/main', 'main', 'origin/HEAD'];

/**
 * Resolve which git ref to diff against to find this fork's own changes.
 * Returns null (never throws) if nothing resolves, so callers can fall back
 * to a defined path list instead of refusing to run.
 */
export function resolveBaseRef({ cwd = process.cwd() } = {}) {
  const envRef = process.env.SAFETY_BASE_REF;
  if (envRef && tryGit(['rev-parse', '--verify', envRef], cwd) !== null) return envRef;
  for (const ref of BASE_REF_CANDIDATES) {
    if (tryGit(['rev-parse', '--verify', ref], cwd) !== null) return ref;
  }
  return null;
}

/**
 * Repo-relative paths this checker should scan: everything this fork has
 * added or changed relative to its base ref (tracked + untracked, staged or
 * not -- this is deliberately a working-tree diff, not a HEAD-only one, so
 * it also covers what a pre-commit run is about to commit), always minus
 * vendor directories and this checker's own self-excluded files.
 *
 * `baseRef` can be passed explicitly (including `null` to force the
 * no-base-available fallback path, used by tests); otherwise it is resolved
 * via resolveBaseRef.
 */
export function listScanTargets({ cwd = process.cwd(), baseRef } = {}) {
  const resolvedBase = baseRef !== undefined ? baseRef : resolveBaseRef({ cwd });

  let files;
  if (resolvedBase) {
    const changed = tryGit(['diff', '--name-only', '--diff-filter=ACMRT', resolvedBase], cwd) || '';
    const untracked = tryGit(['ls-files', '--others', '--exclude-standard'], cwd) || '';
    files = new Set([...changed.split('\n'), ...untracked.split('\n')].filter(Boolean));
  } else {
    // Defined-path-list fallback: everything currently tracked, minus vendor
    // dirs. Used when no base ref is resolvable at all (e.g. a shallow clone
    // with no main/origin), so the checker still runs instead of refusing.
    const tracked = tryGit(['ls-files'], cwd) || '';
    files = new Set(tracked.split('\n').filter(Boolean));
  }

  return [...files]
    .filter((f) => !isVendorPath(f))
    .filter((f) => !SELF_PATHS.has(f))
    .sort();
}

// --- CLI ------------------------------------------------------------------
//
// Everything above this line is pure/testable library code with no I/O side
// effects beyond reading files and shelling out to (read-only) git commands.
// Everything below composes that into the one-command tool a developer or a
// pre-commit hook actually runs.

function printHelp() {
  console.log(`Usage: node scripts/check-public-safety.mjs [options]

Scans this fork's own changed files (vs. its upstream base) and its own
commits (vs. that same base) for public-safety violations: local filesystem
paths, credential material, non-public registries/hosts, non-allowlisted
hosts, and commit author/committer identities shaped like a machine's
fallback identity (no user.email configured) rather than a real address.

ALLOWLIST-based by design: flags anything outside a small set of
known-public hosts and structurally-plausible identifiers, rather than
listing internal terms to avoid -- a denylist of real internal names,
committed here, would itself be the leak.

Options:
  --help              show this help and exit 0
  --range <range>     git log revision range to scan for commit metadata
                      (default: <base>..HEAD, base auto-detected)
  --files-only        skip commit-metadata scanning
  --commits-only      skip file-content scanning

Environment:
  SAFETY_BASE_REF      override the auto-detected base ref (tried in order:
                       origin/main, main, origin/HEAD)
  SAFETY_DENYLIST_FILE path to an UNCOMMITTED, local, line-oriented file of
                       extra terms/regexes to also flag. Optional: this
                       checker works correctly with no such file present.
                       See docs/public-safety.md for the recommended format
                       -- deliberately without saying what should go in it.

Exit code is non-zero if anything was flagged.`);
}

/**
 * CLI entry point. Returns the process exit code (0 clean, 1 violations
 * found) rather than calling process.exit itself, so it stays testable as a
 * plain function; the direct-execution guard below is what actually sets
 * process.exitCode when this file is run as a script.
 */
export function main(argv = process.argv.slice(2), { cwd = process.cwd() } = {}) {
  if (argv.includes('--help') || argv.includes('-h')) {
    printHelp();
    return 0;
  }

  const filesOnly = argv.includes('--files-only');
  const commitsOnly = argv.includes('--commits-only');
  const rangeFlagIndex = argv.indexOf('--range');
  const explicitRange = rangeFlagIndex !== -1 ? argv[rangeFlagIndex + 1] : undefined;

  let violationCount = 0;

  if (!commitsOnly) {
    for (const rel of listScanTargets({ cwd })) {
      const abs = path.join(cwd, rel);
      let violations;
      try {
        violations = scanFile(abs);
      } catch (err) {
        // A file listed by git but no longer present on disk (e.g. deleted
        // in the working tree after the diff was taken) is not a crash.
        if (err.code === 'ENOENT') continue;
        throw err;
      }
      for (const v of violations) {
        console.log(`${rel}:${v.line}: ${v.description} \u2014 ${v.match}`);
        violationCount++;
      }
    }
  }

  if (!filesOnly) {
    const base = resolveBaseRef({ cwd });
    const range = explicitRange || (base ? `${base}..HEAD` : null);
    if (range) {
      for (const { sha, violations } of scanCommitRange(range, { cwd })) {
        for (const v of violations) {
          console.log(`commit ${sha.slice(0, 12)}: ${v}`);
          violationCount++;
        }
      }
    }
  }

  if (violationCount === 0) {
    console.log('public-safety check: CLEAN');
    return 0;
  }
  console.log(`public-safety check: ${violationCount} violation(s) found`);
  return 1;
}

// Only run as a CLI when executed directly (`node scripts/check-public-safety.mjs`),
// never when imported (e.g. by test/safety.test.mjs).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = main();
}
