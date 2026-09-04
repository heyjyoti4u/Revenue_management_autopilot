# Vercel deployment

This project is a Vite single-page application with Wouter client-side routes. The included `vercel.json` configures:

| Setting | Value |
|---|---|
| Framework | Vite |
| Build command | `pnpm run build` |
| Output directory | `dist/public` |
| Route handling | All non-asset routes rewrite to `/index.html` |

## Import steps

Import the repository into Vercel and keep the detected project root at the repository root. Vercel should use the settings above automatically from `vercel.json`; if the dashboard asks for manual values, use the table values exactly. No server-side API is required for the public marketing pages.

The generated visual assets are referenced from public CDN URLs so the Vercel build does not depend on the Manus development storage proxy. If the asset host is later replaced, update the constants in `client/src/pages/DetailedPage.tsx`, `client/src/components/SiteShell.tsx`, and the favicon reference in `client/index.html`.

The hidden internal dashboard shortcut opens the configured password-protected dashboard in a new tab after a 4.5-second press-and-hold above the logo. The hidden gesture is not a security boundary; access control must remain enforced by the dashboard itself.

## Verification

Run the following before importing or redeploying:

```bash
pnpm install
pnpm run check
pnpm run build
```

Manus built-in hosting remains an alternative if a managed deployment with custom domains is preferred. If deploying through Vercel, external-host compatibility should be checked after the first preview deployment, especially for CDN asset availability and direct navigation to nested routes.
