const fs = require("fs");

function createJest(path) {
  const dir = path + "/jest.config.js";
  console.log("Creating jest...");
  fs.writeFileSync(dir, getJestContent());
}

function getJestContent() {
  return `
    module.exports = {
      verbose: true,
      testEnvironment: 'node',
    };
  `;
}

module.exports = createJest;
