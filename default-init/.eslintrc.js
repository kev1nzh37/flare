module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: ['standard-with-typescript'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/naming-convention': 0,
        'multiline-ternary': 0,
        'no-void': 0
      }
    }
  ]
}
