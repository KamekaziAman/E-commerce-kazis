import ScrollReveal from "scrollreveal";

// Infer the correct type from ScrollReveal()
type ScrollRevealInstance = ReturnType<typeof ScrollReveal>;

// Shared ScrollReveal instances
let cardSr: ScrollRevealInstance | null = null;
let gridSr: ScrollRevealInstance | null = null;
let heroSr: ScrollRevealInstance | null = null;

// Initialize ScrollReveal for cards
export const initCardScrollReveal = (): ScrollRevealInstance => {
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
      mobile: true,
    });
  }
  return cardSr;
};

// Initialize ScrollReveal for grid
export const initGridScrollReveal = (): ScrollRevealInstance => {
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
      mobile: true,
    });
  }
  return gridSr;
};

// Initialize ScrollReveal for hero
export const initHeroScrollReveal = (): ScrollRevealInstance => {
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
      mobile: true,
    });
  }
  return heroSr;
};

// Cleanup function
export const destroyScrollReveal = (
  element: HTMLElement,
  srInstance: ScrollRevealInstance | null
): void => {
  if (element && srInstance) {
    srInstance.clean(element);
  }
};
