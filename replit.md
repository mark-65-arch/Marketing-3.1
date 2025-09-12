# Marketing AI Houston - Astro Website

## Overview

This is an Astro-based marketing website for "Marketing AI Houston," a digital marketing agency focused on serving small businesses in the Houston area with Quick Win Industries strategy (contractors, auto shops, cleaning services, landscaping, and pet services). The project is designed to be a conversion-focused, SEO-optimized website that targets local Houston businesses with budget-conscious messaging and owner-to-owner communication.

The website emphasizes fast results, transparency, and measurable outcomes while targeting specific Houston neighborhoods and high-intent keywords related to digital marketing services. The primary goal is lead generation through strategic content placement and local SEO optimization with voice search optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

**Design Standards:**
- Default orange color: `#F95738` - Always use this exact color when "orange" is mentioned to maintain brand consistency throughout the site

## Recent Changes

**September 12, 2025**: Created Complete Digital Domination service page
- Built /services/digital-domination page with $3,497 pricing for comprehensive 15-25 page website + GMB optimization + 90-day optimization
- Used identical structure and design system as other service pages for consistency
- Updated content for comprehensive service (15-25 page website with individual service pages, location pages, gallery, testimonials, blog setup)
- Added 90-day optimization component to differentiate from foundation service
- Updated timeline to 3-4 weeks vs 10-14 days for foundation service
- Enhanced "Perfect For" section emphasizing comprehensive online presence and competing with established competitors
- Applied proper alternating background pattern: hero (gradient), problem (#f8fafc), what-you-get (white), what-you-need (white), perfect-for (#f8fafc), faq (white), cta (dark)
- Maintained identical FAQ structure with same website update policies ($50 starting price, technical updates required)
- Successfully tested page functionality and confirmed server response (200 OK)

**September 12, 2025**: Created Complete Digital Foundation service page with custom hero image
- Built /services/digital-foundation page with $1,497 pricing for 4-page website + GMB optimization
- Added service-specific hero background image: digital-foundation-website-google-business-profile-houston.jpg
- Updated meta description for better SEO differentiation: "Complete digital foundation for Houston contractors: professional 4-page website plus Google Business Profile optimization for $1,497. Local SEO and mobile-optimized design."
- Enhanced image metadata with service-specific alt text and title attributes for improved accessibility and SEO
- Used identical structure and design system as Google Business Profile page for consistency
- Updated content for combined website + GMB service (professional 4-page website, mobile-responsive design, complete Google Business Profile optimization)
- Maintained legal compliance with safe language ("Results vary by business and market conditions")
- Created FAQ section addressing website + profile questions (cost, timeline, ownership, contracts)
- Applied proper alternating background pattern matching homepage design
- Successfully tested page functionality and confirmed server response

**September 12, 2025**: Completed comprehensive service page overhaul and navigation enhancement
- Created services folder structure with optimized Google Business Profile service page
- Implemented dropdown navigation menu with three service tiers and pricing
- Added "What You Need to Provide" section for clear client expectations
- Rewrote all content with SEO optimization and voice search targeting
- Applied legal safety language with "typically", "usually", and disclaimers
- Integrated Houston neighborhood targeting (Spring, Katy, Cypress, Heights, Sugar Land)
- Optimized for "near me" searches and local service provider queries
- Fixed background colors and layout consistency to exactly match homepage alternating pattern
- Updated "What You Need to Provide" from 5 cards to 2x2 layout (combining related items)
- Updated FAQ section to use exact same 2-column grid layout and styling as homepage
- Applied proper alternating background pattern: hero (gradient), included (#f8fafc), what-you-need (white), perfect-for (#f8fafc), faq (white), cta (dark)
- Maintained identical design, spacing, and responsive behavior as homepage

**September 11, 2025**: Successfully imported and configured for Replit environment
- Installed all project dependencies with `npm install`  
- Fixed Astro configuration for Replit hosting with dynamic allowedHosts
- Updated TypeScript module resolution to 'bundler'
- Configured development server to run on 0.0.0.0:5000
- Set up deployment configuration for autoscale deployment with npm build/preview
- All pages (home, services, contact) are working properly and tested
- **IMPORTANT**: Astro requires specific allowedHosts configuration for Replit domains to prevent "Blocked request" errors
- **STATUS**: Project fully functional and ready for development/deployment

## System Architecture

### Frontend Architecture
- **Framework**: Astro static site generator with TypeScript support
- **Rendering Strategy**: Static site generation (SSG) for optimal performance and SEO
- **Component Structure**: Modular Astro components for reusability
- **Styling Approach**: Mobile-first responsive design targeting 100/100 Lighthouse performance scores
- **Navigation**: Fixed navigation with mobile hamburger menu implementation
- **Replit Configuration**: Configured for Replit environment with dynamic host allowlist using REPLIT_DEV_DOMAIN

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

## Replit Configuration Notes

### Astro Host Configuration Fix
- **Issue**: Astro dev server blocks requests from Replit proxy domains by default
- **Solution**: Configure `allowedHosts` in astro.config.mjs to include:
  - `process.env.REPLIT_DEV_DOMAIN` (dynamic current domain)
  - `.replit.dev` and `.spock.replit.dev` (wildcard patterns)
  - `localhost` for local development
- **Configuration**: Uses environment variable for dynamic domain resolution
- **Critical**: Without this configuration, users see "Blocked request" errors in Replit preview