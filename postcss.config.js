module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    // Disable postcss-calc or set it up with specific options
    'postcss-calc': false, // or { preserve: true }
  },
};
