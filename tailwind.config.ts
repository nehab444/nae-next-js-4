// Import the Config type from the "tailwindcss" module
import type { Config } from "tailwindcss";

// Define a variable named "config" of type Config
const config: Config = {
  // Specify the files where Tailwind CSS should look for styles to process
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Customize the default theme by extending it
  theme: {
    extend: {
      // Define custom background image gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  // Specify any additional plugins to use (none in this case)
  plugins: [],
};

// Export the config variable as the default export of this module
export default config;
