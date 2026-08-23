# Public-safety checker

`scripts/check-public-safety.mjs` is a small, dependency-free scanner that
runs before you commit or push, to catch things that must never appear in
this PUBLIC repo: local filesystem paths, credential material, non-public
registries/hosts, and commit identities that reveal a real machine name.

## Why allowlist for hosts and identities, denylist-of-shapes for the rest

A denylist of internal codenames, hostnames, or registry URLs, committed
here to protect them, would **be** the leak: it would publish exactly the
terms it exists to keep private, including in this file and in the
checker's own source and test fixtures.

So the two checks where that risk is sharpest are allowlist-shaped:

- **hosts** (URLs of any scheme, scp syntax, npm's `//host/` registry
  form): a small set of known-public hosts (npm's registry, GitHub, a
  handful of toolchain homepages) plus RFC 2606 reserved documentation TLDs
  (`.invalid`/`.test`/`.example`, which can never resolve to anything
  real) are allowed; anything else is flagged.
- **git-identity emails**: reject the small set of known-bogus,
  machine-fallback shapes (a domain ending in `.local` and similar
  reserved/non-routable suffixes); allow everything else, including
  ordinary real-company addresses (normal and expected in OSS history).

Everything else this checker looks at -- local filesystem paths,
credential-assignment syntax, an optional local `SAFETY_DENYLIST_FILE` --
is matched against a small, fixed set of known-bad **shapes** instead (a
path under `/Users/` or `/home/`; the public, documented *syntax* of
credential fields like `.npmrc`'s `_authToken`/`_password`/`_auth`, or an
identifier containing `token`/`secret`/`password` immediately followed by
an assignment operator; a PEM private-key block). This is technically a
denylist, just of *shapes*, never of *this project's own* internal names,
hosts, or people -- none of those are ever encoded here.

**What this does NOT cover, plainly stated:** an internal-looking package
scope, ticket ID, employee ID, or project codename (e.g. an npm scope like
`@corp-internal/x`, `ACME-1234`, a `Project <codename>`) is not a shape any
check here looks for, and passes through unflagged -- there is no general
"structurally-plausible identifier" allowlist, only the specific checks
listed above. A bare internal hostname mentioned in prose with no URL
scheme in front of it (e.g. an ordinary sentence naming a company's
internal subdomain) is not host-checked either -- only an actual URL, scp
syntax, or the `.npmrc` `//host/` form is. These are real, disclosed scope
boundaries. Human review is still required for anything outside the
specific shapes above.

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
authored or curated (a naive keyword search for "local" or "office" would
false-positive on real content in there, e.g. an upstream icon import path
containing the substring `local-post-office` -- this checker does not do
naive keyword search, see "Why allowlist, not denylist" above, so this alone
is not why cases/ is usually out of scope).

There is no directory-based exclusion for `cases/` (or anywhere else). By
default this checker scans:

1. **Files this fork has actually changed**, relative to an auto-detected
   base ref (`origin/main`, then `main`, then `origin/HEAD` -- override with
   `SAFETY_BASE_REF`). This is a working-tree diff (staged or not) plus
   untracked files, so it also covers what you are about to commit.
2. **Commits this fork has actually made**, over the same base
   (`<base>..HEAD` by default, override with `--range`).
3. Never this checker's own files (see below).

If no base ref resolves at all (e.g. a shallow clone with no `main` or
`origin`), it falls back to scanning every tracked file, `cases/` included --
measured (this session) at well under a second even reading and pattern-
matching all ~16,576 files under `cases/` directly, so scanning it in this
fallback case is not a real cost.

This means a file that predates this fork and that this fork never touches
is never scanned, no matter how it's phrased or which directory it's in --
not because of where it lives, but simply because it is not part of the
diff. Symmetrically, a file this fork adds or changes under `cases/` (a
newly generated benchmark case, say) *is* scanned, exactly like a changed
file anywhere else: "changed vs. base" catches it regardless of which
directory it lands in. An earlier version of this checker got this
backwards -- it applied a `cases/`-prefix filter to the final candidate
list regardless of source, which also silently excluded this fork's own
additions there. That filter has been removed; there is nothing left in
this file's scoping logic that treats `cases/` specially at all.

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
local file -- **one per line, matched as an exact literal substring by
default (case-insensitive); blank lines and lines starting with `#`
ignored** -- and point `SAFETY_DENYLIST_FILE` at it:

```sh
export SAFETY_DENYLIST_FILE=/path/to/your/local/denylist.txt
node scripts/check-public-safety.mjs
```

A conventional local name, `.safety-denylist`, is already in this repo's
`.gitignore`, so using that name in the repo root cannot be added by
accident either way -- but the checker also **refuses to run** (a clear
error, distinct non-zero exit) if `SAFETY_DENYLIST_FILE` resolves to a path
inside this repository at all, so the safe choice is to keep it outside the
repository entirely, as described below.

This file must **never** be committed, and must live outside this repository
so it cannot be added by accident. This document deliberately does not say
what should go in it -- that is the whole point: whatever it is, it must
never reach this repo's history, including as an example here.

Things worth knowing before you write one:

- If the file does not exist, the checker runs exactly as if
  `SAFETY_DENYLIST_FILE` were unset -- this is the normal, expected state for
  everyone who is not the one person who might need it.
- Each line is matched **literally by default**: the exact text you write is
  the exact text that must appear (case-insensitive), never interpreted as
  regex syntax. This matters -- a term like `acme.internal` matches only
  that literal string, not `acmeXinternal`; a term like `Project (Blue)`
  matches only that literal string, including the parentheses. Prefix a line
  with `re:` to opt back into real regular-expression matching for the rare
  case that is genuinely wanted (e.g. `re:proj-\d{4}`) -- an unparseable or
  excessively long `re:` pattern is skipped with a stderr warning (which
  never echoes the pattern itself), not a crash.
- A specific term (a real, distinctive name) is a good denylist entry. A
  dictionary word is not: it will match ordinary prose or unrelated content
  elsewhere, and you will learn to ignore the tool. Prefer the allowlist
  mechanism (extend `PUBLIC_HOSTS` in `scripts/check-public-safety.mjs`,
  reviewed and committed like any other code change) whenever what you need
  is "this specific other thing is also fine," rather than reaching for the
  denylist file for that case.

## What this does not do

- It does not replace human review. It catches the specific, recurring
  shapes of leak that have actually happened in this repo's history (local
  paths, credential syntax, non-public hosts, machine-default git
  identities) -- not every possible way to leak something.
