const fs = require('fs');

function createSRCDir(path) {
    const dir = path + '/src';
    console.log('Creating src...');
    fs.mkdirSync(dir);
}

module.exports = createSRCDir;