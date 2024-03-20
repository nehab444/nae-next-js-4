///exports a JS object, which contains configuration for PostCSS, from a file
module.exports = {
  ///holds inner objects of plugins
  plugins: {
    ///configures default for tailwind css
    tailwindcss: {},
    ///configures default for autoprefixer which ensures compatibilty for different browsers
    autoprefixer: {},
  },
};
