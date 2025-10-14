# Quick Reference Guide

## 🚀 Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 5000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

## 📧 Contact Information

- **Email**: info@assurancehill.com
- **Phone**: 301-532-6211
- **Calendly**: Linked in "Schedule Consultation" button

## 🌐 Deployment URLs

- **Development**: Replit webview (port 5000)
- **Production**: `https://assurancehill.ionos.space` (or custom domain)

## 📁 Key Files

| File | Purpose |
|------|---------|
| `.htaccess` | Fixes 403 errors on IONOS Deploy Now |
| `public/.htaccess` | Gets copied to build output |
| `.deploy-now/config.yaml` | IONOS deployment settings |
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS settings |

## 🔧 Environment Variables

Add these in IONOS Deploy Now dashboard for contact form:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## ✅ Pre-Deployment Checklist

- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Verify `.htaccess` in dist: `ls dist/.htaccess`
- [ ] All links work (navigation, email, phone, Calendly)
- [ ] Mobile responsive design tested
- [ ] Environment variables configured (if using contact form)

## 🐛 Common Issues & Fixes

### 403 Forbidden Error
**Cause**: Missing or incorrect `.htaccess` file  
**Fix**: Ensure `public/.htaccess` exists, rebuild: `npm run build`

### Contact Form Not Working
**Cause**: Missing Supabase environment variables  
**Fix**: Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Deploy Now dashboard

### Build Fails
**Cause**: Outdated dependencies  
**Fix**: Run `npm install`, commit `package-lock.json`, push

### Assets Not Loading
**Cause**: Incorrect paths or base URL  
**Fix**: Check paths are relative, verify `public/` folder structure

## 📚 Documentation

- **Main README**: `README.md`
- **IONOS Setup**: `IONOS-DEPLOYMENT-SETUP.md`
- **IONOS Quickstart**: `IONOS-QUICKSTART.md`
- **Deployment Guide**: `DEPLOYMENT.md`

## 🔗 Important Links

- [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now)
- [IONOS Documentation](https://docs.ionos.space/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🎯 Website Sections

1. **Home** (`#home`) - Hero section with value proposition
2. **About** (`#about`) - Company introduction
3. **Services** (`#services`) - Advisory, GRC, Consulting, Training
4. **Contact** (`#contact`) - Contact form and information

## 💡 Tips

- Always test production build before deploying
- .htaccess file is critical for IONOS deployment
- Environment variables need `VITE_` prefix
- Contact form logs to console but needs email service integration to actually send
- Direct email/phone links work without backend setup
