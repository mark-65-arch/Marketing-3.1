# Marketing Now Houston - Astro Website

## Overview

This is an Astro-based marketing website for "Marketing Now Houston," a digital marketing agency focused on serving small businesses in the Houston area. The project is designed to be a conversion-focused, SEO-optimized website that targets local Houston businesses across multiple industries including contractors, medical practices, real estate, legal services, and restaurants.

The website emphasizes credibility, transparency, and measurable results while targeting specific Houston neighborhoods and high-intent keywords related to digital marketing services. The primary goal is lead generation through strategic content placement and local SEO optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**September 9, 2025**: Successfully imported and configured for Replit environment
- Fixed Astro configuration for Replit hosting (allowedHosts: 'all')
- Updated TypeScript module resolution to 'bundler'
- Configured development server to run on 0.0.0.0:5000
- Set up deployment configuration for autoscale deployment
- All pages (home, services, contact) are working properly

## System Architecture

### Frontend Architecture
- **Framework**: Astro static site generator with TypeScript support
- **Rendering Strategy**: Static site generation (SSG) for optimal performance and SEO
- **Component Structure**: Modular Astro components for reusability
- **Styling Approach**: Mobile-first responsive design targeting 100/100 Lighthouse performance scores
- **Navigation**: Fixed navigation with mobile hamburger menu implementation
- **Replit Configuration**: Configured for Replit environment with proper host allowlist

### Project Structure
```
src/
├── layouts/
│   └── BaseLayout.astro (shared layout with SEO and navigation)
├── pages/
│   ├── index.astro (homepage with hero, services, industries)
│   ├── services.astro (detailed service descriptions)
│   └── contact.astro (lead capture forms)
└── components/
    ├── ServiceCard.astro (reusable service display)
    └── IndustrySection.astro (industry-specific content)
```

### SEO Strategy
- **Local SEO Focus**: Houston-specific keywords and neighborhood targeting
- **Schema Markup**: LocalBusiness structured data for Google
- **Content Strategy**: Industry-specific landing pages and service descriptions
- **Performance Optimization**: Lighthouse score optimization for search rankings

### Content Architecture
- **Service Pages**: Four core services (Website Building, SEO, Business Profiles, AI Search)
- **Industry Targeting**: Specific content for contractors, medical, real estate, legal, restaurants
- **Geographic Targeting**: Houston neighborhoods including Heights, Montrose, Downtown, Sugar Land, Katy, Cypress
- **Conversion Elements**: Strategic CTA placement and contact forms throughout

### Development Environment
- **Build System**: Astro's built-in build pipeline
- **Development Server**: Hot-reload development environment
- **TypeScript**: Strict TypeScript configuration for type safety
- **VS Code Integration**: Configured with Astro-specific extensions and debugging

## External Dependencies

### Core Framework
- **Astro**: v5.13.7 - Static site generator and build system
- **@astrojs/compiler**: Component compilation and optimization
- **@astrojs/markdown-remark**: Markdown processing for content pages

### Development Tools
- **TypeScript**: Type checking and development experience
- **Node.js Types**: @types/node for Node.js API support

### Planned Integrations
- **Contact Forms**: Form handling for lead capture
- **Analytics**: Google Analytics for performance tracking
- **Local Business Schema**: Structured data for local search optimization
- **Google Business Profile**: Integration for local visibility

### Performance Dependencies
- **Astro Internal Helpers**: Performance optimization utilities
- **Prism**: Syntax highlighting for technical content
- **Shiki**: Code highlighting with better performance
- **Unified/Remark/Rehype**: Markdown and HTML processing pipeline

The architecture prioritizes static generation for maximum performance, local SEO optimization for Houston market penetration, and modular component design for maintainability and scalability.