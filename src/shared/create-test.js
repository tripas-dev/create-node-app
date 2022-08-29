const fs = require('fs');

function createTestDir(path) {
    const dir = path + '/src/test';
    console.log('Creating test...');
    fs.mkdirSync(dir);
}

module.exports = createTestDir;