const fs = require('fs');

function createEnvironmentDir(path) {
    const dir = path + '/environment';
    const developmentFile = dir + '/development.env.dist';
    const stagingFile = dir + '/staging.env.dist';
    const productionFile = dir + '/production.env.dist';
    console.log('Creating Environment...');
    fs.mkdirSync(dir);
    fs.writeFileSync(developmentFile, environmentVariables());
    fs.writeFileSync(stagingFile, environmentVariables());
    fs.writeFileSync(productionFile, environmentVariables());
}

function environmentVariables() {
    return 'PORT=${PORT}';
}

module.exports = createEnvironmentDir;