# How to Update the GPJ Case Competition Website

This website is built to be easily updated by changing a SINGLE file. You do not need to know HTML or CSS to make content updates.

## 1. Updating Content (Announcements, Dates, Links)

All the text data is stored in:
`content/siteContent.js`

To update the site, open this file in any text editor (Notepad, VS Code, etc.).

### Adding a New Announcement
1. Find the `announcements` list in the file.
2. Copy an existing `{ ... }` block.
3. Paste it at the top of the list (or anywhere, it sorts automatically).
4. Update the fields:
   - `date`: Use "YYYY-MM-DD" format.
   - `title`: The headline.
   - `description`: Short body text.
   - `link`: Optional URL (leave empty if none).

**Example:**
```javascript
{
    date: "2026-03-01",
    title: "New Update Title",
    description: "Description of the update goes here.",
    link: "#",
    linkText: "Read More",
    type: "news"
},
```

### Updating Key Dates
1. Find the `keyDates` list.
2. Change the `status` field to "active", "completed", or "TBD".
3. Change the `date` text to whatever you want displayed.

## 2. Previewing Your Changes
Since this is a static site:
1. Go to the project folder.
2. Double-click `index.html`.
3. The site will open in your browser with your latest changes.

## 3. Deployment
To publish this site, simply drag the entire folder into a static host like **Netlify Drop** or **GitHub Pages**.
