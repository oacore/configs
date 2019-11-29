module.exports = {
  extends: ['airbnb', '@oacore/eslint-config-base', 'prettier/react'],

  rules: {
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['children', 'class', 'className', 'id', 'tag'],
      },
    ],
  },
}
