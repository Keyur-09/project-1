import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node   // 👈 browser ki jagah node
    },
    rules: {
      semi: ["error", "always"]
    }
  },
  js.configs.recommended
];
