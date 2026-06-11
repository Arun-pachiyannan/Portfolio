// src/animations/pageTransition.js
export const pageTransition = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
  },
  transition: {
    duration: 0.4,
  },
};