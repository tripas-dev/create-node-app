const fs = require("fs");

function createGitIgnore(path) {
  const dir = path + "/.gitignore";
  console.log("Creating gitignore...");
  fs.writeFileSync(dir, getGitIgnoreContent());
}

function getGitIgnoreContent() {
  return `
    node_modules
    dist
    .env
  `;
}

module.exports = createGitIgnore;