# Comprehensive UI/UX Improvement Plan for Ferry Hinardi

**Frontend Engineer | React & React Native Specialist | 11+ Years Experience**

---

## Executive Summary

This plan outlines a two-part strategy to elevate Ferry Hinardi's personal brand:
1. **GitHub Profile README** - Modern, animated, dark-mode-ready profile
2. **Personal Website** - A cutting-edge portfolio site with Next.js 14+

**Goals:** Job/Career opportunities, Personal brand/thought leadership, Freelance/Consulting clients

---

# Part 1: GitHub Profile README Improvements

## Current State Analysis

Your current README is functional but can be significantly enhanced:
- Uses auto-generated metrics SVG (good foundation)
- Custom Traveloka contributions chart (unique differentiator)
- Basic markdown structure with emoji headers
- Standard GitHub stats card

## Recommended Improvements

### 1.1 Modern Design Patterns

#### Hero Section Redesign
```markdown
<div align="center">
  
<!-- Animated Typing SVG -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=0366D6&center=true&vCenter=true&multiline=true&width=600&height=100&lines=Hi%2C+I'm+Ferry+Hinardi+%F0%9F%91%8B;Frontend+Engineer+%40+Traveloka;11%2B+Years+Building+Great+UX)](https://git.io/typing-svg)

<!-- Animated Wave Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Ferry%20Hinardi&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Frontend%20Engineer%20%7C%20React%20%26%20React%20Native%20Specialist&descAlignY=51&descAlign=50"/>

</div>
```

