const fs = require('fs');

function createConfigDir(path) {
    const dir = path + '/src/config/';
    console.log('Creating Config...');
    fs.mkdirSync(dir);
}

module.exports = createConfigDir;