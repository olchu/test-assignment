# Finom — Responsive Funding Banner

[**Live demo**](https://olchu.github.io/test-assignment/) · Built with **React + TypeScript + Vite**

> A small, “alive” promo banner in a fintech style. Fully responsive from **320 px** up, with soft hover states, an animated illustration, accessible markup, and a safe external link.

---

## What this project does

- Renders a **marketing banner** with a title, description, benefits list, and two CTAs: `Apply Now` and `More information`.
- **Alive UI**: subtle hover states and a gentle floating animation on the illustration (disabled for users who prefer reduced motion).
- **Responsive**: single-column layout at ≤ 600 px (mobile), two columns on larger screens; works reliably from **320 px**.
- **Close behavior**: clicking the cross icon **removes the banner from the DOM** (per the task requirement).
- **External link**: `More information` safely opens `finom.co` in a new tab (`rel="noopener noreferrer"`).
- **Accessibility**: semantic structure (`<section>`, heading, real `<ul>` list), visible focus rings, and ARIA labels.

---

## How to run

### Local development
```bash
git clone https://github.com/olchu/test-assignment.git
cd test-assignment
npm install
npm run dev
```
Open `http://localhost:5173/`.

### Production build
```bash
npm run build
npm run preview
```

### Deployment (GitHub Pages)
The repo is configured to auto-deploy via **GitHub Actions** on every push to `main`.  
Published at: `https://olchu.github.io/test-assignment/`.

---

## Tech stack

- **React 18 + TypeScript** — typed, component-based implementation.
- **Vite** — fast dev server and build tool.
- **CSS Modules** — component-scoped styles stored next to components.
- **Poppins** (Google Fonts) — primary UI typeface.
- **Semantic HTML & a11y** — ARIA labels, visible focus, `prefers-reduced-motion`.

---

## Key decisions & why

- **`<section>` as the banner container**  
  The banner is a distinct content block. Using `section` (plus an `aria-label` in code) makes it discoverable for assistive tech and search engines.

- **Clear component decomposition**  
  - `Banner` — layout & behavior (close removes from DOM).  
  - `Title` — typography with `as`, `size`, `align` props (visual size via CSS variables and `clamp()` for fluid scaling).  
  - `List` / `ListItem` — semantic benefits list.  
  - `Button` — reusable with `variant="solid" | "asText"` (CTA vs. secondary link).

- **Responsive typography with `clamp()`**  
  Fluid font sizing bounded by min/max values for readability on both small and large screens—no brittle media queries.

- **Hover only where it makes sense**  
  Interactive hover effects are wrapped in `@media (hover: hover) and (pointer: fine)` so touch devices don’t get sticky “hover” states.

- **Decorative illustration**  
  Positioned absolutely, marked as decorative (`alt="" aria-hidden="true"`), animated along X/Y with a long, subtle cycle; disabled under `prefers-reduced-motion`.

- **Zero UI dependencies**  
  Pure React + CSS Modules keeps bundle small and integration simple—showing care for performance and maintainability.

> If I had more time, I’d add: persisted dismissal (24h TTL in `localStorage`), a Storybook story for the banner, a Vitest + RTL test suite (render/close), Lighthouse screenshots, and Husky + ESLint/Prettier hooks.

---

## Screenshots

> Place screenshots in the `docs/` folder with these filenames and they will render in the README.

**Desktop (≥1024px)**  
![Desktop](docs/screenshot-desktop.png)

**Mobile (≤600px)**  
![Mobile](docs/screenshot-mobile.png)

---

## Project structure

```
src/
  components/
    banner/
      Banner.tsx
      Banner.module.css
    ui/
      Button/
        Button.tsx
        Button.module.css
      Title/
        Title.tsx
        Title.module.css
      List/
        List.tsx
        ListItem.tsx
        List.module.css
  styles/
    globals.css
  App.tsx
  main.tsx
```

- Each component keeps its own `.module.css` right next to it.
- `styles/globals.css` holds only design tokens (colors, fonts) and base styles.

---

## Task reference

- Public build available via direct URL (**GitHub Pages**).
- Banner is **“alive”** (hover states, subtle animation).
- **Mobile breakpoint 600 px**, works down to **320 px**.
- **External link** `More information → finom.co`.
- Close icon **removes banner from the DOM**.

---

License: **MIT**
