module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    semi: ['error', 'never'],
    'react-native/no-inline-styles': 0,
    'react-native/sort-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    "react/no-unstable-nested-components": [
      'off' | 'warn' | 'error',
      {
        'allowAsProps': true | false,
        'customValidators': [],
        'propNamePattern': string,
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    __DEV__: 'readonly',
    fetch: 'readonly',
    FormData: 'readonly',
    Blob: 'readonly',
    FileReader: 'readonly',
    XMLHttpRequest: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  ignorePatterns: ['node_modules/', 'babel.config.js', 'metro.config.js', 'jest.setup.js'],
}
