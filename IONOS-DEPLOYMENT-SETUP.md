# IONOS Deploy Now - Complete Setup Guide

This guide will help you deploy the AssuranceHill website to IONOS Deploy Now without encountering 403 Forbidden errors.

## 🎯 What's Been Configured

Your project now includes:

1. **`.htaccess`** - Fixes 403 Forbidden errors by routing all requests to `index.html` (SPA routing)
2. **`.deploy-now/config.yaml`** - IONOS deployment configuration
3. **`public/.htaccess`** - Copy that gets included in the build output

## 🚀 Deployment Steps

### Step 1: Push to GitHub

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Configure IONOS Deploy Now with SPA routing"

# Push to GitHub
git push origin main
```

### Step 2: Connect IONOS Deploy Now

1. Go to [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now)
2. Click **"Get Started Free"** (or sign in if you have an account)
3. **Sign in with GitHub**
4. **Install the IONOS Deploy Now app** to your repository
5. **Grant access** to the AssuranceHill repository

### Step 3: Configure Deployment Settings

IONOS Deploy Now will auto-detect your project settings:

- ✅ **Framework**: React (Vite)
- ✅ **Build Command**: `npm run build`
- ✅ **Publish Directory**: `dist`
- ✅ **Node Version**: 18.x

**Verify these settings** and click **"Deploy Now"**

### Step 4: Add Environment Variables (Optional)

If you want the contact form to work with Supabase:

1. In the Deploy Now dashboard, go to your project
2. Click **"Settings"** → **"Environment Variables"**
3. Add the following variables:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Click **"Save"**
5. **Redeploy** your project (Settings → Redeploy)

> **Note**: Without these environment variables, the website will work perfectly but the contact form won't submit. Users can still contact you via the email link (info@assurancehill.com) and phone number displayed on the page.

## 🔧 How the 403 Fix Works

### The Problem
Single Page Applications (SPAs) like React use client-side routing. When users:
- Navigate directly to a URL like `https://yoursite.com/services`
- Refresh the page on any route
- Bookmark a specific page

The server looks for a file called `/services/index.html` and returns **403 Forbidden** because it doesn't exist.

### The Solution
The `.htaccess` file includes Apache rewrite rules that:
1. Route **all requests** to `index.html`
2. Let React Router handle the routing on the client side
3. Skip rewriting for actual files (images, CSS, JS)

```apache
# The critical rule that fixes 403 errors
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### File Placement
- **`public/.htaccess`** - Gets copied to `dist/` during build
- **Root `.htaccess`** - Backup reference (not deployed)

## 🧪 Testing Before Deployment

Test the build locally to ensure everything works:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build
npm run preview
```

Open `http://localhost:4173` and test:
- ✅ Navigation between pages
- ✅ Direct URL access (type a route manually)
- ✅ Page refresh on different routes
- ✅ Contact form (if Supabase is configured)

## 📋 Post-Deployment Checklist

After your first deployment:

- [ ] Visit your live URL (e.g., `https://assurancehill.ionos.space`)
- [ ] Test all navigation links (Home, About, Services, Contact)
- [ ] Try accessing routes directly (e.g., `yoursite.com/#services`)
- [ ] Refresh the page on different sections
- [ ] Test the contact form submission
- [ ] Verify the "Schedule Consultation" button works (Calendly link)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari)

## 🌐 Custom Domain Setup (Optional)

To use your own domain:

1. In IONOS Deploy Now dashboard, go to your project
2. Click **"Domains"** → **"Add Custom Domain"**
3. Enter your domain (e.g., `www.assurancehill.com`)
4. Update your DNS records with the provided values:
   - Add an **A record** or **CNAME record** as instructed
5. Wait for DNS propagation (5-60 minutes)
6. SSL certificate will be automatically configured

## 🔐 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | For contact form |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key | For contact form |

> **Important**: All Vite environment variables **must** be prefixed with `VITE_`

## 📧 Contact Form Configuration

### Current Setup
The contact form is configured to send submissions to **info@assurancehill.com** via Supabase Edge Functions.

### Requirements for Full Functionality
For the contact form to actually send emails, you need to:

1. **Set up Supabase** (if not already done):
   - Create a project at [supabase.com](https://supabase.com)
   - Deploy the Edge Function in `supabase/functions/send-contact-email/`
   
2. **Configure Email Service** in the Supabase Edge Function:
   - The current function logs submissions but doesn't send emails
   - You need to integrate an email service like:
     - **Resend** (recommended, easy setup)
     - **SendGrid**
     - **AWS SES**
     - **SMTP provider**

3. **Add Email API Keys** as environment variables in Supabase

### Alternative: Simple Email Solution
Without Supabase, visitors can still contact you via:
- Email link: **info@assurancehill.com**
- Phone: **301-532-6211**
- Calendly: **Schedule Consultation** button

## 🐛 Troubleshooting

### Build Fails
**Error**: Build fails with dependency errors
**Solution**: 
```bash
# Update package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### 403 Forbidden Still Appearing
**Error**: Still getting 403 on routes after deployment
**Solution**:
1. Verify `.htaccess` is in the `dist/` folder after build:
   ```bash
   npm run build
   ls -la dist/.htaccess
   ```
2. If missing, ensure `public/.htaccess` exists
3. Rebuild and redeploy

### Assets Not Loading
**Error**: Images or styles not loading
**Solution**: Check that files are in `public/` folder and paths are relative

### Environment Variables Not Working
**Error**: Contact form not working after adding env vars
**Solution**:
1. Verify variables are prefixed with `VITE_`
2. **Redeploy** after adding variables (Settings → Redeploy)
3. Clear browser cache

### White Screen After Deployment
**Error**: Blank page after deployment
**Solution**:
1. Check browser console for errors (F12)
2. Verify build completed successfully in Deploy Now logs
3. Check that `index.html` exists in `dist/` folder

## 📚 Additional Resources

- **IONOS Deploy Now Docs**: [https://docs.ionos.space/](https://docs.ionos.space/)
- **Apache .htaccess Guide**: [https://docs.ionos.space/docs/apache-configuration-htaccess/](https://docs.ionos.space/docs/apache-configuration-htaccess/)
- **Vite Deployment**: [https://vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)
- **Support Email**: deploynow-support@ionos.com

## 🎉 You're All Set!

Your AssuranceHill website is now configured for seamless deployment to IONOS Deploy Now with:
- ✅ Proper SPA routing (no 403 errors)
- ✅ Security headers configured
- ✅ Caching optimized for performance
- ✅ Contact form ready (requires Supabase setup)
- ✅ Professional GRC consulting showcase

Just push to GitHub and let IONOS handle the rest!

---

**Questions?** Contact deploynow-support@ionos.com or refer to the [IONOS Deploy Now documentation](https://docs.ionos.space/).
