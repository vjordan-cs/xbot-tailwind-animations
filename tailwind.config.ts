import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      animation: {
        spin: "spin 50s infinite",
        bounce: "bounce 50s infinite",
        fade: "fade 50s infinite",
        pulse: "pulse 50s infinite",
        slide: "slide 50s infinite",
        flip: "flip 50s infinite",
        wobble: "wobble 50s infinite",
        circle: "circle 50s infinite",
        snake: "snake 50s infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-200%)" },
          "50%": { transform: "translateY(0%)" },
          "75%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        circle: {
          "0%": { transform: "rotate(0deg) translateX(300px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(300px) rotate(-360deg)" },
        },
        snake: {
          "0%": { transform: "translate(0vw, 0vh)" },
          "5%": { transform: "translate(5vw, 10vh)" },
          "10%": { transform: "translate(10vw, 20vh)" },
          "15%": { transform: "translate(15vw, 10vh)" },
          "20%": { transform: "translate(20vw, 0vh)" },
          "25%": { transform: "translate(25vw, -10vh)" },
          "30%": { transform: "translate(30vw, -20vh)" },
          "35%": { transform: "translate(35vw, -10vh)" },
          "40%": { transform: "translate(40vw, 0vh)" },
          "45%": { transform: "translate(45vw, 10vh)" },
          "50%": { transform: "translate(50vw, 20vh)" },
          "55%": { transform: "translate(55vw, 10vh)" },
          "60%": { transform: "translate(60vw, 0vh)" },
          "65%": { transform: "translate(65vw, -10vh)" },
          "70%": { transform: "translate(70vw, -20vh)" },
          "75%": { transform: "translate(75vw, -10vh)" },
          "80%": { transform: "translate(80vw, 0vh)" },
          "85%": { transform: "translate(85vw, 10vh)" },
          "90%": { transform: "translate(90vw, 20vh)" },
          "95%": { transform: "translate(95vw, 10vh)" },
          "100%": { transform: "translate(100vw, 0vh)" },
        },
        
        
        
        
        
        
          
        fade: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0.5" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0.5" },
          "100%": { opacity: "0" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.2)" },
          "75%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(25%)" },
          "50%": { transform: "translateX(50%)" },
          "75%": { transform: "translateX(75%)" },
          "100%": { transform: "translateX(100%)" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "25%": { transform: "rotateY(90deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "75%": { transform: "rotateY(270deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        wobble: {
          "0%": { transform: "translateX(0%) rotate(0deg)" },
          "25%": { transform: "translateX(5%) rotate(5deg)" },
          "50%": { transform: "translateX(-5%) rotate(-5deg)" },
          "75%": { transform: "translateX(5%) rotate(5deg)" },
          "100%": { transform: "translateX(0%) rotate(0deg)" },
        },
        wander1: {
          "0%": { transform: "translate(0%, 0%)" },
          "20%": { transform: "translate(10%, -10%)" },
          "40%": { transform: "translate(-10%, 20%)" },
          "60%": { transform: "translate(15%, 10%)" },
          "80%": { transform: "translate(-20%, -20%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        wander2: {
          "0%": { transform: "translate(0%, 0%)" },
          "10%": { transform: "translate(5%, -5%)" },
          "20%": { transform: "translate(-5%, 10%)" },
          "30%": { transform: "translate(10%, 5%)" },
          "40%": { transform: "translate(-10%, -10%)" },
          "50%": { transform: "translate(15%, 0%)" },
          "60%": { transform: "translate(-15%, 10%)" },
          "70%": { transform: "translate(20%, -5%)" },
          "80%": { transform: "translate(-20%, 15%)" },
          "90%": { transform: "translate(25%, -10%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        wander3: {
          "0%": { transform: "translate(0%, 0%)" },
          "15%": { transform: "translate(20%, 5%)" },
          "30%": { transform: "translate(-10%, 15%)" },
          "45%": { transform: "translate(15%, -10%)" },
          "60%": { transform: "translate(-20%, 20%)" },
          "75%": { transform: "translate(10%, -15%)" },
          "90%": { transform: "translate(-5%, 10%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        wander4: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(30%, -10%)" },
          "50%": { transform: "translate(-15%, 25%)" },
          "75%": { transform: "translate(20%, 10%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        wander5: {
          "0%": { transform: "translate(0%, 0%)" },
          "20%": { transform: "translate(-5%, 10%)" },
          "40%": { transform: "translate(15%, -5%)" },
          "60%": { transform: "translate(-10%, 20%)" },
          "80%": { transform: "translate(5%, -15%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
