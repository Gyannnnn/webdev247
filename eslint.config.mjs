// next.config.mjs
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
};

import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/*', '.next/*'],
  },
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        alert: 'readonly',
        process:'readonly'
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