#### Recommended Tools:
- **[Capsule Render](https://github.com/kyechan99/capsule-render)** - Animated headers/footers
- **[Readme Typing SVG](https://github.com/DenverCoder1/readme-typing-svg)** - Typing animation
- **[GitHub Profile Trophy](https://github.com/ryo-ma/github-profile-trophy)** - Achievement badges

### 1.2 Visual Hierarchy & Layout

**Proposed Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  HERO BANNER (Animated gradient wave)                        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Typing Animation: Name + Title + Tagline               ││
│  │  Social Links: LinkedIn | Twitter | Portfolio           ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  ABOUT ME (2-column layout)                                  │
│  ┌──────────────────┐  ┌──────────────────────────────────┐ │
│  │ Profile Picture  │  │ Brief intro + Current role       │ │
│  │ (with glow)      │  │ + Quick stats                    │ │
│  └──────────────────┘  └──────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  TECH STACK (Animated skill badges)                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Core: React | React Native | TypeScript | Next.js     ││
│  │  Tools: VS Code | Git | Figma | Webpack                 ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  CONTRIBUTIONS (Side-by-side)                                │
│  ┌────────────────────┐  ┌────────────────────────────────┐ │
│  │ GitHub Stats       │  │ Traveloka Contributions        │ │
│  │ (Dark theme)       │  │ (Custom SVG - Enhanced)        │ │
│  └────────────────────┘  └────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  FEATURED PROJECTS (Cards with screenshots)                  │
├─────────────────────────────────────────────────────────────┤
│  FOOTER (Wave animation + Connect links)                     │
└─────────────────────────────────────────────────────────────┘
```

### 1.3 Animated SVG Elements

#### Snake Animation (GitHub Contributions)
Add to your GitHub Actions workflow:
```yaml
# .github/workflows/snake.yml
name: Generate Snake Animation

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: Platane/snk@v3
        with:
          github_user_name: ferryhinardi
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark
```

#### Activity Graph
```markdown
[![Ferry's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=ferryhinardi&theme=react-dark&hide_border=true&area=true)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

### 1.4 Skills Badges & Technology Icons

**Recommended Badge Style (shields.io + Simple Icons):**

```markdown
### Core Technologies

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

### Tools & Platforms

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL"/>
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
</p>
```

**Animated Skill Icons Alternative:**
```markdown
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,nextjs,nodejs,graphql,tailwind,figma,git&theme=dark&perline=8" />
  </a>
</p>
```

### 1.5 Enhanced Metrics Display

**Improved Stats Cards:**
```markdown
<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=ferryhinardi&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true" />
  <img width="49%" src="https://github-readme-streak-stats.herokuapp.com/?user=ferryhinardi&theme=tokyonight&hide_border=true" />
</p>
```

**Profile Trophy:**
```markdown
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=ferryhinardi&theme=tokyonight&no-frame=true&column=7&margin-w=15" />
</p>
```

### 1.6 Dark Mode Support

Use GitHub's `picture` tag for theme-aware images:
```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="github-metrics-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="github-metrics-light.svg">
  <img alt="GitHub Metrics" src="github-metrics-light.svg">
</picture>
```

**Theme-aware Stats:**
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=ferryhinardi&show_icons=true&theme=transparent&hide_border=true)
```

### 1.7 Enhanced Traveloka Contributions SVG

**Recommended Enhancements:**
- Add CSS animations (fade-in, count-up effects)
- Include hover tooltips
- Support dark/light themes
- Add a mini-chart visualization

```svg
<!-- Enhanced version with animations -->
<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes countUp {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .stat-card { animation: fadeIn 0.6s ease-out forwards; }
  .stat-value { animation: countUp 1s ease-out forwards; }
</style>
```

### 1.8 Mobile-Friendly Considerations

- Use `align="center"` for key elements
- Keep badge rows to max 4-5 per line
- Use percentage widths for images (`width="48%"`)
- Test on GitHub mobile app

---

# Part 2: Personal Website Design

## 2.1 Recommended Tech Stack

### Core Framework
```
Next.js 15 (App Router) + TypeScript
├── Reason: SSR/SSG for SEO, React Server Components
├── Your expertise: React - natural fit
└── Features: Image optimization, API routes, ISR for blog
```

### Styling & Animation
```
Tailwind CSS v4 + Framer Motion
├── Tailwind: Utility-first, dark mode, responsive
├── Framer Motion: Production-ready animations
└── Alternative: GSAP for complex scroll animations
```

### Full Recommended Stack
| Category | Technology | Why |
|----------|------------|-----|
| Framework | Next.js 15 (App Router) | SSR, RSC, SEO optimization |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS v4 | Rapid development, dark mode |
| Animation | Framer Motion + GSAP | Smooth micro-interactions |
| Blog | MDX + Contentlayer | Rich content, code highlighting |
| CMS (optional) | Sanity.io | Visual editing, real-time |
| Deployment | Vercel | Seamless Next.js integration |
| Analytics | Vercel Analytics + Plausible | Privacy-friendly insights |
| Email | Resend | Modern email API |
| Database | Supabase (if needed) | Auth, real-time, PostgreSQL |

## 2.2 Page Structure & Navigation

```
ferryhinardi.dev/
├── / (Home)
│   ├── Hero section with 3D animation
│   ├── Brief intro
│   ├── Featured projects (3)
│   └── Latest blog posts (3)
│
├── /about
│   ├── Professional summary
│   ├── Experience timeline
│   ├── Skills visualization
│   └── Personal interests
│
├── /projects (Portfolio)
│   ├── Project grid with filters
│   ├── Case study pages
│   └── Live demos & GitHub links
│
├── /blog
│   ├── Article list with search
│   ├── Category filters
│   └── Reading time estimates
│
├── /blog/[slug]
│   ├── MDX content
│   ├── Table of contents
│   ├── Code highlighting
│   └── Share buttons
│
├── /resume
│   ├── Interactive timeline
│   ├── Downloadable PDF
│   └── Skills matrix
│
└── /contact
    ├── Contact form
    ├── Social links
    └── Availability status
```

### Navigation Pattern (Inspired by Brittany Chiang)
```tsx
// Fixed sidebar navigation (desktop)
// Hamburger menu (mobile)
const Navigation = () => (
  <nav className="fixed top-0 left-0 h-screen w-20 lg:w-64">
    <Logo />
    <NavLinks />
    <SocialIcons />
    <ThemeToggle />
  </nav>
);
```

## 2.3 Modern UI/UX Patterns for Portfolio Sites

### From Brittany Chiang (brittanychiang.com)
- **Single-page scrolling experience** with section highlighting
- **Spotlight/cursor effect** following mouse
- **Minimal color palette** (slate + cyan accent)
- **Sticky navigation** that updates as you scroll
- **Cards that lift on hover** with subtle shadows

### From Lee Robinson (leerob.io)
- **Extremely minimal design** - content-first approach
- **Large typography** for readability
- **Spotify "Now Playing"** widget (adds personality)
- **Simple list-based navigation**
- **Fast page transitions**

### From Josh Comeau (joshwcomeau.com)
- **Playful, whimsical interactions** throughout
- **Dark/light mode toggle** with smooth transition
- **Interactive code examples** in blog posts
- **Easter eggs** and hidden surprises
- **Sound effects** (optional toggle)
- **Custom 3D avatar** reactions

### From Cassie Evans (cassie.codes)
- **SVG animations** as a core identity element
- **Animated logo** that draws itself
- **Creative typography** treatments
- **Hand-drawn aesthetic** elements
- **Scroll-triggered animations**

## 2.4 Animation Libraries & Techniques

### Framer Motion (Primary)
```tsx
// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  {children}
</motion.div>

// Staggered list animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

### GSAP for Complex Animations
```tsx
// Scroll-triggered animations
useGSAP(() => {
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top center",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
  });
});
```

### Recommended Animation Patterns
| Element | Animation Type | Library |
|---------|---------------|---------|
| Page transitions | Fade + slide | Framer Motion |
| Scroll reveals | Fade up on enter | Framer Motion |
| Hero text | Typing effect | react-type-animation |
| Project cards | 3D tilt on hover | react-tilt |
| Background | Gradient animation | CSS + Tailwind |
| Skills | Progress bars fill | Framer Motion |
| Timeline | Draw on scroll | GSAP ScrollTrigger |
| Cursor | Custom cursor follow | Framer Motion |

## 2.5 Design System & Component Architecture

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                 # Primitive components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Container.tsx
│   │
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   │
│   ├── blog/               # Blog-specific
│   │   ├── PostCard.tsx
│   │   ├── MDXComponents.tsx
│   │   └── TableOfContents.tsx
│   │
│   └── shared/             # Shared components
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       ├── SocialLinks.tsx
│       └── ThemeToggle.tsx
│
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── fonts.ts            # Font configuration
│   └── mdx.ts              # MDX utilities
│
├── content/
│   ├── posts/              # MDX blog posts
│   └── projects/           # Project data
│
└── styles/
    └── globals.css         # Tailwind + custom styles
```

### Component Example (Project Card)
```tsx
// components/shared/ProjectCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  href,
  github,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-xl bg-zinc-900/50 backdrop-blur-sm 
                 border border-zinc-800 overflow-hidden"
    >
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 
                     group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 
                        via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-100 mb-2 
                       group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r from-cyan-500/10 via-transparent 
                      to-purple-500/10 pointer-events-none" />
    </motion.article>
  );
}
```

## 2.6 Color Palette & Typography

### Color Palette (Dark-First with Traveloka Accent)

```css
:root {
  /* Background */
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  
  /* Text */
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-tertiary: #71717a;
  
  /* Accent (Traveloka-inspired blue + modern cyan) */
  --accent-primary: #0066ff;     /* Main accent */
  --accent-secondary: #06b6d4;   /* Cyan for highlights */
  --accent-gradient: linear-gradient(135deg, #0066ff 0%, #06b6d4 100%);
  
  /* Status */
  --success: #22c55e;
  --warning: #eab308;
  --error: #ef4444;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-default: rgba(255, 255, 255, 0.2);
}

/* Light mode overrides */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f4f4f5;
  --bg-tertiary: #e4e4e7;
  --text-primary: #09090b;
  --text-secondary: #52525b;
  --text-tertiary: #a1a1aa;
}
```

### Typography System

**Font Pairing:**
```typescript
// lib/fonts.ts
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';

// Primary - Clean, modern sans-serif
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Display - For headlines (alternative)
export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
});

// Monospace - For code
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
```

**Type Scale:**
```css
/* Tailwind config addition */
fontSize: {
  'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
  'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'body-lg': ['1.125rem', { lineHeight: '1.75' }],
  'body-md': ['1rem', { lineHeight: '1.75' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],
}
```

## 2.7 Interactive Elements & Micro-interactions

### Cursor Effect (Brittany Chiang style)
```tsx
// components/shared/CursorGlow.tsx
'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity 
                 duration-300 lg:block hidden"
      style={{
        background: `radial-gradient(600px at ${cursorXSpring}px ${cursorYSpring}px, 
                     rgba(6, 182, 212, 0.15), transparent 80%)`,
      }}
    />
  );
}
```

### 3D Tilt Cards
```tsx
// components/shared/TiltCard.tsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
```

### Scroll Progress Indicator
```tsx
// components/shared/ScrollProgress.tsx
'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r 
                 from-cyan-500 to-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
