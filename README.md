# Portfolio website (Next.js)

A fast, accessible portfolio built with Next.js 16, React 19 and TypeScript.

**Sections:** intro and about, skills, projects (with filters and a detail page for each), interests, downloadable CV, contact form.
**Extras:** light and dark theme, mobile menu, SEO metadata, social share image, sitemap, structured data, keyboard and screen reader support.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Make it yours (5 steps)

1. **Edit `src/data/portfolio.ts`.** Your name, intro, skills, projects, interests, email and social links all live here. Save and the site updates.
2. **Replace your CV.** Put your PDF at `public/cv.pdf` (or change the path in `site.cv`). The current file is a placeholder.
3. **Add a photo (optional).** Save it as `public/photo.jpg`, then set `photo: "/photo.jpg"` in `site`. Without it, your initials are shown.
4. **Add project screenshots (optional).** Save images in `public/projects/`, then set `image: "/projects/orbit.png"` on the project. Without one, a generated cover is used.
5. **Set up the contact form.** Copy `.env.example` to `.env.local` and fill it in (free Resend account). Until then, the form tells visitors to use your email address.

## Deploy

Push the folder to GitHub and import it on [vercel.com](https://vercel.com). Add the same environment variables in the Vercel project settings, including `NEXT_PUBLIC_SITE_URL` set to your real domain.

## Where things are

- `src/app/globals.css`: all styling. Colours and fonts are variables at the top.
- `src/components/`: one file per section.
- `src/app/projects/[slug]/page.tsx`: the project detail page.
- `src/app/api/contact/route.ts`: the contact form endpoint.
