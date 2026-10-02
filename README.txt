╔══════════════════════════════════════════════════════════════╗
║              KASHI CARPETS — IMPRESSIVE WEBSITE               ║
║       Owner: Mr. Mahender Kumar Jaiswal · Bhadohi (U.P.)      ║
║              Phone: +91 7068983826                            ║
╚══════════════════════════════════════════════════════════════╝

📁 FOLDER STRUCTURE
───────────────────
kashi-carpets-website/
│
├── index.html        ← Home page
├── about.html        ← About + Owner (Mr. Mahender Kumar Jaiswal) page
├── products.html     ← Products catalogue with filters
├── contact.html      ← Contact + Enquiry form (auto WhatsApp forward)
├── README.txt        ← this file
│
└── assets/
    ├── css/
    │   └── style.css    ← ALL styling in one file (linked from every HTML page)
    ├── js/
    │   └── script.js    ← ALL JavaScript in one file (linked from every HTML page)
    └── images/
        ├── logo.webp
        ├── product-beige.jpg
        ├── product-blue.jpg
        ├── product-green.jpg
        └── product-red.jpg


🔗 HOW HTML, CSS & JS ARE LINKED TOGETHER
─────────────────────────────────────────
Every HTML page (index / about / products / contact) contains:

   In <head>:
      <link rel="stylesheet" href="assets/css/style.css">
      → this connects the HTML page to the CSS styling

   Before </body>:
      <script src="assets/js/script.js"></script>
      → this connects the HTML page to the JavaScript behaviour

So the flow is:
   HTML  ──(link)──►  CSS   (visual look)
   HTML  ──(script)─►  JS    (interactivity)

Change ONE css file → the whole website updates.
Change ONE js file → the whole website updates.


⚡ HOW TO OPEN THE WEBSITE
──────────────────────────
1.  Extract this folder anywhere on your computer.
2.  Double-click "index.html" — it opens in your web browser.
3.  Navigate using the top menu (Home / About / Products / Contact).


🌐 HOW TO PUT IT ONLINE (FREE)
──────────────────────────────
Option A — Netlify:
   1. Go to https://app.netlify.com/drop
   2. Drag the "kashi-carpets-website" folder into the browser
   3. Your live URL appears within seconds.

Option B — GitHub Pages:
   1. Create a new GitHub repo, upload all files
   2. Settings → Pages → Deploy from main branch
   3. Your URL will be:  username.github.io/repo-name

Option C — Any Hosting (Hostinger / GoDaddy):
   Just upload the whole folder via FTP / file manager.


✏️ HOW TO EDIT THE CONTENT
──────────────────────────
▸ Change owner name / phone / email everywhere:
     Open  assets/js/script.js  →  edit the BUSINESS object at the top.
     One change → updates all pages automatically.

▸ Add / edit a product:
     Open  assets/js/script.js  →  edit the `products` array.

▸ Change colours:
     Open  assets/css/style.css  →  edit the :root CSS variables at the top
     (--brand-1, --brand-2, --accent-2 etc.)

▸ Replace images:
     Drop new images (same filename) inside  assets/images/

▸ Update text on any page:
     Open the HTML file directly and edit the words.


✨ IMPRESSIVE FEATURES INCLUDED
──────────────────────────────
✔ Elegant preloader on every page
✔ Sticky header with scroll-blur effect
✔ Animated hero with floating rug panels
✔ Number counter animation on stats
✔ Smooth "reveal on scroll" animations everywhere
✔ Product cards with hover-zoom, badges, filters
✔ Product filtering (Home / Office / Signature / Luxury)
✔ Floating WhatsApp button with pulse animation
✔ Back-to-top button appearing on scroll
✔ Contact form with validation → auto builds a WhatsApp message
✔ Enquiries saved in browser localStorage
✔ Fully mobile responsive with animated hamburger menu
✔ Testimonial cards, owner card, timeline steps
✔ Playfair Display + Inter font pairing for a premium feel
✔ Gold-accent color palette matching wool/rug aesthetic


📞 QUICK CONTACT CONFIG (single source of truth)
─────────────────────────────────────────────────
Open  assets/js/script.js  →  the BUSINESS object controls:
   • Owner name
   • Phone (used in tel:, WhatsApp, and displayed text)
   • Email (used in mailto: and displayed text)
   • Address, Instagram link

Every page will pick these up automatically via
data attributes ([data-owner], [data-phone], [data-email], etc.).

═══════════════════════════════════════════════════════════════
                       Handcrafted with ♥
                    Kashi Carpets · Bhadohi
═══════════════════════════════════════════════════════════════
