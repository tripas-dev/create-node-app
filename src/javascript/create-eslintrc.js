const fs = require("fs");

function createESLintrc(path) {
  const dir = path + "/.eslintrc";
  console.log("Creating eslint...");
  fs.writeFileSync(dir, getESLintContent());
}

function getESLintContent() {
  return `
    {
      "env": {
        "browser": true,
        "es6": true
      },
      "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module"
      },
        "plugins": [
          "prettier",
          "security"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:security/recommended",
        "prettier"
      ],
      "rules": {
          "array-bracket-spacing": [2, "always"],
          "no-extra-parens": 2,
          "no-var": 2,
          "object-curly-spacing": [2, "always"],
          "prefer-template": 2,
          "quote-props": 0,
          "no-unused-vars": 2,
          "quotes": [ 2, "single" ],
          "template-curly-spacing": [ 0, "never" ],
          "prefer-const": 2,
          "constructor-super": 2,
          "no-console": 2,
          "indent": [ 2, "tab" ]
      }
    }
  `;
}

module.exports = createESLintrc;
