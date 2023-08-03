module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    camelcase: 'off',
    indent: ['error', 2],
    semi: ['error', 'never'],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'linebreak-style': 0,
    'react/jsx-tag-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-newline': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-undef': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true
    }]
  }
}
