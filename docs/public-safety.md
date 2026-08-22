# Public-safety checker

`scripts/check-public-safety.mjs` is a small, dependency-free scanner that
runs before you commit or push, to catch things that must never appear in
this PUBLIC repo: local filesystem paths, credential material, non-public
registries/hosts, and commit identities that reveal a real machine name.

## Why allowlist, not denylist

A denylist of internal codenames, hostnames, or registry URLs, committed
here to protect them, would **be** the leak: it would publish exactly the
terms it exists to keep private, including in this file and in the
checker's own source and test fixtures.

So the committed checker only encodes:

- a small set of known-public hosts (npm's registry, GitHub, a handful of
  toolchain homepages, RFC 2606 documentation domains),
- the public, documented *syntax* of credential fields (`.npmrc` supports
  `_authToken` / `_password` / `_auth`; knowing that shape exists is not a
  secret),
- and structural shapes (a filesystem path under `/Users/` or `/home/`, an
  email domain ending in a reserved/non-routable suffix like `.local`).

Anything outside those shapes is flagged. Nothing about *this project's own*
internal names, hosts, or people is ever encoded here.

## Run it

```
node scripts/check-public-safety.mjs
```

Exits `0` and prints `public-safety check: CLEAN` if nothing was found.
Exits non-zero and prints one line per violation, naming the file, line, and
matched text (or the commit and field, for a commit-metadata violation), if
anything was found. Fast enough to run before every commit: it only reads
files this fork has actually changed (see "Scope", below), not the whole
repository.

Flags:

- `--help` -- print usage and exit 0 (works with no git repo at all).
- `--range <range>` -- explicit `git log` revision range for the
  commit-metadata scan (default: `<base>..HEAD`, base auto-detected).
- `--files-only` / `--commits-only` -- run only one half of the check.

### As a pre-commit hook

```sh
# .git/hooks/pre-commit (not tracked by git; copy this in by hand)
#!/bin/sh
node scripts/check-public-safety.mjs || exit 1
```

## Scope: what actually gets scanned

`cases/` holds roughly 16,000 upstream fixture files this fork has never
authored or curated. Scanning them wholesale produces noise unrelated to
anything this fork could leak (real example: an upstream fixture's icon
import path contains the substring `local-post-office`, which is not a
filesystem path or a credential, but would trip a naive keyword search for
"local" or "office"). It would also be slow, working against "fast enough to
run before every commit."

So by default this checker scans:

1. **Files this fork has actually changed**, relative to an auto-detected
   base ref (`origin/main`, then `main`, then `origin/HEAD` -- override with
   `SAFETY_BASE_REF`). This is a working-tree diff (staged or not) plus
   untracked files, so it also covers what you are about to commit.
2. **Commits this fork has actually made**, over the same base
   (`<base>..HEAD` by default, override with `--range`).
3. Always, regardless of the above: nothing under `cases/` (the vendor
   directory), and never this checker's own files (see below).

If no base ref resolves at all (e.g. a shallow clone with no `main` or
`origin`), it falls back to scanning every tracked file except `cases/`,
rather than refusing to run.

This means a file that predates this fork and that this fork never touches
is never scanned, no matter how it's phrased -- and a file this fork adds
under `cases/` in the future (a newly generated benchmark case, say) *is*
still covered, because "changed vs. base" catches it regardless of which
directory it lands in.

## Self-exclusion

This file and `test/safety.test.mjs` must describe real trigger *shapes* in
prose and test fixtures to define and exercise them -- for example, this
document uses the literal string `_authToken` above. Both files are
therefore excluded from the CLI's own file-content scan. This is the only
"exclude this specific file" list in the checker; it is small, enumerable,
and is about the checker's own files, not about hiding anything else.

## Commit metadata, not just file contents

A commit's author/committer name, email, and message are scanned too, not
only file content. This matters concretely: this repo's own history at one
point contained 17 commits authored as `<user>@<hostname>.local`, because no
`git user.email` was configured for that session -- `git commit` silently
falls back to a machine-default identity instead of failing loudly. A real,
deliverable email address never ends in a reserved suffix like `.local`, so
this is checked the same allowlist-shaped way as everything else: reject the
handful of known-bogus shapes, allow anything else (GitHub `noreply`
addresses, ordinary-looking personal or corporate addresses, all pass).

## `SAFETY_DENYLIST_FILE`

If you have environment-specific terms to also check for, put them in a
local file -- **one per line, each an ECMAScript regular expression
(case-insensitive), blank lines and lines starting with `#` ignored** -- and
point `SAFETY_DENYLIST_FILE` at it:

```sh
export SAFETY_DENYLIST_FILE=/path/to/your/local/denylist.txt
node scripts/check-public-safety.mjs
```

This file must **never** be committed, and must live outside this repository
(or in a path this repo's `.gitignore` already excludes) so it cannot be
added by accident. This document deliberately does not say what should go in
it -- that is the whole point: whatever it is, it must never reach this
repo's history, including as an example here.

Two things worth knowing before you write one:

- If the file does not exist, the checker runs exactly as if
  `SAFETY_DENYLIST_FILE` were unset -- this is the normal, expected state for
  everyone who is not the one person who might need it.
- Each line is matched as a substring-anywhere regular expression against
  scanned content. A specific term (a real, distinctive name) is a good
  denylist entry. A dictionary word is not: it will match unrelated upstream
  content under `cases/` if that scope is ever widened, or ordinary prose
  elsewhere, and you will learn to ignore the tool. Prefer the allowlist
  mechanism (extend `PUBLIC_HOSTS` in `scripts/check-public-safety.mjs`,
  reviewed and committed like any other code change) whenever what you need
  is "this specific other thing is also fine," rather than reaching for the
  denylist file for that case.

## What this does not do

- It does not scan `cases/` (see "Scope" above) unless you explicitly widen
  the scope yourself.
- It does not replace human review. It catches the specific, recurring
  shapes of leak that have actually happened in this repo's history (local
  paths, credential syntax, non-public hosts, machine-default git
  identities) -- not every possible way to leak something.
