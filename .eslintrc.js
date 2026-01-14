module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-import",
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: false, ignoreProperties: true },
    ],
  },
};
