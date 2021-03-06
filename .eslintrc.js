module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module"
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  rules: {
    "semi": [ 2, "always" ],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "never"],
  },
  globals: {
    "System": true,
    "Promise": true,
  },
};
