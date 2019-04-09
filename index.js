module.exports = {
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': ['error', {'code': 80}],
    'no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
    'object-curly-newline': ['error', {
      'ObjectExpression': {'multiline': true},
      'ObjectPattern': {'multiline': true}
    }],
    'object-curly-spacing': ['error', 'never'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'allow',
        afterOpening: 'never',
        beforeClosing: 'allow'
      }
    ],
    semi: ['error', 'never']
  }
}
