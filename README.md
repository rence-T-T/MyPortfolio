# Gion Terrence Pozon — e-Portfolio

A clean, modular e-portfolio hosted on GitHub Pages.

---

## How to Deploy to GitHub Pages

1. Create a new GitHub repository named `portfolio` (or any name you want).
2. Upload all files from this folder to the repository.
3. Go to **Settings > Pages** in your repository.
4. Under **Source**, select **main branch** and click **Save**.
5. Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

---

## How to Add or Edit Content

### Profile Photo
- Place your photo file inside `assets/img/`
- Name it `profile.jpg` (or update the `src` in `index.html` and `about.html`)

### Adding an Artifact (Relevant Works)
1. Open `data/portfolio.js`
2. Find the course section you want to add to
3. Add a new object inside its `artifacts` array:
```js
{
  id: "unique-id",
  title: "Your Artifact Title",
  type: "pdf",            // "pdf" for files, "link" for external URLs
  file: "files/your-file.pdf",   // or a full URL for links
  description: "What this artifact is about.",
  outcomes: "How it contributes to CpE Student Outcomes.",
  personalGoals: "How it contributes to your personal goals."
}
```
4. If it's a PDF, drop the file into the `files/` folder.

### Adding a New Course Section
1. Open `data/portfolio.js`
2. Add a new object to the `portfolioData` array (copy the structure of an existing course).

### Adding an Achievement
1. Drop your image into `assets/img/achievements/`
2. Open `data/achievements.js`
3. Add a new object:
```js
{ title: "Your Achievement Title", image: "assets/img/achievements/your-image.jpg" }
```

### Editing the Bio (About Page)
- Open `about.html` and edit the text inside the `<div class="about-bio">` section.

### Editing Navigation Links
- Open `assets/js/components.js` and edit the `NAV_ITEMS` array at the top.

---

## File Structure

```
portfolio/
├── index.html              ← Home page
├── about.html              ← About Me page
├── works.html              ← Relevant Works page (auto-renders from data/)
├── achievements.html       ← Achievements page (auto-renders from data/)
├── assets/
│   ├── css/style.css       ← All styles
│   ├── js/components.js    ← Shared navbar and footer
│   └── img/
│       ├── profile.jpg     ← Your profile photo (REPLACE THIS)
│       └── achievements/   ← Put your certificate/competition photos here
├── data/
│   ├── portfolio.js        ← All artifact data (edit this to add works)
│   └── achievements.js     ← All achievements data (edit this to add certs)
└── files/
    └── (your PDF files go here)
```

---

## Yellow Placeholder Boxes

Any field that starts with `[PLACEHOLDER]` is shown as a yellow highlighted box on the site.
Replace the text in `data/portfolio.js` or `data/achievements.js` with your actual content
and it will automatically render normally.
