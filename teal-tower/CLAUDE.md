# Claude Code Notes for Replit

## Project Overview
This is an Astro static site for Teal Tower Marketing, deployed to GitHub Pages at: https://mark-65-arch.github.io/Marketing-3.1/

## Key Configuration Details

### GitHub Pages Deployment
- **Site URL**: `https://mark-65-arch.github.io`
- **Base Path**: `/Marketing-3.1` (configured in astro.config.mjs)
- **Build Directory**: `teal-tower` (project is in subdirectory)
- **GitHub Actions**: Uses `.github/workflows/astro.yml` with `BUILD_PATH: "teal-tower"`

### Environment-Aware Base Path Pattern
All navigation and links use this pattern:
```javascript
const base = import.meta.env.MODE === 'development' ? '/' : (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/');
```

### Critical Link Patterns
- **Navigation**: `href={`${base}services/digital-foundation`}`
- **Contact buttons**: `href={`${base}contact`}`
- **Home/Logo**: `href={base}`

## Recent Issues Fixed

### 1. Jekyll Deployment Conflict
- GitHub Pages was trying to use Jekyll instead of Astro
- **Solution**: Created proper Astro GitHub Actions workflow with correct BUILD_PATH

### 2. Navigation 404 Errors
- Service page links were broken due to missing trailing slash in base path
- **Solution**: Updated base path logic to ensure trailing slash

### 3. Contact Button Issues
- All contact buttons were using hardcoded `/contact` instead of base-path-aware links
- **Solution**: Updated all contact buttons to use `${base}contact` pattern

### 4. Image Optimization
- Converted all hero images from JPG to WebP format using Sharp
- Achieved ~25% file size reduction
- **Command used**: `node scripts/convert-images.mjs`

## Development Commands
- **Dev server**: `npm run dev` (runs on localhost:4321)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Important Files
- `astro.config.mjs` - Main configuration with GitHub Pages settings
- `src/layouts/BaseLayout.astro` - Contains base path logic and navigation
- `src/components/Logo.astro` - Logo component with base path support
- `.github/workflows/astro.yml` - GitHub Actions deployment workflow

## Notes for Future Development
1. Always use the base path pattern for internal links
2. Test both development (`npm run dev`) and production (`npm run preview`) environments
3. Images should be in WebP format for optimal performance
4. Never hardcode absolute paths - always use the base path variable
5. **Git Commands**: We're already in `/teal-tower` directory - use `git status`, `git add .`, etc. directly without `cd teal-tower &&` prefix

## Recent Updates (Latest Session)
- Updated hero text max-widths: title 1200px, subtitle 900px
- Standardized all buttons to orange background (#D2361A) with white text
- Fixed logo AI text color consistency across all pages
- Resolved service cards overlapping with optimized spacing (row-gap: 4rem)
- Fixed CSS variable circular reference in digital-domination page
- All changes committed and pushed successfully

## Deployment Status
✅ All navigation links working
✅ All contact buttons working  
✅ Images optimized and loading correctly
✅ GitHub Pages deployment successful
✅ Design consistency improvements deployed