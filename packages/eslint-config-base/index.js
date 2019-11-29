module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    curly: ['error', 'multi-or-nest'],
    eqeqeq: ['error', 'smart'],
    'function-call-argument-newline': ['error', 'consistent'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'new-parens': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
  },
  reportUnusedDisableDirectives: true,
}
