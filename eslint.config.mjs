import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-inferrable-types": [
        "error",
        { ignoreParameters: false, ignoreProperties: true },
      ],
    },
  },
  { ignores: ["dist/", "test_coverage_dir/", "node_modules/"] },
);
