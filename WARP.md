# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website project dedicated to the red squirrel (Sciurus vulgaris). It's a modern, responsive webpage built with vanilla HTML5, CSS3, and JavaScript, featuring an educational approach with beautiful imagery and comprehensive information about red squirrels.

## Architecture & Structure

**Frontend Stack:**
- **HTML5**: Semantic markup structure (currently missing main `index.html`)
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Lightweight interactions, animations, and image gallery functionality
- **Google Fonts**: Merriweather (serif) for headings, Source Sans Pro (sans-serif) for body text

**Key Components:**
- **Hero Section**: Eye-catching introduction with rotating fun facts animation
- **Interactive Gallery**: Lightbox functionality with keyboard navigation (ESC, arrow keys)
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Scroll Animations**: Intersection Observer API for fade-in effects on fact cards
- **Image Optimization**: Progressive loading with opacity transitions

## Core Development Commands

### Serve the Website Locally
```powershell
# Simple HTTP server using Python (if available)
python -m http.server 8000

# Or using PHP (if available)
php -S localhost:8000

# Or using Node.js live-server (if installed globally)
npx live-server
```

### View the Website
Open browser to `http://localhost:8000` after running a local server.

**Note**: The main `index.html` file appears to be missing. Based on the existing CSS and JS, it should include:
- Hero section with `.hero`, `.hero-title`, `.hero-subtitle` classes
- Facts grid with `.facts-grid` and `.fact-card` elements
- Gallery section with `.gallery-grid`, `.gallery-item` structure
- Lightbox modal with required elements: `#lightbox`, `#lightbox-img`, `#lightbox-caption`, `.close-lightbox`, `.lightbox-prev`, `.lightbox-next`

### Asset Management
```powershell
# Optimize images (if tools available)
# The assets/ folder contains high-quality red squirrel images in JPG and AVIF formats

# Check image file sizes
Get-ChildItem -Path "assets" -File | Select-Object Name, Length
```

## JavaScript Architecture

**Main Features (`script.js`):**
- **Image Loading**: Progressive loading with fade-in animation
- **Smooth Scrolling**: Anchor link navigation with `scrollIntoView()`
- **Intersection Observer**: Scroll-triggered animations for `.fact-card` and `.ecology-item`
- **Gallery Lightbox**: Full-screen image viewing with navigation controls
- **Fun Facts Rotation**: 5-second interval rotation of hero subtitle text
- **Parallax Effect**: Subtle scroll-based transform on hero section

**Key Functions:**
- `rotateFunFact()`: Cycles through educational facts
- `openLightbox(index)`: Gallery image expansion
- Intersection Observer for scroll animations

## CSS Architecture

**Design System:**
- **Colors**: Neutral palette with `#2d3748`, `#4a5568`, `#718096` grays
- **Typography**: Hierarchical sizing with Merriweather for headings (3.5rem h1, 2.5rem h2)
- **Spacing**: Consistent `rem` units, 2rem base padding for cards
- **Shadows**: Layered shadow system using `rgba(0, 0, 0, 0.1)` variants
- **Animations**: `@keyframes fadeInUp` and CSS transitions throughout

**Layout:**
- **CSS Grid**: Auto-fit layouts with `minmax()` for responsive columns
- **Mobile-First**: Base styles for mobile, progressive enhancement
- **Container**: Max-width 1200px with auto centering

## Content Architecture

**Sections Expected in HTML:**
1. Hero section with rotating facts
2. Introduction with two-column grid (content + feature image)
3. Facts grid (scientific classification, habitat, behavior, characteristics)
4. Photo gallery with lightbox functionality
5. Ecology & behavior information grid
6. Conservation status section
7. Cultural significance section
8. Footer with source attribution

**Content Source**: All information sourced from Wikipedia's Red Squirrel page for accuracy and reliability.

## Development Best Practices

**Performance Considerations:**
- Images use `object-fit: cover` for consistent sizing
- Lazy loading implementation through Intersection Observer
- CSS animations use `transform` and `opacity` for GPU acceleration
- AVIF format images for modern browser optimization

**Accessibility Features:**
- Semantic HTML structure expected
- Focus states defined for interactive elements
- Keyboard navigation for lightbox (ESC, arrow keys)
- Alt text expected for all gallery images
- High contrast color ratios maintained

## Common Development Tasks

### Adding New Gallery Images
1. Add image files to `assets/` directory
2. Update gallery HTML structure in `index.html`
3. Ensure images have proper alt text and captions
4. Test lightbox functionality with new images

### Modifying Animations
- Scroll animations: Modify `observerOptions` in `script.js`
- Fun facts rotation: Update `funFacts` array and interval timing
- Hover effects: Adjust CSS transitions in `.fact-card:hover`, `.gallery-item img:hover`

### Responsive Design Updates
- Breakpoints: 768px (tablet), 480px (mobile)
- Grid layouts use `auto-fit` with `minmax()` for automatic responsiveness
- Font sizing scales down proportionally in media queries
