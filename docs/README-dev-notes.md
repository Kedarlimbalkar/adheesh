# Developer Notes

Practical notes for working on this repo, especially if you're using an AI
coding assistant on Windows. For a history of content/data changes, see
`../CHANGELOG.md`.

## Environment
- Terminal: **cmd.exe** (not PowerShell) on Windows.
- Stack: Next.js 14.2.5 (App Router) + TypeScript + Tailwind CSS.
- `origin` points at the **live/production** repo — `git push origin main`
  deploys immediately via Vercel. There is no separate staging remote
  currently wired up.

## Known terminal quirks

**Paste corruption on large multi-line content.** Pasting large blocks of
code or text directly into `cmd.exe` can get corrupted mid-paste. The
reliable workaround used throughout this project's history: generate a
`.bat` file that base64-encodes the target file content as a sequence of
`echo <chunk>>>payload.b64` lines, have the payload decoded on disk via
`node -e "...fs.writeFileSync(...)"`, rather than pasting the file content
inline. Key gotcha: **use forward slashes in the destination path inside the
JS string**, e.g. `'src/data/products.ts'` — not `'src\data\products.ts'`.
Backslashes are escape characters in JS string literals, so a Windows-style
path silently corrupts (`\d`, `\p` etc. get dropped; `\f` becomes an actual
form-feed character). Node's `fs` module accepts forward slashes fine on
Windows, so there's no downside to always using them there.

**`type <path>` mojibake.** Non-ASCII characters (em dashes, etc.) can render
as mojibake (e.g. `ÔÇö`) in `cmd.exe` due to the console codepage. This is a
**display-only** artifact — the underlying UTF-8 bytes on disk are correct
and it doesn't affect the build. `chcp 65001` before `type` fixes the
display if you want to eyeball it.

## Verifying changes

After any multi-file patch:
```
type <path-to-edited-file>      # confirm the edit landed
npm run dev                     # check for compile errors, test in browser
npm run build                   # stricter check — must pass before pushing
git status
git diff                        # review before staging
git add .
git commit -m "Describe the change"
git push origin main            # deploys to production immediately
```

If an AI assistant generates a `.bat` installer, it should decode its own
payloads and diff them against the intended source **before** handing it
over — and ideally actually execute the `node -e` write step in a sandbox
mirroring the real folder structure, not just round-trip the base64. A
base64 round-trip alone proved insufficient once (see Session 6 in
`../CHANGELOG.md`) because it didn't catch a bug in how the destination path
was embedded in the JS string.

## Product data model (`src/data/products.ts`)

- `ParentCategory`: top-level tab (`"turmeric" | "spices" | "oil-seeds"`).
- `SUBCATEGORIES`: optional finer-grained subtype per product (e.g. Jeera,
  Dhaniya under `spices`), carrying label/English name/botanical name.
- `comingSoon?: boolean` on a `Product`: drives the "Stocking Soon" UI in
  both `ProductCard` and `ProductModal` — badge, dimmed image, "Notify Me
  When Available" CTA, and the spec table replaced with a placeholder note.
  This is a **data-only** flag; no component changes are needed to toggle it
  per-product.

## Repo tarball access

The repo is public, so the current live state can be pulled without cloning
via `https://codeload.github.com/Kedarlimbalkar/adheesh/tar.gz/refs/heads/main`
— useful for verifying against reality before generating a patch, since
local, unpushed changes won't be visible this way.
