/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-poppins-sans)", ...fontFamily.sans],
    },
    colors: {
      primary: "#B90101",
      muted: "#E0E0E0",
      textGray: "#828282",
    }
  },
};
export const plugins = [];

