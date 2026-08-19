# jorgen-konini.github.io

My personal portfolio — live at [jorgen-konini.github.io](https://jorgen-konini.github.io/).

One-page site built with Next.js (static export), deployed to GitHub Pages via
GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — experience, projects, skills, links.

## CV download

The "Download CV" buttons link to `/cv.pdf`. Drop the CV at `public/cv.pdf`
(create the `public/` folder if needed) and it will be served automatically.
