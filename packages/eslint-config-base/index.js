module.exports = {
  extends: ['airbnb-base', 'prettier'],

  reportUnusedDisableDirectives: true,

  rules: {
    curly: ['error', 'multi-or-nest'],
    eqeqeq: ['error', 'smart'],
    'function-call-argument-newline': ['error', 'consistent'],
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
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: false }],
    'new-parens': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': 'error',
  },

  plugins: ['prettier'],
}
