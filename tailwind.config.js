import { Urbanist } from "next/font/google";


export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
      },
    },
  },
  plugins: [],
};
