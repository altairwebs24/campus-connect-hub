# NST Campus Connect — Website

A bold black-and-white brand site for NST Campus Connect, a student media, marketing and events platform connecting campuses across Nelspruit (UMP, TUT Mbombela, TVET Ehlanzeni, Eduvos Mbombela, Rosebank Mbombela). Built only with the uploaded photos/video — no AI images.

## What the site will include

Single-page site at `/` with smooth-scroll sections:

1. **Hero** — full-screen dark hero with the NST Campus Connect logo (uploaded image 1), big creative display typography, and a looping muted video background (the uploaded mp4) with a dark overlay.
2. **About Us** — content from the "about us" flyer: Who we are, What we do (Student Media & Interviews, Campus Marketing & Brand Activations, Events & Entertainment, Sports & Tournaments, Fashion & Student Culture, Student Business Promotion, Brand Partnerships), Our Role, Our Vision — styled as stacked cards on black like the flyer.
3. **Campus Business Spotlight** — content from the second flyer: free advertising for student-owned businesses, weekly Wednesday spotlight, reaching 5 campuses, with contact CTA (WhatsApp 070 762 8520, info@nstcampusconnect.co.za).
4. **Gallery / In the field** — masonry grid of the 5 uploaded event photos (SportsFest activations, interviews, mic on grass, group shots).
5. **Contact / Connect footer** — linktree link (linktr.ee/nstcampusconnect), TikTok @nst.campus.connect, Instagram @nstcampusconnect, WhatsApp and email buttons.

## Design direction

- Monochrome black/white to match the brand, with grainy texture and the swoosh/orbit-line feel of the flyers.
- Font mix: a bold condensed display face for headlines (e.g. Archivo Black / Anton style) paired with a clean grotesque for body text, plus an accent italic serif for small highlights — loaded via Google Fonts link tags.
- Marquee ticker strip ("MEDIA • EVENTS • MARKETING • SPORTS • CULTURE") for energy.

## Technical details

- **Enable Lovable Cloud**, create a **public storage bucket** (`media`), upload all 8 uploaded files (logo, 2 flyers, 5 photos, 1 video) to it, and reference their public URLs in the site.
- Rewrite `src/routes/index.tsx` with the sections above; unique head metadata (title, description, og tags) for the route; favicon derived from the logo.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`; tokens in `src/styles.css`.
- Add global CSS rule: `#lovable-badge { display: none !important; }`.
- Mobile-first, responsive, lazy-loaded images.

## Media used (all user uploads)

Logo, Campus Business Spotlight flyer, About Us flyer, 5 event photos, 1 video — no generated imagery anywhere.
