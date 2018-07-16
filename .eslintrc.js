module.exports = {
  root: true,
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
  },
};
