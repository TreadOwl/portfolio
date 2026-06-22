<div align="center">

# `/\\` &nbsp; A \ G

...

A personal portfolio — cream, beige, and monospace — for a
*"Full Stack" Web-App Developer* from Dehradun, Uttarakhand
who likes front-end, UI/UX, and making cool looking things.

</div>

---

## ~ the feel

Everything sits on a hand-mixed **OKLCH** palette — base cream, soft beige,
warm sand — rendered in `JetBrains Mono` with `Noto Sans` for the quieter labels.
A collapsible sidebar, a floating header, and per-page absolute backgrounds
that drift behind a `z-3` content layer. Hover, and things lift two pixels.

---

## ~ built with

| | |
|---|---|
| **[Next.js 16](https://nextjs.org)** | App Router, server components by default |
| **[React 19](https://react.dev)** | the canvas |
| **[TypeScript](https://www.typescriptlang.org)** | typed end to end |
| **[Tailwind CSS v4](https://tailwindcss.com)** | config lives entirely in `globals.css` — no `tailwind.config` |
| **[shadcn/ui](https://ui.shadcn.com)** | `radix-lyra` style, vendored primitives |
| **[Radix UI](https://www.radix-ui.com)** | accessible component foundations |
| **[Phosphor Icons](https://phosphoricons.com)** | the iconography |
| **[Bun](https://bun.sh)** | package manager & runtime |

---

## ~ the architecture

A single `(home)` route group owns the chrome — `TooltipProvider` → `SidebarProvider`
→ sidebar, floating header, and a shared `<main>`. Three pages live beneath it:

```
src/
├─ app/
│  ├─ layout.tsx          → html shell, fonts, global css
│  └─ (home)/
│     ├─ layout.tsx       → providers + sidebar + header
│     ├─ page.tsx         → home
│     ├─ projects/        → work, pulled from lib/projects.json
│     └─ contact/         → reach out
├─ components/
│  ├─ ui/                 → shadcn primitives (vendored)
│  ├─ app-sidebar.tsx     → navigation + socials
│  ├─ floating-header.tsx
│  └─ bg-absolute.tsx     → HomeBg · ProjectsBg · ContactBg
├─ lib/                   → cn() helper, projects data
└─ hooks/                 → use-mobile, …
```

---

## ~ run it

```bash
bun install
bun dev        # dev server
bun build      # production build
bun start      # serve the build

bun lint       # eslint (next core-web-vitals + ts)
bun typecheck  # tsc --noEmit
bun format     # prettier — no semicolons, single quotes
```

---

## ~ reach out

[LinkedIn](https://www.linkedin.com/in/ayushgusain2106) ·
[GitHub](https://github.com/TreadOwl) ·
[E-mail](mailto:ayushgusain2106@gmail.com)

<div align="center">

*made this when tasks were easy, and I was trying to look busy*

©2026 Ayush Gusain

</div>
