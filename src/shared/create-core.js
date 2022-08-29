const fs = require('fs');

function createCoreDir(path) {
    const dir = path + '/src/core/';
    console.log('Creating Core...');
    fs.mkdirSync(dir);
}

module.exports = createCoreDir;