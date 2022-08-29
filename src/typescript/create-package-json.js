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
        "main": "dist/server.js",
        "scripts": {
            "start": "tsc && node dist/server.js",
            "test": "jest --no-cache",
            "test-watch": "jest --no-cache --watchAll",
            "lint": "eslint . --ext .ts",
            "prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write",
            "prettier-watch": "onchange 'src/**/*.ts' -- prettier --write {{changed}}"
        },
        "keywords": [
            "Node",
            "Express",
            "Jest",
            "Typescript",
            "Docker",
            "Prettier",
            "Husky"
        ],
        "devDependencies": {
            "@types/cors": "^2.8.8",
            "@types/express": "^4.17.8",
            "@types/jest": "^26.0.15",
            "@types/node": "^14.14.0",
            "@typescript-eslint/eslint-plugin": "^4.6.1",
            "@typescript-eslint/parser": "^4.6.1",
            "eslint": "^7.12.1",
            "eslint-config-prettier": "^6.15.0",
            "eslint-plugin-prettier": "^3.1.4",
            "eslint-plugin-security": "^1.4.0",
            "husky": "^4.3.0",
            "jest": "^26.6.0",
            "onchange": "^7.1.0",
            "prettier": "^2.1.2",
            "ts-jest": "^26.4.1",
            "ts-node": "^9.0.0",
            "tslint": "^6.1.3",
            "typescript": "^4.0.3"
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
