import ScrollReveal from "scrollreveal";

// Shared ScrollReveal instances for different components
let cardSr: any = null;
let gridSr: any = null;
let heroSr: any = null;

// Initialize ScrollReveal for cards
export const initCardScrollReveal = () => {
  if (!cardSr) {
    cardSr = ScrollReveal({
      distance: "40px",
      duration: 700,
      easing: "ease-in-out",
      interval: 100,
      opacity: 0,
      origin: "bottom",
      reset: false,
      scale: 0.9,
      viewFactor: 0.1,
      // Better zoom level compatibility
      useDelay: "always",
      mobile: true,
    });
    
    // Debug log
    console.log("Card ScrollReveal initialized");
  }
  return cardSr;
};

// Initialize ScrollReveal for grid
export const initGridScrollReveal = () => {
  if (!gridSr) {
    gridSr = ScrollReveal({
      distance: "60px",
      duration: 800,
      easing: "ease-in-out",
      interval: 200,
      opacity: 0,
      origin: "bottom",
      reset: false,
      scale: 0.95,
      viewFactor: 0.1,
      // Better zoom level compatibility
      useDelay: "always",
      mobile: true,
    });
    
    // Debug log
    console.log("Grid ScrollReveal initialized");
  }
  return gridSr;
};

// Initialize ScrollReveal for hero
export const initHeroScrollReveal = () => {
  if (!heroSr) {
    heroSr = ScrollReveal({
      distance: "80px",
      duration: 1000,
      easing: "ease-in-out",
      opacity: 0,
      origin: "bottom",
      reset: false,
      scale: 0.9,
      viewFactor: 0.1,
      // Better zoom level compatibility
      useDelay: "always",
      mobile: true,
    });
    
    // Debug log
    console.log("Hero ScrollReveal initialized");
  }
  return heroSr;
};

// Cleanup function
export const destroyScrollReveal = (element: HTMLElement, sr: any) => {
  if (element && sr) {
    sr.destroy(element);
  }
}; 