# IONOS Deploy Now - Quick Start Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for IONOS deployment"
git push origin main
```

### Step 2: Connect IONOS Deploy Now

1. Go to [https://www.ionos.com/hosting/deploy-now](https://www.ionos.com/hosting/deploy-now)
2. Click "Get Started Free"
3. Sign in with your GitHub account
4. Install the Deploy Now app to your repository

### Step 3: Configure Deployment

Deploy Now will detect your project automatically:

- ✅ **Framework Detected**: React + Vite + TypeScript
- ✅ **Build Command**: `npm run build` (auto-filled)
- ✅ **Publish Directory**: `dist` (auto-filled)
- ✅ **Node Version**: 18.x or higher

Click "Deploy Now" and you're done!

### Step 4: Add Environment Variables (If Needed)

If using Supabase or other services:

1. In Deploy Now dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Add:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```
4. Save and redeploy

## 🎯 What Happens Next?

- Every `git push` triggers automatic deployment
- Build takes ~2-3 minutes
- Live URL provided immediately
- SSL certificate auto-configured

## 📦 What Gets Deployed?

Only the `dist` folder contents (production build):
- ✅ Optimized HTML, CSS, JS
- ✅ Images and assets from `public/`
- ❌ Source code (not deployed)
- ❌ node_modules (not deployed)
- ❌ Config files (not deployed)

## 🔧 Configuration Files Included

This repo includes:
- `.deploy-now/config.yaml` - Deployment settings
- `.gitignore` - Excludes build files from Git
- `DEPLOYMENT.md` - Detailed deployment guide

## ⚡ Features

- **Zero-config deployment** - Works out of the box
- **Automatic builds** - On every git push
- **Free SSL** - HTTPS enabled automatically
- **GitHub integration** - Deploy from any branch
- **Environment variables** - Secure secrets management

## 🌐 After Deployment

Your app will be live at:
```
https://your-project-name.ionos.space
```

## 💡 Tips

1. **Test locally first**: Run `npm run build && npm run preview`
2. **Use staging branches**: Create a `staging` branch for testing
3. **Monitor builds**: Check Deploy Now dashboard for build logs
4. **Custom domains**: Add your domain in Deploy Now settings

## 🆘 Need Help?

- Documentation: [https://docs.ionos.space/](https://docs.ionos.space/)
- Support: deploynow-support@ionos.com

---

**That's it!** Your Vite + React app is now deploy-ready for IONOS Deploy Now. Just push to GitHub and connect your repo.
