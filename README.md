# Load Movers - Professional Moving Services Website

A fully responsive React web application for a professional moving company.

## Features

- **Home Page** with:
  - Hero section with background image, counters, and CTA buttons
  - Services section showcasing 6 different services
  - Why Choose Us section highlighting company benefits
  - Testimonials section with customer reviews
  - Call-to-action section
  - Professional footer

- **Quote Request Page** with:
  - Comprehensive quote request form
  - Success confirmation modal
  - Form validation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
load-movers/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SectionWrapper.jsx
│   │   └── StarRating.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   └── QuoteRequestPage.jsx
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Color Scheme**: Clean blue (#2563eb) as primary color
- **Hover Effects**: Interactive elements with smooth transitions
- **Animations**: Fade-in and slide-up animations for better UX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