```

## 2.8 Performance & SEO Considerations

### Performance Checklist
- [ ] Use Next.js Image component for all images
- [ ] Implement dynamic imports for heavy components
- [ ] Use React Server Components where possible
- [ ] Minimize client-side JavaScript
- [ ] Optimize fonts with `next/font`
- [ ] Implement proper caching headers
- [ ] Use Vercel's Edge Functions for API routes
- [ ] Lazy load below-the-fold content

### SEO Implementation
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://ferryhinardi.dev'),
  title: {
    default: 'Ferry Hinardi | Frontend Engineer',
    template: '%s | Ferry Hinardi',
  },
  description: 'Frontend Engineer specializing in React, React Native, and TypeScript with 11+ years of experience building exceptional digital experiences.',
  keywords: ['Frontend Engineer', 'React Developer', 'React Native', 'TypeScript', 'Traveloka', 'Jakarta'],
  authors: [{ name: 'Ferry Hinardi' }],
  creator: 'Ferry Hinardi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ferryhinardi.dev',
    siteName: 'Ferry Hinardi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ferry Hinardi - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferry Hinardi | Frontend Engineer',
    description: 'Frontend Engineer specializing in React, React Native, and TypeScript',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Structured Data (JSON-LD)
```tsx
// app/page.tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ferry Hinardi',
  url: 'https://ferryhinardi.dev',
  sameAs: [
    'https://github.com/ferryhinardi',
    'https://linkedin.com/in/ferryhinardi',
    'https://twitter.com/ferryhinardi',
  ],
  jobTitle: 'Frontend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Traveloka',
  },
  knowsAbout: ['React', 'React Native', 'TypeScript', 'Frontend Development'],
};
```

## 2.9 Blog Implementation

### MDX Setup with Contentlayer
```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string' },
    draft: { type: 'boolean', default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('posts/', ''),
    },
    readingTime: {
      type: 'string',
      resolve: (post) => calculateReadingTime(post.body.raw),
    },
  },
}));
```

### Custom MDX Components
```tsx
// components/blog/MDXComponents.tsx
import Image from 'next/image';
import { Callout } from './Callout';
import { CodeBlock } from './CodeBlock';
import { LinkPreview } from './LinkPreview';

