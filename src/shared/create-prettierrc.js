const fs = require("fs");

function createPrettierrc(path) {
  const dir = path + "/.prettierrc";
  console.log("Creating prettierrc...");
  fs.writeFileSync(dir, getPrettierrcContent());
}

function getPrettierrcContent() {
  return `
    {
      "semi": true,
      "trailingComma": "none",
      "singleQuote": true,
      "printWidth": 80,
      "useTabs": true
    }
  `;
}

module.exports = createPrettierrc;
