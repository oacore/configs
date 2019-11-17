const baseConfig = require('@oacore/eslint-config-base')

module.exports = {
  ...baseConfig,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    ...baseConfig.rules,
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': 'error',
    'react/destructuring-assignment': 'off',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['class', 'className', 'id', 'children', 'tag'],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  reportUnusedDisableDirectives: true,
}
