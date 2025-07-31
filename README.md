# E-Commerce Fashion Store

A modern, responsive e-commerce website built with React, TypeScript, and Vite. This project showcases a fashion brand with a focus on streetwear and urban style, featuring a sleek design with smooth animations and an intuitive user experience.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Showcase**: Dynamic product cards with ratings, pricing, and discounts
- **Hero Section**: Animated hero carousel with compelling brand messaging
- **Product Details**: Individual product pages with detailed information
- **Navigation**: Top and bottom navigation for easy browsing
- **Animations**: Smooth scroll reveal animations using ScrollReveal.js
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Icons**: FontAwesome
- **Animations**: ScrollReveal.js
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/
│   ├── Footer/           # Footer component
│   ├── Main/             # Main page components
│   │   ├── Button/       # Reusable button component
│   │   ├── Cards/        # Product cards display
│   │   ├── grid/         # Product grid layout
│   │   ├── HeroProduct/  # Hero section with carousel
│   │   └── Label/        # Section labels and descriptions
│   ├── Navbar/           # Navigation components
│   │   ├── Navbar.tsx    # Top navigation
│   │   └── BottomNavbar.tsx # Bottom navigation
│   └── ProductPage/      # Product detail pages
│       ├── ImageViewer/  # Product image viewer
│       ├── ProductDetails/ # Product information
│       ├── ProductRecommendation/ # Related products
│       └── RatingAndReview/ # Product reviews
├── utils/
│   └── scrollReveal.ts  # Animation utilities
└── App.tsx              # Main application component
```

## 🎨 Design Features

- **Streetwear Aesthetic**: Bold typography and urban-inspired design
- **Product Categories**: New drops, hot items, limited editions, and sales
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **Brand Identity**: "Art Meets Attitude" - connecting creatives and trendsetters

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd e-commerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Components

### Home Page (`/`)
- **Hero Section**: Animated carousel with brand messaging
- **New Drops**: Latest product collection
- **Product Grid**: Featured items with ratings and pricing
- **Brand Story**: "Redefine the Rules" section

### Product Pages (`/:productName`)
- **Product Details**: Comprehensive product information
- **Image Viewer**: Product image gallery
- **Reviews & Ratings**: Customer feedback system
- **Recommendations**: Related products

## 🎯 Key Components

- **HeroProduct**: Animated hero carousel with zoom effects
- **Cards**: Product cards with pricing, ratings, and discounts
- **Navigation**: Dual navigation system for optimal UX
- **Product Details**: Comprehensive product information display

## 🔧 Customization

The project is built with modularity in mind. Key areas for customization:

- **Styling**: Modify Tailwind classes in component files
- **Content**: Update product data in `Cards.tsx` and other components
- **Branding**: Change colors, fonts, and messaging in respective components
- **Animations**: Adjust ScrollReveal configurations in `utils/scrollReveal.ts`

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or support, please contact the project maintainer.

---

Built with ❤️ using React, TypeScript, and Vite
