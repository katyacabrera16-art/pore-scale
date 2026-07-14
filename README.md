# Pore Scale

**Skincare meets environmental understanding.**

Pore Scale is a bilingual skincare education platform that helps people look beyond marketing language and better understand product claims, ingredient information, and environmental impact.

[Visit the live website](https://moonlit-speculoos-37af5f.netlify.app/) · [Try the Claim Decoder](https://moonlit-speculoos-37af5f.netlify.app/claim-decoder/)

## Why I Built It

Skincare labels often use reassuring words such as “clean,” “natural,” “dermatologist tested,” and “reef safe,” but those terms do not always tell the full story.

As an environmental engineer and esthetics student, I wanted to create a place where skincare, environmental awareness, and accessible education come together. Pore Scale is designed to help people ask better questions and make choices they understand—not to tell them what to buy or to label products as simply “good” or “bad.”

Content is available in English and Spanish because useful information should be accessible to more people.

## Current Features

- Bilingual educational articles in English and Spanish
- Searchable explanations of common skincare claims
- Claim Decoder for comparing product claims with visible ingredient information
- Beta label scanner using on-device optical character recognition (OCR)
- Manual type-or-paste option when a label cannot be read accurately
- User confirmation of scanned text before analysis
- Source-based explanations and clear evidence limitations
- Responsive design for desktop and mobile

## How the Claim Decoder Works

1. Choose a skincare claim or scan the front label of a product.
2. Review and correct the text detected by the scanner.
3. Scan or paste the ingredient list.
4. Explore what the available information may support, what requires more evidence, and what ingredients alone cannot prove.

The tool does not force every claim into “true” or “false.” When the available information is insufficient, it says so.

## Responsible Scope

Pore Scale is an independent educational project. It does not audit brands, suppliers, manufacturing practices, certifications, laboratory testing, or ingredient concentrations.

The scanner is currently in beta. Curved packaging, glare, small print, and image quality can affect text recognition, so users can review the extracted text or enter it manually.

Results are informational and are not medical, legal, or regulatory advice.

## Built With

- [Astro](https://astro.build/)
- HTML and CSS
- JavaScript
- [Tesseract.js](https://tesseract.projectnaptha.com/) for on-device OCR
- Markdown content collections
- Netlify

I use Claude and Claude Code as development and learning tools while I define the product direction, review sources, test the experience, and decide what is published.

## Run Locally

```bash
npm install
npm run dev
```

The local development server will be available at `http://localhost:4321`.

To create a production build:

```bash
npm run build
npm run preview
```

## Roadmap

- Improve OCR performance across more types of product packaging
- Expand the claim and evidence library
- Develop a searchable ingredient library
- Add more product-label education tools
- Continue improving the project through user feedback and expert review

## Creator

Created by [Katya Cabrera Huerta](https://github.com/katyacabrera16-art), an environmental engineer, esthetics student, and bilingual project builder.
