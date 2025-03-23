# Supreme Group Website

## Description

This project is a frontend implementation of the Supreme Group website, built using modern best practices and the specified tech stack. The design is based on the provided Figma file, and the website is fully responsive, accessible, and optimized for performance.

## Tech Stack

- **Frontend Framework**: ReactJS (with TypeScript)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Installation

1. Clone the repository, install dependencies, and start the development server:
   ```bash
   git clone git@github.com:anas-reveation/supreme-group.git
   cd supreme-group
   npm install
   npm run dev
   ```

## Component Architecture

- **Header**: A reusable header component used across all pages.
- **Footer**: A reusable footer component used across all pages.
- **Home**: The main page component that includes the header, footer, and content.
  - **HeroSection**: The hero section of the home page.
  - **FeatureSection**: A section highlighting key features.
  - **CommercialVehicle**: Displays details about commercial vehicles.
  - **PassengerVehicle**: Displays details about passenger vehicles.
  - **VehicleSelector**: A component for selecting vehicle types.
  - **GetInTouch**: A section for users to contact the company.
- **Error**: A fallback page for handling errors.

## Responsive Design Strategy

- Utilized **Tailwind CSS** for responsive design.
- Implemented a **mobile-first approach** for better performance on smaller screens.
- Used **Tailwind CSS breakpoints** to handle different screen sizes (e.g., `sm`, `md`, `lg`, `xl`).
- Leveraged **CSS Grid & Flexbox** for fluid and adaptive layouts.
- Tested thoroughly across various devices and screen sizes (mobile, tablet, laptop, and desktop).

## Performance Optimizations

- **Lazy Loading:** Implemented `React.lazy()` and `Suspense` for component-based code splitting to improve initial load times.
- **Image Optimization:**
  - Used next-gen formats like **WebP** for better compression and faster loading.
  - Utilized **SVG images** where possible for scalability and sharp rendering.
  - Ensured all images have **proper height and width** attributes to prevent layout shifts.
- **Code Splitting:** Dynamically imported components to reduce the initial bundle size.
- **Efficient Asset Loading:** Optimized fonts and assets to minimize render-blocking resources.

## 6. Accessibility Considerations

- **Semantic HTML:** Used `<header>`, `<nav>`, `<main>`, and other semantic elements for better structure.
- **Keyboard Navigation:** Ensured all interactive elements are accessible via keyboard navigation.
- **Alt Text for Images:** Provided meaningful alternative text for images.

## Third-Party Libraries Used

### **Production Dependencies**

- **React (`^19.0.0`)** – Core library for UI development.
- **ReactDOM (`^19.0.0`)** – Used to render React components in the DOM.
- **React Router DOM (`^7.4.0`)** – Provides navigation and routing functionality.
- **TailwindCSS (`^4.0.15`)** – Utility-first CSS framework for styling.
- **@tailwindcss/vite (`^4.0.15`)** – TailwindCSS plugin for Vite.
- **Framer Motion (`^12.5.0`)** – Animation library for smooth UI interactions.
- **React Icons (`^5.5.0`)** – Collection of icons from various icon packs.
- **Swiper (`^11.2.6`)** – Touch slider for creating image carousels.

### Assumptions

- Assumed that the design provided in the Figma file was final and would not change during development.
- Assumed that users would primarily access the website on modern browsers, so older browser support was not prioritized.
- Assumed that the website would not require server-side rendering (SSR) for this phase of development.

### Decisions

- Chose **React** for its component-based architecture, which makes the code reusable and maintainable.
- Used **Tailwind CSS** for its utility-first approach, which allowed for rapid development and consistent styling.
- Implemented **lazy loading** for images and components to improve initial page load performance.

## Challenges Faced and Potential Solutions

### Responsive Design

- **Challenge**: Ensuring pixel-perfect responsiveness across multiple devices.
- **Solution**: Used Tailwind CSS breakpoints and tested on multiple devices and browsers.

### Form Validation

- **Challenge**: Implementing real-time validation and displaying user-friendly error messages.
- **Solution**: Used React Hook Form for efficient form management and added accessibility attributes.

### Motion (Animations)

- **Challenge**: Implementing smooth animations without affecting performance.
- **Solution**: Used Framer Motion and respected user preferences for reduced motion.

### Performance Optimization

- **Challenge**: The website was loading slowly due to large images and unused JavaScript.
- **Solution**: Compressed images, implemented code splitting, and used Vite for faster builds.

## Suggested Upcoming Features and Improvements

### Framer Motion Animations

- Add more interactive animations to enhance the user experience.
- Implement page transitions and hover/click animations.

### Dark Mode Toggle

- Add a dark mode toggle to allow users to switch between light and dark themes.
- Save the user’s preference in `localStorage` for persistence.

### Hamburger Menu Enhancements

- Add smooth animations to the hamburger menu.
- Improve accessibility with keyboard navigation and ARIA attributes.

### Search Functionality

- Add a search bar with autocomplete suggestions.

### User Authentication

- Implement a login/signup feature for personalized user experiences.

🔗 [Live Demo](https://supreme-group-s476.vercel.app/)

### 📦 Repository

The source code is available on GitHub:

🔗 [GitHub Repository](https://github.com/anas-reveation/supreme-group.git)
