# AetherData AI - Autonomous Data Ingestion & Schema Automation

A premium, high-converting React landing page built for the **IIT Frontend Hackathon**. This codebase showcases a developer-focused, premium SaaS interface designed in line with the aesthetics of OpenAI, Stripe, and Linear.

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styles**: Tailwind CSS v4 + Native CSS variables
- **Typography**: `JetBrains Mono` (headers/logs) & `Inter` (paragraphs/labels)
- **Aesthetics**: HSL gradients, glassmorphic filters, and native CSS glow transitions

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg        # Brand icon
│   └── icons.svg          # Social media icon sprites
├── src/
│   ├── assets/            # SVG icons and mock assets
│   ├── components/        # Isolated modular layout blocks
│   │   ├── Navbar.jsx     # Responsive main menu
│   │   ├── Hero.jsx       # Landing headline, logs stream & counters
│   │   ├── TrustedCompanies.jsx # Infinite ticker marquee
│   │   ├── Features.jsx   # Capability cards
│   │   ├── BentoGrid.jsx  # Desktop bento grid / Mobile accordion transition
│   │   ├── Pricing.jsx    # Dynamic pricing calculations
│   │   ├── Testimonials.jsx # User recommendations
│   │   ├── FAQ.jsx        # Keyboard-accessible accordion
│   │   └── CTA.jsx        # Landing register actions
│   │   └── Footer.jsx     # Structured links & forms
│   ├── App.css            # Cleared default styles
│   ├── App.jsx            # Parent assembler
│   ├── index.css          # Design system variables & custom styles
│   └── main.jsx           # Mount index
├── package.json           # Node configuration file
└── vite.config.js         # Tailwind Vite plugin definitions
```

---

## ⚡ Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Run Linter Audits (Oxlint)
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

---

## 💡 Key Architectural Details

### 1. Isolated Pricing Engine (0ms Sibling Re-renders)
We avoid root-level state propagation for Pricing controls. Currency selectors and billing toggles manage variables locally inside `Pricing.jsx`, while non-pricing sections are wrapped in `React.memo` container. Changing pricing configuration causes exactly **0 re-renders** across the rest of the layout tree.

### 2. State-Synchronized Viewport Transform
The Bento Grid component (`BentoGrid.jsx`) dynamically transforms from a 3-column Bento grid on desktop to an Accordion panel list on mobile screens. Selected card index state is shared between the views, retaining focus details during orientation pivots or window resizing.

### 3. Deep SEO & Core Accessibility Standards
- Fully semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Standardized metadata (Open Graph, Twitter Cards, Canonical URLs, Meta description).
- JSON-LD schema markup configured in `index.html` headers.
- ARIA expanded states and controls mapping for responsive panels.
- Custom global focus overrides (`focus-visible`) for complete keyboard traversals.
