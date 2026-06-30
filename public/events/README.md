# Event photos

Drop event photos here (e.g. `material-hack-1.jpg`). They are served from the
site root, so reference them as `/events/material-hack-1.jpg`.

To show them on the CV page, add entries to the `images` array of the matching
experience item in `src/data/content.ts`:

```ts
images: [
  { src: '/events/material-hack-1.jpg', alt: 'Material Hack' },
  { src: '/events/material-hack-2.jpg', alt: 'Material Hack' },
],
```
