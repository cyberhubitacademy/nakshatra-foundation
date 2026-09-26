# Nakshatra Foundation

A responsive, frontend-only Next.js demo for education, career opportunity, and community support. Built with Next.js 16, React 19, TypeScript, custom CSS, and Lucide icons. The project exports static HTML, CSS, JavaScript, fonts, and images; it has no application backend, API routes, database, payment provider, or authentication service.

## Run locally

Use Node.js 22 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. The development terminal prints another port if 3000 is occupied.

```sh
npm run typecheck
npm run build
```

The production build creates `out/`, a portable static website. `next start` is intentionally not configured because this project uses static export.

## Deploy to Vercel

1. Put this project in a Git repository and push it to your preferred Git provider.
2. Import the repository into Vercel. If it is a subfolder of your repository, set the Root Directory to `nakshatra-foundation` (or its actual repository path).
3. Select the **Next.js** framework preset. Use `npm ci` to install and `npm run build` to build. Keep Vercel's framework output settings; Next.js handles `output: 'export'`.
4. Deploy. No environment variables, databases, secrets, or paid services are needed.

The supplied project has been built locally, but has not been published to a Vercel account.

## Included experiences

- Sticky navigation, mobile navigation dialog, skip link, focus styles, Escape-to-close dialogs, native modal focus containment, and reduced-motion support.
- Hero featuring licensed school photography from Hyderabad, Telangana.
- About/Foundation information, Website, Domain, and IP Registration information.
- All six initiatives: JSTE, Job Fairs, Campus Drives, Training Courses, Certification Courses, and Social Services.
- Associations with KDP Gentech Pvt. Ltd. and Mindoxer Pvt. Ltd.
- Sponsors, Donation, Support Us, and Walk-in enquiry previews.
- Login and registration forms with required-field, email, and password-length validation.
- Donation preview with one-time/monthly selection, preset/custom INR amounts, and purpose selection. Invalid, zero, negative, fractional, and excessively large amounts are blocked by native validation.
- Form success states explicitly distinguish previews from real submissions.
- Self-hosted Poppins (300–800), Open Sans (300–800), and Alice (400), all as WOFF2 files. Responsive WebP hero images and lazy-loaded secondary photography.

## Structure

```text
app/                 Page, metadata, theme, local font declarations, favicon
components/brand.tsx Shared wordmark and section-label components
lib/programs.ts      Initiative content and icons
public/fonts/        Local fonts and their SIL Open Font Licenses
public/images/       Optimized, licensed photographs
next.config.ts       Static-export configuration
PHOTO-CREDITS.md      Image sources, attribution, and adaptation licenses
```

## Content and privacy

This demo does not persist or send form entries. Use sample details during testing. There are no analytics, marketing scripts, or third-party font/image requests. A hosting provider may maintain normal access logs.

Official contact details, social profiles, domain, IP registration, programme schedules, full JSTE description, partner branding, and verified impact metrics were not supplied. They have not been fabricated. Company wordmarks are text treatments for the demo, not official logos. Photo subjects and schools are not represented as foundation beneficiaries or affiliates.

Search engine indexing is disabled for the demo in `app/layout.tsx`. Before an operational public launch, replace the placeholders with verified information, confirm partner/photography approvals, and update the metadata and indexing policy. Real transactions or accounts would be a separate project outside this frontend-only scope.

## Design tokens — red and sky-blue edition

Navy `#0D1E3D`, Bright Red `#E53935`, Sky Blue `#87CEEB`, Ivory `#FAF8F3`, White `#FFFFFF`, Body `#2B3A55`, Muted `#647087`. Sky-tinted and red-tinted backgrounds derive from these accents. Red `#CB302D` is used behind small white button labels for accessible contrast. Gold and bronze have been removed.

This edition redesigns the hero, photograph framing, three focus cards, wide initiative cards, partnership panels, sky-blue support section, navy footer, and frontend dialogs. The original programme coverage, photographs, fonts, licenses, and frontend-only interactions are preserved.
