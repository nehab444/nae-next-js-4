{
  // Project name
  "name": "nextjs4",

  // Project version
  "version": "0.1.0",

  // Private project (not intended for publishing)
  "private": true,

  // NPM scripts for development, building, starting, and linting
  "scripts": {
    "dev": "next dev",     // Run the development server
    "build": "next build", // Build the project for production
    "start": "next start", // Start the production server
    "lint": "next lint"    // Lint the project files
  },

  // Dependencies required for the project to run
  "dependencies": {
    "react": "^18",        // React library
    "react-dom": "^18",    // React DOM library
    "next": "14.1.3"       // Next.js framework
  },

  // Development dependencies required for development purposes
  "devDependencies": {
    "typescript": "^5",            // TypeScript language support
    "@types/node": "^20",          // TypeScript types for Node.js
    "@types/react": "^18",         // TypeScript types for React
    "@types/react-dom": "^18",     // TypeScript types for React DOM
    "autoprefixer": "^10.0.1",     // PostCSS plugin for autoprefixing CSS
    "postcss": "^8",               // Tool for transforming CSS with JavaScript plugins
    "tailwindcss": "^3.3.0",       // Utility-first CSS framework for styling
    "eslint": "^8",                // JavaScript and TypeScript linter
    "eslint-config-next": "14.1.3" // ESLint configuration for Next.js projects
  }
}
