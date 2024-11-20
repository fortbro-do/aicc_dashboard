/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      writingMode: {
        "vertical-rl": "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      gridTemplateRows: {
        "half-and-full": ".7fr 1fr",
      },
    },
  },
  plugins: [],
};
