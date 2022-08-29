const createConfigDir = require("./create-config");
const createEnvironmentDir = require("./create-environment");
const createHelperDir = require("./create-helper");
const createSRCDir = require("./create-src");
const createServiceDir = require("./create-service");
const createTestDir = require("./create-test");
const createESLintIgnore = require("./create-eslintignore");
const createGitIgnore = require("./create-gitignore");
const createPrettierrc = require("./create-prettierrc");
const createCoreDir = require("./create-core");

function main(path) {
  createSRCDir(path);
  createEnvironmentDir(path);
  createCoreDir(path);
  createConfigDir(path);
  createHelperDir(path);
  createServiceDir(path);
  createTestDir(path);
  createESLintIgnore(path);
  createGitIgnore(path);
  createPrettierrc(path);
}

module.exports = main;
