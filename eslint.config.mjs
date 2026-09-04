import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {ignores: ["dist/**", "node_modules/**"]},
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: { ...globals.browser, ...globals.node } }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["tests/unit/**/*.spec.js"],
    languageOptions: { globals: { ...globals.jest } },
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        expect: "readonly",
      },
    },
  },
];