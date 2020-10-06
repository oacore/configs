module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/css',
    'stylelint-config-css-modules',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['extend'] }],
    'max-nesting-depth': [
      3,
      { ignore: ['blockless-at-rules', 'pseudo-classes'] },
    ],
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],
    'string-quotes': 'single',
  },
}
