const fs = require("fs");

function createJest(path) {
  const dir = path + "/jest.config.ts";
  console.log("Creating jest...");
  fs.writeFileSync(dir, getJestContent());
}

function getJestContent() {
  return `
    module.exports = {
        verbose: true,
        roots: [ '<rootDir>/src' ],
        testEnvironment: 'node',
        transform: {
            '.+\\.ts$': 'ts-jest'
        },
        moduleNameMapper: {
            '@/(.*)': '<rootDir>/src/$1'
        }
    };
    `;
}

module.exports = createJest;
