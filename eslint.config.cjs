const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const typescript = require("typescript-eslint");
const tsParser = require("@typescript-eslint/parser");
const html = require("@html-eslint/eslint-plugin");
const htmlparser = require("@html-eslint/parser");
const solid = require("eslint-plugin-solid/configs/recommended");
const yaml = require("eslint-plugin-yml");
const jsonc = require("eslint-plugin-jsonc");

const config = [
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error",
    },
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: [
      "**/*.jsx",
      "**/*.tsx",
      "**/*.ts",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
      "./.*.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ...js.configs.recommended,
    ...jsdoc.configs["flat/recommended"],
  },
  {
    name: "ESLint for TypeScript",
    files: ["**/*.ts"],
    plugins: {
      ts: typescript,
    },
    ...typescript.configs["flat/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      parser: tsParser,
    },
    settings: {
      typescript: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
    },
    languageOptions: {
      parser: htmlparser,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": "error",
    },
  },
  {
    ignores: ["**/dist/**/*", "**/build/**/*"],
    files: ["**/*.jsx", "**/*.tsx"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...yaml.configs["flat/recommended"],
  ...jsonc.configs["flat/recommended-with-json"],
];

module.exports = config;
