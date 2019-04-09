# eslint-config-leanpanda

An ESLint configuration for Lean Panda projects.

# Usage

Create .eslintrc.js

```js
module.exports = {
  extends: 'leanpanda'
}
```

Modify package.json

```json
  "scripts": {
    ...
    "lint:prod": "eslint .",
    ...
  },
```

# Development Mode

For a more relaxed development experience, create a development
mode config.

.eslintrc-dev.js:

```js
module.exports = {
  extends: './.eslintrc.js',
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn'
  }
}
```

Modify package.json

```json
  "scripts": {
    ...
    "lint:dev": "eslint -c .eslintrc-dev.js .",
    ...
  },
```
