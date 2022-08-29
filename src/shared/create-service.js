const fs = require('fs');

function createServiceDir(path) {
    const dir = path + '/src/service/';
    console.log('Creating Services...');
    fs.mkdirSync(dir);
}

module.exports = createServiceDir;