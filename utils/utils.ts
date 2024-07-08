export function getRandomDimensions(min: number, max: number): { width: number; height: number } {
    const width = Math.floor(Math.random() * (max - min + 1) + min);
    const height = Math.floor(Math.random() * (max - min + 1) + min);
    return { width, height };
  }
  
  export const animations = [
    'animate-spin',
    // 'animate-bounce',
    // 'animate-circle',
    // 'animate-snake',
    // 'animate-fade',
    // 'animate-pulse',
    // 'animate-slide',
    // 'animate-flip',
    // 'animate-wobble',
    // 'animate-wander1',
    // 'animate-wander2',
    // 'animate-wander3',
    // 'animate-wander4',
    // 'animate-wander5',

  ];

  export const blendModes = [
    'mix-blend-multiply',
    'mix-blend-screen',
    'mix-blend-overlay',
    'mix-blend-dodge',
    'mix-blend-burn',
    'mix-blend-hard-light',
    'mix-blend-soft-light',
    'mix-blend-difference',
    'mix-blend-saturation',
    'mix-blend-color',
    'mix-blend-luminosity',
  ]

  export function getRandomAnimation() {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }