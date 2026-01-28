# How to Publish Your Site on GitHub

Follow these steps to upload your code to GitHub and host it for free using GitHub Pages.

## Prerequisites
1. **GitHub Account**: Make sure you have an account at [github.com](https://github.com).
2. **Git Installed**: You need Git installed on your computer.

## Phase 1: Prepare Your Project
We need to tell Git which files to ignore (like system files) to keep your repository clean.

1. **Verify Files**: Ensure your project folder contains:
   - `index.html`
   - `content/`
   - `styles/`
   - `scripts/`
   - `assets/` (if you added images)

## Phase 2: Create Repository on GitHub
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. **Repository Name**: `gpj-case-competition` (or similar).
4. **Visibility**: Choose **Public** (required for free GitHub Pages).
5. **Initialize this repository with**: Leave all uncheck (we will do this locally).
6. Click **Create repository**.
7. Copy the URL provided (e.g., `https://github.com/YourUsername/gpj-case-competition.git`).

## Phase 3: Push Code (Command Line)
Open your terminal/command prompt in the project folder and run these commands one by one:

```bash
# 1. Initialize Git in this folder
git init

# 2. Add all your files to the staging area
git add .

# 3. Commit the files (save them)
git commit -m "Initial launch of GPJ Case Competition site"

# 4. Link your local folder to the GitHub repo (Replace URL with yours)
git remote add origin https://github.com/YOUR_USERNAME/gpj-case-competition.git

# 5. Rename the default branch to main
git branch -M main

# 6. Push your code to GitHub
git push -u origin main
```

## Phase 4: Go Live with GitHub Pages
Once your code is on GitHub, you can turn on hosting:

1. Go to your repository page on GitHub.
2. Click **Settings** (top tab).
3. Scroll down/click on sidebar to **Pages**.
4. Under **Build and deployment** > **Branch**:
   - Select **main** from the dropdown.
   - Ensure folder is **/(root)**.
   - Click **Save**.
5. Wait about 30-60 seconds. Refresh the page.
6. You will see a link at the top: `Your site is live at https://YourUsername.github.io/gpj-case-competition/`

## Phase 5: updating the Site Later
When you make changes (like updating `siteContent.js`):

```bash
git add .
git commit -m "Updated announcements"
git push
```
GitHub Pages will automatically update your live site within a minute.
