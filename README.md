# AssuranceHill

A modern GRC (Governance, Risk & Compliance) consulting website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Fast Performance**: Optimized build with Vite
- **Email Integration**: Supabase Edge Functions for contact form
- **Service Showcase**: Comprehensive GRC services and training

## 📦 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (Edge Functions)

## 🛠️ Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npm run typecheck
```

## 🌐 Deployment

This project is configured for seamless deployment to **IONOS Deploy Now**.

### Quick Deploy
1. Push code to GitHub
2. Connect to [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now)
3. Deploy automatically on every push

### Deployment Guides
- **Quick Start**: See [IONOS-QUICKSTART.md](./IONOS-QUICKSTART.md)
- **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Configuration
- Build output: `dist/`
- Build command: `npm run build`
- Node version: 18.x+
- Deploy config: `.deploy-now/config.yaml`

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── supabase/           # Supabase Edge Functions
│   └── functions/
│       └── send-contact-email/
├── .deploy-now/        # IONOS Deploy Now config
├── dist/               # Build output (generated)
└── index.html          # HTML template
```

## 🔐 Environment Variables

Create a `.env` file for local development:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note**: All Vite environment variables must be prefixed with `VITE_`

For production deployment on IONOS, add these in the Deploy Now dashboard under Environment Variables.

## 📝 License

Copyright © 2025 AssuranceHill. All rights reserved.

---

Built with ❤️ using React + Vite + TypeScript
