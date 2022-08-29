const fs = require("fs");

function createESLintIgnore(path) {
  const dir = path + "/.eslintignore";
  console.log("Creating eslintignore...");
  fs.writeFileSync(dir, getESLintignoreContent());
}

function getESLintignoreContent() {
  return `
    node_modules
    dist
  `;
}

module.exports = createESLintIgnore;