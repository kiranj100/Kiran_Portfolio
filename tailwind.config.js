/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/HomeBg.jpg')",
        about: "url('/src/assets/about.jpg')",
        contact: "url('/src/assets/contact.jpg')",
        project: "url('/src/assets/project.jpg')",
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
