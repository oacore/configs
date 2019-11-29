module.exports = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
}
