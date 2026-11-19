# Mims

Website for Mims Convention Centre, a venue in Kerala. A landing page, a gallery and a contact form.

**Live:** [mims-pi.vercel.app](https://mims-pi.vercel.app)

## What it does

- A single landing page with sections for the venue, services, story, gallery and contact details.
- A gallery page with category tags (Venues, Events, Weddings, Facilities).
- A floating call button and `tel:` links for booking by phone.
- A contact form.
- Colour scheme taken from the venue's logo.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Google Fonts through `next/font` (Poppins, Geist)

## Run it locally

```bash
cd frontend
pnpm install
pnpm dev
```

No env vars needed.

## Notes

Solo build. The contact form is a front-end stub: it shows a success message but does not send anything yet. A Google Maps embed component exists but is not used on any page.
