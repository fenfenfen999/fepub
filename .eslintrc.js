module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 'oclif',
    // 'oclif-typescript',
  ],
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  // },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    // 'no-undef': 'error',
  },
};
