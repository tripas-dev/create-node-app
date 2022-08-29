const fs = require('fs');

function createHelperDir(path) {
    const dir = path + '/src/helper/';
    console.log('Creating Helpers...');
    fs.mkdirSync(dir);
}

module.exports = createHelperDir;