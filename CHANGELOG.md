# Changelog

Human-readable history of content/data changes to the site, mainly around
`src/data/products.ts`, `src/data/harvest.ts`, and the product catalog UI.

This file replaces the one-off `apply_*.bat` scripts that used to sit in the
project root. Those scripts were single-use installers written to work around
a terminal paste-corruption bug (see `docs/README-dev-notes.md`) — once run,
they had no further purpose and just accumulated as clutter. Their effects
are summarized here instead. If you need the exact mechanics of how a patch
was applied (the base64/`node -e` pattern), see
`docs/README-dev-notes.md`.

## Session 7
- **Stocking Soon banner extended to all Spices & Oil Seeds products.** `comingSoon: true`
  added to Black Pepper, Cumin Seeds (Jeera), Green Cardamom, Red Chili, Sesame Seeds, and
  Mustard Seeds in `src/data/products.ts` (Dhaniya already had it from Session 5). All 6
  Turmeric products are intentionally excluded and remain fully live — no `comingSoon` field.
  This flag alone drives the UI in both `ProductCard` and `ProductModal`: badge, dimmed
  image, "Notify Me When Available" CTA, and the spec table swapped for a "finalizing
  specifications" note. No component code changed, only data.
- **Repo cleanup.** Removed `apply_taxonomy_redesign.bat`, `apply_stocking_soon.bat`,
  `apply_dhaniya_photo.bat`, and `apply_spice_photos_and_remove_pulses.bat` from the
  project root; their history is captured below and in Session 5/6 sections.

## Session 6
- **Localized Spices & Oil Seeds product photos.** Several hotlinked Unsplash URLs in
  `src/data/products.ts` were broken or mismatched (Cumin Seeds, Green Cardamom, and
  Chickpeas rendered as broken images; Sesame Seeds and Mustard Seeds showed unrelated
  photos). Sourced and verified real replacement photos, downloaded them into
  `public/products/spices/` and `public/products/oil-seeds/`, and repointed all 7
  `image` fields to the local paths — matching the pattern already used for Turmeric.
- **Removed the Pulses & Grains category entirely.** Dropped `"pulses-grains"` from
  `ParentCategory`, removed it from `CATEGORIES`, deleted the `basmati-rice` and
  `chickpeas` product entries, removed their rows from `src/data/harvest.ts`, and scrubbed
  "pulses and grains" from marketing/SEO copy in `footer.tsx`, `layout.tsx`,
  `about/page.tsx`, `products/page.tsx`, `contact/page.tsx`, and `harvest-chart/page.tsx`.
- (Applied via `apply_spice_photos_and_remove_pulses.bat` — first version had a bug where
  the `node -e` file-write step used Windows backslashes inside a JS string literal, which
  Node interprets as escape characters; corrected to use forward slashes.)

## Session 5
- **Category taxonomy redesign.** Restructured `src/data/products.ts` from a flat
  `category` field to `parentCategory` (`"turmeric" | "spices" | "oil-seeds" | "pulses-grains"`
  at the time) + optional `subType`, backed by a new `SUBCATEGORIES` list carrying label,
  English name, and botanical name per subtype. Updated the two files that referenced the
  old field (`featured-products.tsx`, `products-catalog.tsx`).
- **"Stocking Soon" state introduced.** Added `comingSoon?: boolean` to the `Product` type;
  `ProductCard` and `ProductModal` updated to show a green "Stocking Soon" badge, dim the
  image, and swap the CTA/spec-table when true. First used on a placeholder Dhaniya
  (coriander seeds) product.
- **Dhaniya product photo.** Replaced an initial custom-generated placeholder graphic with
  a real, licensed Unsplash photo.
- (Applied via `apply_taxonomy_redesign.bat`, `apply_stocking_soon.bat`, and
  `apply_dhaniya_photo.bat`.)
