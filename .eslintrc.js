module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': ['error', { allow: ['getters'] }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