export const mdxComponents = {
  Image: (props) => (
    <Image {...props} className="rounded-lg my-8" />
  ),
  pre: ({ children, ...props }) => (
    <CodeBlock {...props}>{children}</CodeBlock>
  ),
  Callout,
  LinkPreview,
  a: ({ href, children }) => (
    <a href={href} className="text-cyan-400 hover:text-cyan-300 underline 
                              underline-offset-4 transition-colors">
      {children}
    </a>
  ),
};
```

## 2.10 Contact & Social Integration

### Contact Form with Resend
```tsx
// app/api/contact/route.ts
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = ContactSchema.parse(body);

    await resend.emails.send({
      from: 'Contact Form <noreply@ferryhinardi.dev>',
      to: 'ferry.hinardi@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
```

### Social Links Component
```tsx
// components/shared/SocialLinks.tsx
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', href: 'https://github.com/ferryhinardi', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ferryhinardi', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ferryhinardi', icon: Twitter },
  { name: 'Email', href: 'mailto:ferry.hinardi@gmail.com', icon: Mail },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -3, color: '#06b6d4' }}
          className="text-zinc-400 hover:text-cyan-400 transition-colors"
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}
```

---

# Implementation Roadmap

## Phase 1: GitHub README (1-2 days)
1. Set up GitHub Actions for snake animation and metrics
2. Create new README structure with hero banner
3. Add animated typing SVG and skill badges
4. Enhance Traveloka contributions SVG with dark mode
5. Add theme-aware images

## Phase 2: Website Foundation (1 week)
1. Initialize Next.js 15 project with TypeScript
2. Set up Tailwind CSS with design tokens
3. Configure fonts and base styles
4. Build layout components (Header, Footer, Navigation)
5. Implement theme toggle (dark/light)

## Phase 3: Core Pages (1-2 weeks)
1. Home page with hero and sections
2. About page with experience timeline
3. Projects page with filterable grid
4. Contact page with form

## Phase 4: Blog & Content (1 week)
1. Set up MDX with Contentlayer
2. Build blog list and post pages
3. Add syntax highlighting and custom components
4. Write initial blog posts

## Phase 5: Polish & Launch (3-5 days)
1. Add animations and micro-interactions
2. Optimize performance (Core Web Vitals)
3. Implement SEO and structured data
4. Deploy to Vercel
5. Connect custom domain

---

# Quick Start Commands

```bash
# Create new Next.js project
npx create-next-app@latest ferryhinardi-portfolio --typescript --tailwind --eslint --app --src-dir

# Install dependencies
cd ferryhinardi-portfolio
npm install framer-motion @vercel/analytics contentlayer next-contentlayer
npm install -D @tailwindcss/typography rehype-pretty-code rehype-slug

# Development
npm run dev
```

---

**Questions to consider:**
1. Do you prefer a single-page scrolling experience (like Brittany Chiang) or multi-page navigation?
2. Would you like to include a "Now Playing" Spotify widget like Lee Robinson?
3. How interactive do you want the site? (Josh Comeau level with Easter eggs, or more minimal?)
4. Do you want to integrate a CMS for easier blog management, or keep it MDX-only?

---

*This plan provides a foundation for a world-class personal brand presence. The combination of an enhanced GitHub README and a modern portfolio website will significantly boost your visibility for job opportunities, consulting clients, and thought leadership in the frontend community.*
