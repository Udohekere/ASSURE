# IONOS Deploy Now - Deployment Guide

This project is configured for seamless deployment to IONOS Deploy Now.

## Prerequisites

1. GitHub account
2. IONOS Deploy Now account (free tier available)
3. Repository pushed to GitHub

## Deployment Setup

### 1. Connect Your Repository

1. Visit [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now)
2. Sign in with your GitHub account
3. Install the IONOS Deploy Now GitHub App
4. Grant access to your repository

### 2. Configure Your Project

Deploy Now will automatically detect your Vite + React + TypeScript project:

- **Framework**: React (Vite)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher (recommended)

### 3. Environment Variables

If your project uses environment variables (e.g., Supabase credentials), add them in the Deploy Now dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

**Important**: All Vite environment variables must be prefixed with `VITE_`

### 4. Automatic Deployments

Once configured, Deploy Now will automatically:
- Deploy on every `git push` to your main/master branch
- Run the build process (`npm run build`)
- Deploy the `dist` folder to IONOS infrastructure
- Provide you with a live URL

## Configuration Files

This project includes IONOS-specific configuration:

- `.deploy-now/config.yaml` - Deployment configuration
  - Excludes source files, dependencies, and config files from deployment
  - Only deploys the built `dist` folder contents

## Build Process

The build process on IONOS Deploy Now:

1. **Install Dependencies**: `npm install`
2. **Build**: `npm run build`
3. **Deploy**: Contents of `dist/` folder deployed to web space

## Manual Build (Testing)

To test the build locally before deployment:

```bash
npm install
npm run build
npm run preview
```

This will create a `dist` folder and preview it locally at `http://localhost:4173`

## Staging & Production

### Staging Deployments
- Create a `staging` branch
- Deploy Now can automatically deploy this branch to a staging URL

### Production Deployments
- Push to `main` or `master` branch
- Automatic deployment to your production URL

## Custom Domains

After initial deployment:
1. Go to Deploy Now dashboard
2. Navigate to your project
3. Add your custom domain
4. Update DNS records as instructed

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node version compatibility (18.x recommended)
- Check build logs in Deploy Now dashboard

### Environment Variables Not Working
- Ensure all variables are prefixed with `VITE_`
- Verify they're added in Deploy Now dashboard
- Redeploy after adding variables

### Assets Not Loading
- Check that asset paths are relative
- Verify `base` in `vite.config.ts` if deploying to subdirectory

## Support

- IONOS Deploy Now Documentation: https://docs.ionos.space/
- Support Email: deploynow-support@ionos.com

## Project Structure

```
├── dist/                 # Build output (auto-generated, git-ignored)
├── public/              # Static assets
├── src/                 # Source code
├── .deploy-now/         # Deploy Now configuration
│   └── config.yaml      # Deployment settings
├── .env                 # Local environment variables (git-ignored)
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── index.html           # Entry HTML file
```

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] IONOS Deploy Now connected to repository
- [ ] Environment variables configured (if needed)
- [ ] Initial deployment successful
- [ ] Live URL accessible
- [ ] Custom domain configured (optional)

---

**Note**: The `.deploy-now/config.yaml` file ensures only production-ready files are deployed, excluding source code, node_modules, and configuration files.
