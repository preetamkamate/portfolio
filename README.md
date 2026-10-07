# Preetam Kamate — AI & Machine Learning Portfolio

> **Live Production Website:** [https://port-xi-ebon.vercel.app](https://port-xi-ebon.vercel.app)

A retro-futuristic, highly animated, and responsive personal portfolio terminal interface built for **Preetam Kamate**, Artificial Intelligence & Machine Learning student at New Horizon College of Engineering, Bengaluru.

---

## ⚡ Features & Aesthetic

- **Retro-Futuristic Terminal:** Dark charcoal backdrop, burnt orange/amber neon accents, subtle coordinate overlays, and CRT scanlines.
- **Cinematic Startup Sequence:** Multi-phase boot sequence revealing system registers, radial clock rings, and identity telemetry (fully skippable with `Esc`).
- **Original Chrono Mascot:** Interactive animated clock mascot with blinking cartoon eyes, live ticking analog hands, winking response, and 3D parallax tilt.
- **Custom Dynamic Cursor:** Glowing center with lerp follower ring, real-time particle trail, magnetic button attraction, and card targeting reticle (disabled on mobile).
- **Interactive 3D Project Cards:** Mouse-following tilt, scanning line sweep, verified accuracy metrics, and direct GitHub links.
- **Scroll-Drawing Timeline:** Vertical academic milestone line dynamically drawn based on scroll progress.
- **Retro Sound Synthesizer:** Web Audio API 8-bit oscillator engine with sound toggle controls.
- **CRT Filter Switch:** Real-time toggleable CRT scanline simulation.
- **No Fabricated Statistics:** Verified academic scores (CGPA: 9.06 / 10, PU: 89%, SSLC: 96%) and verified project outcomes.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS CRT scanlines
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG Vectors
- **Graphics & Audio:** HTML5 Canvas particle network & Web Audio API synthesizer
- **Deployment:** [Vercel](https://vercel.com/) Global Edge Network

---

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   ├── BootSequence.tsx      # Startup cinematic loading sequence
│   │   ├── Navbar.tsx            # Futuristic header with live IST chrono
│   │   ├── Hero.tsx              # Hero terminal with telemetry & CTA
│   │   ├── ClockMascot.tsx       # Original animated clock mascot
│   │   ├── About.tsx             # 01 // ABOUT ME specification panel
│   │   ├── Skills.tsx            # 02 // SKILLS (17 verified competencies)
│   │   ├── ProjectCard.tsx       # 3D mouse-tilt project card
│   │   ├── Projects.tsx          # 03 // PROJECTS with live GitHub stats
│   │   ├── Education.tsx         # 04 // EDUCATION vertical drawing timeline
│   │   ├── BeyondCode.tsx        # Multilingual competency badges
│   │   ├── Contact.tsx           # 05 // CONTACT with copy & dispatch
│   │   ├── Footer.tsx            # Retro archive footer
│   │   ├── Cursor.tsx            # Custom glowing cursor & particle trail
│   │   ├── BackgroundEffects.tsx # Floating canvas particles & grid
│   │   └── Icons.tsx             # SVG icons
│   ├── data/
│   │   └── portfolioData.ts      # Static project & academic information
│   ├── utils/
│   │   └── soundFx.ts            # Web Audio API retro oscillator
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main layout & section observer
│   └── index.css                 # Retro grid & scanline styles
├── vercel.json                   # Vercel deployment configuration
└── package.json
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 📬 Contact & Coordinates

- **Author:** Preetam Kamate
- **Email:** [preetamkamate2005@gmail.com](mailto:preetamkamate2005@gmail.com)
- **Phone:** +91 7975793868
- **GitHub:** [https://github.com/preetamkamate](https://github.com/preetamkamate)
- **LinkedIn:** [https://www.linkedin.com/in/preetam-kamate-844b5636a/](https://www.linkedin.com/in/preetam-kamate-844b5636a/)
