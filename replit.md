# AssuranceHill - GRC Consulting Website

## Overview
A modern, professional GRC (Governance, Risk & Compliance) consulting website for AssuranceHill Consulting. Built with React, TypeScript, Vite, and Tailwind CSS.

**Purpose**: Showcase GRC consulting services, training programs, and enable client contact through an integrated form.

**Current State**: ✅ Fully configured for Replit development and IONOS Deploy Now deployment

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS with custom design
- **Icons**: Lucide React
- **Backend Integration**: Supabase Edge Functions (for contact form)
- **Deployment**: IONOS Deploy Now

### Project Structure
```
├── src/
│   ├── components/     # React components (Navigation, Hero, Services, Contact, etc.)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets (logos, .htaccess)
├── supabase/           # Supabase Edge Functions
│   └── functions/
│       └── send-contact-email/  # Contact form handler
├── .deploy-now/        # IONOS Deploy Now configuration
└── index.html          # HTML template
```

### Key Features
- Responsive single-page application (SPA) design
- Smooth scrolling navigation between sections
- Expandable service cards with detailed information
- Contact form with Supabase backend integration
- Mobile-first responsive design
- Professional GRC service showcase
- **SPA routing configured for IONOS deployment**

## Replit Configuration

### Workflows
- **Frontend**: `npm run dev` - Vite development server on port 5000

### Vite Configuration
- Server bound to `0.0.0.0:5000` for Replit compatibility
- HMR configured for WebSocket proxy support
- Optimized build settings for production

### Environment Variables
The contact form requires Supabase configuration:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

Note: Environment variables are optional for viewing the site. The contact form will need these to function.

## IONOS Deploy Now Configuration

### Deployment Files
- **`.htaccess`** - Apache rewrite rules for SPA routing (fixes 403 Forbidden errors)
- **`public/.htaccess`** - Copy included in build output
- **`.deploy-now/config.yaml`** - IONOS deployment configuration

### How 403 Error Fix Works
The `.htaccess` file routes all requests to `index.html`, allowing React Router to handle client-side routing. This prevents 403 Forbidden errors when:
- Users navigate directly to URLs like `/services`
- Users refresh the page on any route
- Deep links are shared

### Build Output
- Build command: `npm run build`
- Output directory: `dist/`
- Includes: HTML, CSS, JS, images, and `.htaccess`

## Recent Changes
- **2025-10-14**: Initial Replit setup
  - Installed all npm dependencies
  - Configured Vite for Replit environment (port 5000, proxy support)
  - Set up Frontend workflow
  - Created .gitignore with proper exclusions
  - Added .env.example template for Supabase credentials

- **2025-10-14**: IONOS Deploy Now configuration
  - Created `.htaccess` file with SPA routing rules
  - Added security headers and caching optimization
  - Configured `.deploy-now/config.yaml`
  - Copied `.htaccess` to `public/` folder for build inclusion
  - Verified build includes `.htaccess` file
  - Created comprehensive deployment guide (IONOS-DEPLOYMENT-SETUP.md)

## Development

### Local Development
The site runs on `http://0.0.0.0:5000` and is accessible through Replit's webview.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Component Overview
- **Navigation**: Fixed header with smooth scrolling
- **Hero**: Landing section with value proposition
- **About**: Company introduction
- **Services**: Expandable cards for Advisory, GRC, Consulting, and Training
- **Contact**: Form with Supabase backend integration (sends to info@assurancehill.com)
- **Footer**: Company information and social links

## Deployment

### IONOS Deploy Now
Ready for deployment to IONOS Deploy Now. See **IONOS-DEPLOYMENT-SETUP.md** for complete instructions.

**Quick Deploy:**
1. Push to GitHub
2. Connect repository to IONOS Deploy Now
3. Auto-detected settings (React/Vite, npm run build, dist/)
4. Add environment variables (optional, for contact form)
5. Deploy!

### Contact Form Email
- Currently configured to send to: **info@assurancehill.com**
- Requires Supabase Edge Function setup with email service integration
- Alternative: Direct email/phone links work without backend setup

## User Preferences
- Production-ready configuration
- Security-focused (headers, HTTPS enforcement)
- Performance-optimized (caching, compression)
- SEO-friendly structure
