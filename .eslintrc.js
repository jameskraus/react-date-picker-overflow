module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: ['react', 'flowtype'],
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.spec.js', '*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
}
