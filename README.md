# Adheesh Overseas — B2B Export Website

A Next.js (App Router) + TypeScript + Tailwind CSS + Shadcn-style UI project for
Adheesh Overseas, a B2B exporter of premium Indian turmeric, spices, oil seeds,
pulses and grains.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Hand-built shadcn-style UI primitives (Dialog, Sheet, Tabs, Accordion, Card, Button, Badge, Select, Input, Textarea, Label) in `src/components/ui`
- Lucide React icons
- React Hook Form + Zod for the inquiry form
- Resend (optional) for emailing inquiries — falls back to console logging if `RESEND_API_KEY` is not set

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables
Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` if you want the
contact form to actually send emails via Resend. Without it, inquiries are
logged server-side and the form still returns success (useful for local dev).

## Project Structure

```
src/
  app/
    page.tsx                 Home page
    about/page.tsx            About Us
    products/page.tsx         Product catalog (search + filter)
    harvest-chart/page.tsx    Full seasonality chart
    contact/page.tsx          Contact & inquiry form
    api/inquiry/route.ts      Form submission API route
  components/
    layout/                  Header, Footer, Announcement bar, WhatsApp button
    home/                    Home page sections (Hero, Trust stats, FAQ, etc.)
    shared/                  Product card/modal, Inquiry form, Global sheet, Harvest table
    ui/                      Shadcn-style primitives
  data/                      products.ts, harvest.ts, certifications.ts, faqs.ts
  context/                   Global inquiry modal (Sheet) state
  lib/utils.ts                cn() helper
```

## Things to Customize Before Launch
- `src/components/layout/whatsapp-button.tsx` — replace the placeholder phone number
- `src/components/layout/footer.tsx` and `src/app/contact/page.tsx` — replace placeholder phone number
- `src/app/api/inquiry/route.ts` — set `RESEND_API_KEY` and confirm the `from`/`to` addresses (the `from` address needs a verified domain in Resend)
- `src/data/products.ts` — swap Unsplash placeholder images for real product photography
- `src/app/contact/page.tsx` — replace the Google Maps embed query with your exact address/coordinates
- Add `/terms` and `/privacy` pages (currently linked in the footer but not yet created)
