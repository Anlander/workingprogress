This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


First, install the development server:

```bash
npm install
# or
yarn

```

Second, API key is req from storyblok:

```bash
env.example file explains what you need.

```


Notes: We need to install mkcert to start proxy server. (https://www.storyblok.com/faq/setup-dev-server-https-windows)

Third Proxy - Storyblok live preview

```bash
npm run proxy
# or
yarn proxy
# or
pnpm proxy
# or
bun proxy
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/src/[slug]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

