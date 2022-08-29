const fs = require("fs");

function createTSLint(path) {
  const dir = path + "/tslint.json";
  console.log("Creating tslint...");
  fs.writeFileSync(dir, getTSLintContent());
}

function getTSLintContent() {
  return `
    {
        "defaultSeverity": "error",
        "extends": ["tslint:recommended"],
        "jsRules": {},
        "rules": {
        "no-console": false,
        "no-var-requires": true,
        "typedef": [
            true,
            "call-signature",
            "parameter",
            "member-variable-declaration",
            "arrow-parameter"
        ]
        },
        "rulesDirectory": []
    }  
  `;
}

module.exports = createTSLint;
