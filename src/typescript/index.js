const fs = require("fs");
const shared = require("../shared");
const createESLintrc = require("./create-eslintrc");
const createJest = require("./create-jest");
const createPackageJson = require("./create-package-json");
const createResultClass = require("./create-result");
const createServer = require("./create-server");
const createTSConfig = require("./create-tsconfig");
const createTSLint = require("./create-tslint");
const createRoutesClass = require("./create-routes");

function main(options) {
  const dir = options.path + "/" + options.name;
  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
  }

  fs.mkdirSync(dir);
  shared(dir);
  createESLintrc(dir);
  createJest(dir);
  createTSConfig(dir);
  createTSLint(dir);
  createPackageJson(dir, options.name);
  createServer(dir);
  createResultClass(dir);
  createRoutesClass(dir);
}

module.exports = main;
