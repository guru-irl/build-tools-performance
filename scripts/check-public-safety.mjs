// scripts/check-public-safety.mjs
//
// PUBLIC-SAFETY CHECKER.
//
// This repo is a PUBLIC fork. A denylist of internal codenames, hostnames,
// or registry URLs -- committed here to protect them -- would BE the leak:
// it would publish exactly the terms it exists to keep private, including in
// this file's own source and its test fixtures. So the one check that
// genuinely matters most for THAT specific risk -- which hosts/URLs are
// permitted -- is allowlist-shaped (PUBLIC_HOSTS plus RFC 2606 reserved
// TLDs; anything else is flagged), and so is the git-identity email check
// (reject the small set of known-machine-fallback shapes, e.g. `.local`;
// allow everything else, including ordinary real-company addresses -- see
// scanIdentity). The REST of what this file checks -- local filesystem
// paths, credential-assignment syntax, denylist-file terms -- is ordinary
// denylist matching against a small set of known-bad SHAPES (never a real
// internal name, host, or path anywhere in this file or in
// test/safety.test.mjs): correct and useful, but a different mechanism
// from the allowlist checks, not the same one. Concretely, that means this
// checker does NOT allowlist "structurally-plausible identifiers" in any
// general sense -- an arbitrary internal-looking package scope, ticket ID,
// employee ID, or project codename (e.g. `@corp-internal/design-system`,
// `ACME-4821`, `emp-884213`, `Project Thunderbolt`) is simply not a shape
// any check here looks for, and passes through unflagged. Nor does it catch
// an internal domain with an ordinary real TLD mentioned as a bare
// hostname in prose (`host.acmecorp.com`, no `http://`/`ssh://`/etc.
// scheme) -- only URLs/scp-syntax/npmrc-syntax actually naming a scheme or
// operator are host-checked (see URL_HOST_PATTERNS below); a real,
// deliverable corporate email in a git identity is also deliberately
// allowed, since that is normal and expected in OSS history, not a leak.
// These are real, disclosed scope boundaries, not oversights -- human
// review remains necessary for anything outside the specific shapes listed
// in --help.
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
// scope" -- that decision (which files are actually diffed/scanned, see
// listScanTargets near the bottom of this file) is made by the CLI layer,
// not by the scanners themselves. There is no directory-based vendor
// exclusion for cases/ or anywhere else: an untouched upstream file is out
// of scope simply because it is not part of the diff, and a file this fork
// adds or changes anywhere (cases/ included) is in scope like any other.
//
// Self-exclusion: this file's own source IS scanned like any other file
// (it is not in SELF_PATHS -- see C3 in .superpowers/sdd/task-7-fix-report.md
// for why a whole-file exclusion here was a real blind spot). The one place
// this file must still describe a real trigger SHAPE in prose -- a worked
// example of the credential syntax scanText's own check looks for -- is
// exempted with a single marked line below, not a whole-file exclusion.
// test/safety.test.mjs still needs a broader exclusion (see SELF_PATHS
// further down); this is the same `safety-check: ignore-line` mechanism
// either way.
//
// Illustrative, obviously-fake worked example (never a real token): a line
// shaped like _authToken=00000000-0000-0000-0000-000000000000 is exactly // safety-check: ignore-line -- deliberate worked example, not a real token
// what scanText's credential check looks for.
import { existsSync, readFileSync, statSync } from 'node:fs';
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
  // Renovate's own schema host, referenced by this repo's own
  // .github/renovate.json ($schema) -- allowlisted so touching that file
  // does not self-trigger the moment it is next edited (M2).
  'docs.renovatebot.com',
  // The SVG XML namespace. Every SVG file is REQUIRED by spec to carry
  // xmlns="http://www.w3.org/2000/svg", so the benchmark charts in
  // docs/results/ and the script that writes them all contain it. It is a
  // fixed, universally-public identifier, not a network dependency.
  'www.w3.org',
  'localhost',
  '127.0.0.1',
  // RFC 2606 reserved documentation domains: never resolve to anything real,
  // safe to allow unconditionally.
  'example.com',
  'example.org',
  'example.net',
]);

