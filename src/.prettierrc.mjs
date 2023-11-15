// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  printWidth: 100,
  jsxSingleQuote: true,
  singleQuote: true,
  tabWidth: 4,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
