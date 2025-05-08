# Learning React

# Parcel

- Hot Module Replacement (HMR)
- File Watcher Algorithm - C++
- Bundling
- Minify Code
- Cleaning our code
- Dev and production build
- Igniting Our App! ( Namaste-React ) 8
- Super fast build algorithm
- Image Optimization
- Caching while development
- Compression
- Compatible with older browser versions
- Https on dev
- Image Optimization
- Port No
- Consistency Hashing Algorithm
- Zero Config
- Tree Shaking

# Types of Testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing

# Setting up Testing in our app

- Installed React Testing Library (npm i -D @testing-library/react)
- Installed jest (npm i -D jest)
- Installed Babel dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure Babel
<!-- babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
}; -->
- Configure Parcel to disable Babel transpilation
<!-- .parcelrc:
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
} -->

- Jest Configuration : npx jest --init
- Install jsdom library : npm i --save-dev jest-environment-jsdom
