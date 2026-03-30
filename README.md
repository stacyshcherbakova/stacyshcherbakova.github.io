# Stacy Shcherbakova — Portfolio

Personal portfolio website built with **React** and **Vite**.

This site is intended to showcase:
- background and interests
- CV / experience
- selected projects
- certificates and courses

## Tech stack

- React
- Vite
- React Router
- GitHub Pages (via GitHub Actions)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

This project is configured for a **GitHub Pages user site**.

Recommended repository name:

```text
stacyshcherbakova.github.io
```

Deployment is handled by:

```text
.github/workflows/deploy.yml
```

To publish:
1. push this project to the GitHub repository above
2. make sure GitHub Pages is set to use **GitHub Actions**
3. push to `main`

## Notes

- this repo is set up for a user site, not a repo-subpath site
- page content currently lives in `src/data/content.ts`
- routing and page structure live in `src/pages/` and `src/components/`
