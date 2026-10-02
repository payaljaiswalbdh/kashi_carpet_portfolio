# Kashi Carpets Website

A responsive, static website for Kashi Carpets, a handcrafted rug business based in Bhadohi, Uttar Pradesh.
https://kashicarpetportfolio-brown.vercel.app/

## Pages

- `index.html` - Home page
- `about.html` - Company and founder information
- `products.html` - Product catalog with category filters
- `contact.html` - Contact and enquiry page

## Features

- English and Hindi language selector
- Responsive layouts and mobile navigation
- Product catalog with rug photos and filters
- WhatsApp and phone enquiry links
- Shared styles and interactions across all pages

## Run Locally

The site does not require a build step or package installation. From the project folder, run:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. Stop the server with `Ctrl+C`.

## Project Structure

```text
.
|-- index.html
|-- about.html
|-- products.html
|-- contact.html
|-- assets/
|   |-- css/style.css
|   |-- js/script.js
|   `-- images/
`-- README.md
```

Product details and translation strings are maintained in `assets/js/script.js`. Shared visual styles are in `assets/css/style.css`; image files are stored in `assets/images/`.
