# Eyad Ryad Portfolio

An editorial, single-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update content

All copy, links, stats, and asset paths live in [`src/content/site.ts`](src/content/site.ts). Components only consume that typed object. Replace the placeholder SVGs in `public/images` with final assets while keeping their paths, or update the paths in the content file.

## Deploy on Vercel

Import this repository into Vercel. The framework is detected automatically and the default build command is `npm run build`.
