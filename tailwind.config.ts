import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
        },
      },
      colors: {
        slateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        tomato: "hsl(4, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(231, 7%, 60%)",
      },
      // backgroundImage: {
      //   mobile: "url('/src/public/illustration-sign-up-mobile.svg')",
      //   desktop: "url('.src/public/illustration-sign-up-desktop.svg')",
      // }
    },
  },
  plugins: [],
};
export default config;
