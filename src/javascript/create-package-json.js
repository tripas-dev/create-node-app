const fs = require("fs");

function createPackageJson(path, projectName) {
  const dir = path + "/package.json";
  console.log("Creating package.json...");
  fs.writeFileSync(dir, getPackageJsonContent(projectName));
}

function getPackageJsonContent(projectName) {
  return `
    {
        "name": "${projectName}",
        "version": "1.0.0",
        "description": "",
        "main": "src/server.js",
        "scripts": {
            "start": "node src/server.js",
            "test": "jest --no-cache",
            "test-watch": "jest --no-cache --watchAll",
            "lint": "eslint . --ext .ts",
            "prettier-format": "prettier --config .prettierrc 'src/**/*.js' --write",
            "prettier-watch": "onchange 'src/**/*.js' -- prettier --write {{changed}}"
        },
        "keywords": [
            "Node",
            "Express",
            "Jest",
            "Docker",
            "Prettier",
            "Husky"
        ],
        "devDependencies": {
            "eslint": "^7.12.1",
            "eslint-config-prettier": "^6.15.0",
            "eslint-plugin-prettier": "^3.1.4",
            "eslint-plugin-security": "^1.4.0",
            "husky": "^4.3.0",
            "jest": "^26.6.0",
            "onchange": "^7.1.0",
            "prettier": "^2.1.2"
        },
        "dependencies": {
            "body-parser": "^1.19.0",
            "cors": "^2.8.5",
            "dotenv": "^8.2.0",
            "express": "^4.17.1"
        },
        "husky": {
            "hooks": {
                "pre-commit": "npm run prettier-format && npm run lint",
                "pre-push": "npm test"
            }
        },
        "license": "MIT",
        "author": ""
    }
`;
}

module.exports = createPackageJson;
