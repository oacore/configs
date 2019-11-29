module.exports = {
  extends: ['airbnb', '@oacore/eslint-config-base', 'prettier/react'],

  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['children', 'class', 'className', 'id', 'tag'],
      },
    ],
    'react/state-in-constructor': ['error', 'never'],
  },
}
