# Royal Wedding Invitation — GitHub Pages edition

This is the static HTML/CSS/JavaScript version of the Streamlit invitation. It has no backend, no RSVP and no Streamlit sleep mode. It is suitable for GitHub Pages static hosting.

## Files
- `index.html` — page content
- `styles.css` — royal maroon, gold and cream styling
- `wedding-config.js` — names, date, event schedule, venue, map link and gallery settings
- `script.js` — fills the page and runs the live countdown
- `assets/` — optional photos

## 1. Customize before publishing
Open `wedding-config.js` and replace the sample values:
- `groomName`, `brideName`
- `weddingDateTime` (ISO format; example includes India timezone `+05:30`)
- `dateDisplay`, `mainTime`
- invitation message
- events
- venue name, complete address and Google Maps directions URL
- family signature

Do not leave sample names or venue details in the published site.

## 2. Add photos (optional)
- Add `assets/hero.jpg` as a wide cover photo if you want a photo background. (See optional CSS note below.)
- Add gallery photos under `assets/`, then list their relative paths in `gallery`, e.g. `["assets/couple-1.jpg", "assets/couple-2.jpg"]`.

To apply a hero photo, add this rule near the end of `styles.css`:
```css
.hero { background-image: linear-gradient(rgba(35,12,15,.60),rgba(35,12,15,.72)), url("assets/hero.jpg"); }
```

## 3. Preview locally
You can simply double-click `index.html` to open it in a browser. For a local web server (optional), run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## 4. Publish on GitHub Pages
1. Create a GitHub repository, for example `royal-wedding-invitation`.
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to publish. The URL will appear on the Pages settings screen. For a user/organization site it may differ; a typical project-site URL is `https://YOUR-USERNAME.github.io/royal-wedding-invitation/`.

## 5. Update later
Edit `wedding-config.js` or replace photos in GitHub and commit the changes. GitHub Pages republishes the static site automatically.

## Notes
- GitHub Pages serves static files; it does not run Python or Streamlit.
- Google Fonts require an internet connection; fallback fonts are configured.
- Hosting availability is subject to GitHub service availability and GitHub Pages policies.
- No RSVP form or guest data collection is included.
