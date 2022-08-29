const fs = require("fs");
const shared = require("../shared");
const createPackageJson = require("./create-package-json");
const createESLintrc = require("./create-eslintrc");
const createJest = require("./create-jest");
const createServer = require("./create-server");

function main(options) {
  const dir = options.path + "/" + options.name;
  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
  }

  fs.mkdirSync(dir);
  shared(dir);
  createESLintrc(dir);
  createJest(dir);
  createPackageJson(dir, options.name);
  createServer(dir);
}

module.exports = main;