// RFC 2606 reserved TLDs: guaranteed by the RFC itself to never be
// delegated/resolve to anything real, so a host ending in one of these is
// safe to allow unconditionally -- unlike PUBLIC_HOSTS (an exact-match
// allowlist of specific real hosts), this is a suffix check, but a narrow,
// closed one: exactly these three TLDs (`.localhost` is already handled by
// the exact `localhost`/`127.0.0.1` entries above). The warning against
// suffix-matching in the PUBLIC_HOSTS comment above does not apply here --
// a suffix match on ".com" could be quietly widened to admit a real host;
// nothing can ever widen ".invalid"/".test"/".example" into a real,
// resolvable domain, so allowlisting them costs zero true positives.
const RESERVED_DOC_TLDS = ['.invalid', '.test', '.example'];

function isReservedDocHost(host) {
  return RESERVED_DOC_TLDS.some((tld) => host === tld.slice(1) || host.endsWith(tld));
}

// Every syntax that can carry a host this checker should allowlist-check,
// each with the host captured in group 1: ordinary http(s) URLs; other URL
// schemes that can equally carry a private host (ssh, git+ssh/git, ftp(s),
// ws(s)); the scp shorthand `user@host:path` (no `://` at all -- this is
// how `git clone` over SSH is very commonly written, and it carries a host
// exactly as much as a URL does); and npm's own `.npmrc` scoped-registry
// syntax `//host/path` (no scheme -- this is documented, public `.npmrc`
// syntax, not a secret, but it is exactly as capable of naming a private
// host as an ordinary http(s) URL is). All four are checked against the
// same PUBLIC_HOSTS allowlist, so a host that is fine to reference as an
// https:// URL is equally fine spelled any of these other ways.
const URL_HOST_PATTERNS = [
  /https?:\/\/([a-z0-9.-]+)/gi,
  /\b(?:ssh|git(?:\+ssh)?|ftps?|wss?):\/\/([a-z0-9.-]+)/gi,
  /\b[\w.-]+@([a-z0-9.-]+\.[a-z]{2,}):(?!\/)/gi,
  /(?:^|[\s"'`])\/\/([a-z0-9.-]+\.[a-z]{2,}|localhost)\//gim,
];

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
// positives. The backtick is excluded for the same reason: markdown prose
// that refers to the shape in a code span, like `` `/Users/` `` or
// `` `/home/` ``, has a backtick immediately after the trailing slash --
// without excluding it, the username-shaped run would greedily swallow that
// backtick as if it were part of a real path, producing a false positive
// (this is exactly what docs/public-safety.md's own prose used to trip).
const LOCAL_PATH_PATTERNS = [
  { name: 'Unix /Users path', re: /\/Users\/[^/\s'"`()<>]+/g },
  { name: 'Unix /home path', re: /\/home\/[^/\s'"`()<>]+/g },
  { name: 'Windows Users path', re: /[A-Za-z]:\\Users\\[^\\\s'"`()<>]+/g },
];

// Credential-assignment SYNTAX recognized by npm's own (public) .npmrc
// format, plus generic identifier=value shapes and well-known provider
// token PREFIXES. Knowing that `.npmrc` supports `_auth` is public
// documentation, not a secret; knowing that AWS access key IDs start
// `AKIA` or that GitHub tokens start `ghp_` is also public documentation --
// both vendors publish these prefixes themselves, precisely so tools like
// this one can recognize them without ever needing a real credential
// VALUE. None of these patterns encode one.
//
// The generic identifier patterns (token/secret/password) require an
// assignment operator (`:` or `=`) directly after the identifier -- this is
// what a real, structured credential assignment looks like, and it is also
// what keeps ordinary prose ("the token expired", "password strength
// requirements") from being flagged: see test/safety.test.mjs for the
// paired positive/negative cases. Being generic (matching `token`/`secret`/
// `password` anywhere in an identifier, not just a fixed list of exact
// names) is deliberate: one pattern per word catches every real-world
// variable name built from it (an npm automation token env var, an OAuth
// client secret, any password field) with three patterns total, instead of
// enumerating each spelling -- so the older, narrower patterns this
// replaced (which matched only two specific `.npmrc` field names) are not
// kept alongside these (they would now just double-report the same match).
const CREDENTIAL_PATTERNS = [
  { name: 'token-assignment', re: /\b[A-Za-z0-9_]*token[A-Za-z0-9_]*\s*["']?\s*[:=]/gi },
  { name: 'secret-assignment', re: /\b[A-Za-z0-9_]*secret[A-Za-z0-9_]*\s*["']?\s*[:=]/gi },
  { name: 'password-assignment', re: /\b[A-Za-z0-9_]*password[A-Za-z0-9_]*\s*["']?\s*[:=]/gi },
  { name: '_auth', re: /(?<!_auth[a-z]*)_auth\s*["']?\s*[:=]/gi },
  { name: 'api_key', re: /api[_-]?key\s*["']?\s*[:=]/gi },
  { name: 'Bearer token', re: /\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/g },
  { name: 'Basic auth header', re: /\bAuthorization:\s*Basic\s+[A-Za-z0-9+/=]{4,}/gi },
  { name: 'npm automation token', re: /\bnpm_[A-Za-z0-9]{20,}\b/g },
  { name: 'GitHub token (ghp_/gho_/ghu_/ghs_/ghr_)', re: /\bgh[oprsu]_[A-Za-z0-9]{20,}\b/g },
  { name: 'AWS access key ID', re: /\bAKIA[0-9A-Z]{16}\b/g },
  { name: 'PEM private key block', re: /-----BEGIN(?: [A-Z]+)? PRIVATE KEY-----/g },
];

// --- SAFETY_DENYLIST_FILE: resolution, literal-by-default matching, cache. -
//
// This file must never become its own scan target (see listScanTargets and
// main() below, which both act on resolveDenylistFile's output): it is
// expected to hold the real, sensitive terms this checker protects, so a
// copy of it inside this repo -- even untracked -- is one `git add -A` away
// from being committed, and (the actual incident this fixes) would
// otherwise be picked up by listScanTargets and scanned as ordinary content,
// making every term in it match itself.

/**
 * Resolve SAFETY_DENYLIST_FILE (if set) to an absolute path, and report
 * whether that path lives inside this repo. Returns null if the environment
 * variable is not set at all (nothing to resolve). `cwd` defaults to
 * `process.cwd()` so this matches the implicit resolution `existsSync`/
 * `readFileSync` already did for a relative path before this function
 * existed -- introducing it changes nothing observable for a relative path
 * pointed at from the repo root (the normal case), it only makes the
 * resolved path -- and its inside/outside-repo status -- available to
 * callers that need it (listScanTargets, main).
 */
export function resolveDenylistFile({ cwd = process.cwd() } = {}) {
  const raw = process.env.SAFETY_DENYLIST_FILE;
  if (!raw) return null;
  const absolute = path.resolve(cwd, raw);
  const rel = path.relative(cwd, absolute);
  const insideRepo = rel === '' || (!rel.startsWith(`..${path.sep}`) && rel !== '..' && !path.isAbsolute(rel));
  return { absolute, insideRepo };
}

const DENYLIST_REGEX_PREFIX = 're:';
// Defense-in-depth against a pasted-in catastrophic-backtracking pattern
// (see I8) or simply an accidental giant paste: literal-by-default (below)
// is the primary guard, since it means most terms can never reach a regex
// engine at all; this caps how much an explicit `re:` opt-in can do.
const MAX_DENYLIST_REGEX_LENGTH = 200;

// Escape every regex metacharacter so a literal term is matched as an exact
// substring, never interpreted as a pattern. Same character set as the
// well-known MDN "escape a string for use inside a RegExp" recipe.
function escapeRegExp(literal) {
  return literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Parse a SAFETY_DENYLIST_FILE's raw content into compiled, ready-to-use
 * RegExp matchers. Blank lines and `#`-comment lines are ignored.
 *
 * Every line is matched LITERALLY by default -- a term is exact text to
 * find, never a regex -- because a human is naming one specific real,
 * sensitive string, and silently reinterpreting `.`/`(`/`+`/etc as regex
 * syntax either drops the protection entirely (an invalid regex, e.g.
 * `C++Toolkit`, used to throw and be silently skipped -- no warning) or
 * widens it in a way nobody asked for (`acme.internal` matching
 * `acmeXinternal`; `Project (Blue)` matching `Project Blue`). A line may opt
 * into real regex matching with an explicit `re:` prefix, for the rare case
 * that is genuinely wanted; such a line is skipped with a stderr warning
 * (never echoing the term itself, for the same reason the violation
 * descriptions below never do) if it is unparseable or too long to safely
 * compile, so one bad line can neither silently drop protection nor hang
 * the process.
 */
function parseDenylistTerms(raw) {
  const terms = [];
  const lines = raw.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const term = lines[i].trim();
    if (!term || term.startsWith('#')) continue;
    if (term.startsWith(DENYLIST_REGEX_PREFIX)) {
      const pattern = term.slice(DENYLIST_REGEX_PREFIX.length);
      if (pattern.length > MAX_DENYLIST_REGEX_LENGTH) {
        console.error(`SAFETY_DENYLIST_FILE: line ${i + 1}: skipping an oversized "re:" pattern (over ${MAX_DENYLIST_REGEX_LENGTH} chars) -- too large to safely compile`);
        continue;
      }
      try {
        terms.push(new RegExp(pattern, 'gi'));
      } catch {
        console.error(`SAFETY_DENYLIST_FILE: line ${i + 1}: skipping an unparseable "re:" pattern (invalid regular expression)`);
      }
      continue;
    }
    terms.push(new RegExp(escapeRegExp(term), 'gi'));
  }
  return terms;
}

// Compiled-terms cache, keyed on the resolved absolute path plus the file's
// own mtime/size: a real CLI run calls detectAll once per scanned file and
// once per scanned commit, all against the same SAFETY_DENYLIST_FILE, so
// re-reading and re-compiling it from scratch every single time is wasted
// work (see M5) -- but test/safety.test.mjs relies on being able to point
// SAFETY_DENYLIST_FILE at a *different* file (or none) between calls in the
// same process, so this cannot simply cache forever at module load. Keying
// on path+mtime+size means a genuinely new/changed file always busts the
// cache, while repeated calls against the same unchanged file (the normal
// CLI shape) do not pay the cost again.
let denylistCache = null;

function getDenylistTerms(absolutePath) {
  let stat;
  try {
    stat = statSync(absolutePath);
  } catch {
    return [];
  }
  if (
    denylistCache &&
    denylistCache.absolutePath === absolutePath &&
    denylistCache.mtimeMs === stat.mtimeMs &&
    denylistCache.size === stat.size
  ) {
    return denylistCache.terms;
  }
  const terms = parseDenylistTerms(readFileSync(absolutePath, 'utf8'));
  denylistCache = { absolutePath, mtimeMs: stat.mtimeMs, size: stat.size, terms };
  return terms;
}

// --- Marker-scoped suppression: an alternative to whole-file exclusion. --
//
// SELF_PATHS (further below) hides an entire file from scanning -- useful
// only when a file cannot practically be cleared any other way. Most files
// that must describe a real trigger shape (this checker's own docs, a plan
// document quoting a test fixture verbatim) only need ONE OR TWO specific
// lines exempted, not the whole file. A marker does that: it is a single,
// visible line in the file itself (so it shows up in a diff and requires a
// human to have written it deliberately), and it REQUIRES a reason after
// `--` to take effect at all -- a bare marker with no reason is not
// recognized, and the violation it would have suppressed stays flagged, so
// forgetting the reason fails safe (visible), not silently.
//
// Two forms:
//   `safety-check: ignore-line -- <reason>`        suppresses only the
//                                                   physical line it is on.
//   `safety-check: ignore-next-block -- <reason>`  suppresses a following
//                                                   fenced code block
//                                                   (``` or ~~~ ... to its
//                                                   matching close), or, if
//                                                   no fence immediately
//                                                   follows, everything up
//                                                   to the next blank line.
// The marker line itself MUST be a single line (reason included): the
// block search looks at the line right after the marker to decide whether
// a fence follows, so wrapping the marker's own reason onto a second line
// makes that second line look like ordinary content, which triggers the
// blank-line fallback instead of finding the real fence -- caught for real
// while writing this checker (see test/safety.test.mjs, "documented
// limitation").
// Matched as a bare substring (not tied to `//` or `<!--` specifically), so
// it works inside any comment syntax, or none.
//
// This is necessarily a general-purpose text mechanism, not something that
// can verify "was this reason actually good" -- same tradeoff as any
// `eslint-disable`-style escape hatch. The technical guarantees it does
// provide: a suppression is always a visible, single line (never invisible
// like SELF_PATHS), and it always requires SOME justification text to work
// at all.
const IGNORE_LINE_MARKER = /safety-check:\s*ignore-line\s*--\s*\S/;
const IGNORE_BLOCK_MARKER = /safety-check:\s*ignore-next-block\s*--\s*\S/;
const FENCE_RE = /^\s*(```|~~~)/;

/**
 * Compute `[start, end)` byte-offset ranges (into `text`) that suppression
 * markers exempt from violation reporting. Internal helper for detectAll.
 */
function computeSuppressedRanges(text) {
  const lines = text.split('\n');
  const lineStarts = new Array(lines.length);
  let offset = 0;
  for (let i = 0; i < lines.length; i++) {
    lineStarts[i] = offset;
    offset += lines[i].length + 1; // +1 for the '\n' consumed by split
  }
  const endOffsetFor = (endLine) => (endLine + 1 < lineStarts.length ? lineStarts[endLine + 1] : text.length);

  const ranges = [];
  for (let i = 0; i < lines.length; i++) {
    if (IGNORE_LINE_MARKER.test(lines[i])) {
      ranges.push([lineStarts[i], lineStarts[i] + lines[i].length]);
      continue;
    }
    if (IGNORE_BLOCK_MARKER.test(lines[i])) {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      const fenceMatch = j < lines.length ? FENCE_RE.exec(lines[j]) : null;
      let endLine;
      if (fenceMatch) {
        const fenceMarker = fenceMatch[1];
        let k = j + 1;
        while (k < lines.length && !lines[k].trimStart().startsWith(fenceMarker)) k++;
        endLine = Math.min(k, lines.length - 1);
      } else {
        let k = j;
        while (k < lines.length && lines[k].trim() !== '') k++;
        endLine = k > j ? k - 1 : j;
      }
      ranges.push([lineStarts[i], endOffsetFor(endLine)]);
    }
  }
  return ranges;
}

function isSuppressed(index, ranges) {
  return ranges.some(([start, end]) => index >= start && index < end);
}

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

  for (const re of URL_HOST_PATTERNS) {
    for (const m of text.matchAll(re)) {
      const host = m[1].toLowerCase();
      if (!PUBLIC_HOSTS.has(host) && !isReservedDocHost(host)) {
        found.push({ description: `non-allowlisted host: ${host}`, index: m.index, match: m[0] });
      }
    }
  }

  // ADDITIONAL check, only when the caller's environment supplies one: a
  // local, uncommitted, line-oriented list of extra terms to flag (matched
  // literally by default -- see parseDenylistTerms above -- with an
  // opt-in `re:` prefix for real regex matching). Re-resolved on every call
  // (not cached at module load) so a caller can point this at a different
  // file, or none, between calls in the same process -- this is what lets
  // test/safety.test.mjs exercise both the present-and-absent cases directly
  // via process.env without reloading the module; the actual file content is
  // cached (see getDenylistTerms) so repeated calls against the SAME file
  // are cheap. Missing file (the normal public-clone state) is a silent
  // no-op, not an error: this checker must work with no denylist file at
  // all. This function deliberately does not know or care whether the
  // resolved path is inside this repo -- that refusal-to-run decision (see
  // C1) belongs to the CLI layer (main, below), which has a `cwd`/repo
  // context that this pure text-scanning function does not and should not.
  const denylist = resolveDenylistFile();
  if (denylist && existsSync(denylist.absolute)) {
    for (const re of getDenylistTerms(denylist.absolute)) {
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

  if (found.length === 0) return found;
  const suppressed = computeSuppressedRanges(text);
  if (suppressed.length === 0) return found;
  return found.filter((v) => !isSuppressed(v.index, suppressed));
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
// authored or curated -- see docs/public-safety.md. This checker does NOT
// apply a `cases/`-prefix exclusion to reach that outcome (an earlier
// version of this file did, and it was a real bug, not a refinement: the
// filter ran on the FINAL candidate list regardless of source, so it also
// silently stripped out any file THIS FORK adds or modifies under cases/ --
// exactly where a newly generated benchmark case lands. Measured this
// session: scanning all ~16,576 tracked files under cases/ for local-path
// patterns took under half a second and found none, so the exclusion was
// not even buying meaningful speed in the one path where it mattered, the
// no-base fallback below -- see the fix report for the exact figures).
//
// Instead, the default scope is simply "changed vs. this fork's base"
// (option a in the task's own scoping guidance): an untouched upstream file
// under cases/ is never part of `git diff --name-only` and was never
// untracked either, so it is excluded as a natural consequence of THAT,
// not because of its directory. A file this fork adds or modifies under
// cases/ (or anywhere else) is part of the diff like any other changed
// file, and is scanned like any other changed file. The only fallback that
// changes behavior here is "no base ref is available at all" (option b),
// which scans every tracked file, cases/ included -- a deliberate
// correctness-over-narrow-speed tradeoff for that rarer path.

// This checker necessarily documents its own detection patterns in prose and
// test fixtures, and so would flag itself (or its test file) if scanned as
// ordinary content -- see the header comment. As of C3 (see the fix
// report), this set holds only test/safety.test.mjs: this file's own
// source (scripts/check-public-safety.mjs) and both docs
// (docs/public-safety.md, docs/plans/phase-1-generator.md) were retired
// from whole-file exclusion by fixing the actual false positives instead
// (a char-class fix, an RFC-2606 TLD allowlist, and marker-scoped
// suppressions -- see C3(a)-(c)). test/safety.test.mjs remains here because
// it is packed with dozens of DELIBERATE, load-bearing trigger fixtures
// (every positive-case test in this file must literally contain the shape
// it is proving is caught); marking each individually would make markers a
// routine, ignorable wall of noise instead of the rare, reviewable signal
// they are meant to be everywhere else. A test asserts this set does not
// grow without a deliberate, reviewed reason.
const SELF_PATHS = new Set([
  'test/safety.test.mjs',
]);

/**
 * A fresh array snapshot of the exact paths permanently excluded from this
 * checker's own file-content scan (see the comment above SELF_PATHS).
 * Exported read-only (never the live Set) specifically so a test can
 * assert this set does not silently grow -- see C3(d) in the fix report.
 */
export function selfExcludedPaths() {
  return [...SELF_PATHS];
}

// execFileSync's own default maxBuffer is 1MB -- comfortably enough for an
// ordinary diff, but this checker's own `cases/` directory alone can hold
// tens of thousands of files (see Task 8), and a `git diff --name-only`
// listing that many paths routinely exceeds 1MB of raw text. Measured
// directly this session: staging a single ~50,000-file generated case took
// this repo's real `git diff --name-only --diff-filter=ACMRT <base>` output
// past 2.4MB. Node's execFileSync throws ENOBUFS once output exceeds
// maxBuffer, and the catch below (needed so a ref that genuinely does not
// resolve is treated as a benign null, not a crash -- see the comment it
// carries) swallowed that failure identically, so listScanTargets silently
// returned an EMPTY scope instead of the real file list: the single worst
// failure mode this checker can have, a large diff scanned as if it were
// zero files, with "public-safety check: CLEAN" printed regardless of what
// those files actually contained (reproduced directly this session, and see
// the regression test this fix adds to test/safety.test.mjs). 256MB is far
// beyond any realistic diff size for this repo (a full `--all` scan of every
// tracked file, cases/ included, is well under 10MB of path text) and costs
// nothing when unused -- it only bounds a pathological/runaway case.
const GIT_MAX_BUFFER = 256 * 1024 * 1024;

function tryGit(args, cwd) {
  try {
    // stdio is explicit here (not just `encoding`) so that a failing git
    // command's own stderr (e.g. "fatal: Needed a single revision", which
    // this function EXPECTS and handles for every unresolved ref candidate)
    // is discarded, not forwarded through to this process's own stderr --
    // that leak previously reached the CLI's real output on every probed-
    // and-rejected base-ref candidate (see M3). stdin is also not needed.
    return execFileSync('git', args, {
      cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: GIT_MAX_BUFFER,
    }).trim();
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
    // Defined-path-list fallback: everything currently tracked. Used when no
    // base ref is resolvable at all (e.g. a shallow clone with no
    // main/origin), so the checker still runs instead of refusing. This
    // includes cases/ (see the Scope comment above this function): there is
    // no vendor-directory special-case here, deliberately -- correctness
    // (scan everything this rare fallback cannot otherwise diff-scope) is
    // preferred over the small speed gain excluding it bought.
    const tracked = tryGit(['ls-files'], cwd) || '';
    files = new Set(tracked.split('\n').filter(Boolean));
  }

  // Hard-exclude SAFETY_DENYLIST_FILE regardless of location, as defense in
  // depth alongside main()'s refusal-to-run when it resolves inside the
  // repo (see C1): even if a caller reaches this function directly (not
  // through the CLI's refusal check), the denylist file itself must never
  // be handed to scanFile, because that is exactly how it becomes its own
  // scan target and every term in it ends up matching itself.
  const denylist = resolveDenylistFile({ cwd });

  return [...files]
    .filter((f) => !SELF_PATHS.has(f))
    .filter((f) => !denylist || path.resolve(cwd, f) !== denylist.absolute)
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

Mixed by design, stated precisely (not "allowlist-based" across the board):
hosts (URLs, scp syntax, npm's //host/ registry form) and git-identity
emails are checked against an ALLOWLIST (a small set of known-public hosts
plus RFC 2606 reserved TLDs; reject the known-bogus \`.local\`-style email
shapes, allow everything else) -- committing a denylist of real internal
hosts would itself be the leak. Local filesystem paths, credential syntax,
and an optional local SAFETY_DENYLIST_FILE are checked against a DENYLIST of
known-bad SHAPES instead (never a real internal name).

Out of scope, plainly: an internal-looking package scope, ticket ID,
employee ID, or project codename (e.g. an npm scope, \`ACME-1234\`,
a \`Project <codename>\`) is not a shape any check here looks for. A bare
internal hostname mentioned in prose with no URL scheme is not
host-checked either (only an actual URL/scp/npmrc form is). Human review is
still required for anything outside the specific shapes listed above.

Options:
  --help              show this help and exit 0
  --range <range>     git log revision range to scan for commit metadata
                      (default: <base>..HEAD, base auto-detected)
  --files-only        skip commit-metadata scanning
  --commits-only      skip file-content scanning
  --all               audit mode: scan every tracked file (not just what
                      this fork changed vs. base) and every commit reachable
                      from HEAD (not just base..HEAD). Answers "is this repo
                      leaking?" instead of the default "does my branch add a
                      leak?" -- use this after anything might have slipped
                      through undetected in the past, not as the routine
                      pre-commit check (it is slower and noisier by design).

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

  // Refuse to run rather than silently scanning: a SAFETY_DENYLIST_FILE that
  // resolves inside this repo is exactly the shape of the incident this
  // guards against (see C1) -- an untracked file one `git add -A` away from
  // being committed, and (before this check existed) itself picked up as a
  // scan target, so every term in it matched itself and the CLI printed
  // each one. Exit code 2 (not 1) so this is never confused with "real
  // violations were found" by anything that only checks the exit code.
  const denylist = resolveDenylistFile({ cwd });
  if (denylist && denylist.insideRepo) {
    console.error(
      `public-safety check: SAFETY_DENYLIST_FILE resolves inside this repository (${denylist.absolute}).\n` +
      'Refusing to run: this file exists to hold terms that must never be committed, ' +
      'and a copy of it inside the repo is one "git add -A" away from being committed itself.\n' +
      'Point SAFETY_DENYLIST_FILE at a path outside this repository (see docs/public-safety.md).'
    );
    return 2;
  }

  const filesOnly = argv.includes('--files-only');
  const commitsOnly = argv.includes('--commits-only');
  const allFlag = argv.includes('--all');
  const rangeFlagIndex = argv.indexOf('--range');
  const explicitRange = rangeFlagIndex !== -1 ? argv[rangeFlagIndex + 1] : undefined;

  let violationCount = 0;

  if (!commitsOnly) {
    for (const rel of listScanTargets({ cwd, baseRef: allFlag ? null : undefined })) {
      const abs = path.join(cwd, rel);
      let violations;
      try {
        violations = scanFile(abs);
      } catch (err) {
        // A file listed by git but no longer present on disk (e.g. deleted
        // in the working tree after the diff was taken), or a symlink that
        // resolves to a directory rather than a regular file (git tracks
        // the symlink itself as a "file", but reading through it hits a
        // directory) is not a crash -- both are skipped, not fatal. Without
        // this, a single such entry aborts the ENTIRE scan (scanFile
        // throws, nothing after it in the sorted target list is ever
        // checked), which is indistinguishable from "no violations found"
        // to anything that only checks the exit code -- see I5 in the fix
        // report. This repo's own node_modules is exactly this shape
        // (a symlink to a directory), saved from this only by being
        // gitignored.
        if (err.code === 'ENOENT' || err.code === 'EISDIR') continue;
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
    const range = explicitRange || (allFlag ? 'HEAD' : (base ? `${base}..HEAD` : null));
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
// never when imported (e.g. by test/safety.test.mjs). Wrapped in try/catch
// so that ANY unexpected internal error (not just the specific EISDIR case
// handled above) is reported with a distinct, non-1 exit code -- exit 1 is
// reserved for "real violations were found"; a crash must never look the
// same to a caller that only checks the exit code (see I5).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    process.exitCode = main();
  } catch (err) {
    console.error(`public-safety check: CRASHED \u2014 ${err && err.message ? err.message : err}`);
    process.exitCode = 3;
  }
}
