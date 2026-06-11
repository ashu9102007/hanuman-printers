# Hanuman Printers — Project Notes

Read this file first to understand the project.

## What this is
An animated website for **Hanuman Printers**, Shankarpally, Hyderabad.
Sells wedding invitation cards, business cards, and bulk card printing.

## Tech stack
- Next.js 16 + React + TypeScript
- Tailwind CSS v4
- Framer Motion (`motion` package) for animations
- Static export (`output: "export"` in next.config.ts) → builds to `out/`

## Where things live (all under src/)
| What | File |
|------|------|
| Hero (Hanuman background image, left side) | src/components/Hero.tsx |
| Services cards | src/components/Services.tsx |
| Gallery + photo upload | src/components/Gallery.tsx |
| Why Us | src/components/WhyUs.tsx |
| Contact (address, phone, map) | src/components/Contact.tsx |
| Navbar + Admin button | src/components/Navbar.tsx |
| Admin login logic | src/components/AdminButton.tsx |
| Admin state + photo storage | src/components/AdminContext.tsx |
| Colors / theme | src/app/globals.css |
| Page assembly | src/app/page.tsx |

## Business details (the real info)
- Address: Market Road, opposite Adarsh Bank, Shankarpally, Hyderabad - 501203
- Phone / WhatsApp: 7660904545
- Hero background image: public/hanuman.jpg

## Admin login (for adding gallery photos)
- Username: ashu
- Password: 9107
- (Defined in src/components/AdminContext.tsx)

## Known limitation
Uploaded gallery photos save in the BROWSER only (localStorage). They are NOT
shared across visitors. For photos everyone can see, a cloud backend is needed.

## Run locally
    cd /c/Users/ashu9/website_animated
    npm run dev
Then open http://localhost:3000 (or whatever port it prints).

## Build for hosting
    npm run build
Output goes to the `out/` folder (contains index.html).

## Deploy
- GitHub repo: https://github.com/ashu9102007/hanuman-printers
- Hosted on Vercel (auto-redeploys when you push to GitHub).
- To update the live site: commit changes, then `git push`.
