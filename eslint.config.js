const tseslint = require('typescript-eslint')

module.exports = tseslint.config(
  { ignores: ['dist/**', '__coverage__/**'] },
  tseslint.configs.recommended
)
