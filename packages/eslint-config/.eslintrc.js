module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'import-helpers'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 0,
    'implicit-arrow-linebreak': 'off',
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/extensions': [
      'error',
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          ['/^react$/'],
          'module',
          ['parent', 'sibling', 'index'],
          ['/^~/']
        ],
        'alphabetize': { 'order': 'ignore', 'ignoreCase': true }
      }
    ]
  }
}
