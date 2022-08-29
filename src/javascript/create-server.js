const fs = require("fs");

function createServer(path) {
    const dir = path + '/src/server.js'
    console.log('Creating server...');
    fs.writeFileSync(dir, getServerContent());
}

function getServerContent() {
  return `
        const express = require('express');
        const dotenv = require('dotenv');
        const bodyParser = require('body-parser');
        const resouceExampleRoutes = require('./core/routes');

        dotenv.config();

        const cors = require('cors');
        const app = express();

        app.use(bodyParser.json());
        app.use(cors());

        app.use(resouceExampleRoutes);

        app.listen(process.env.PORT, () => {
            // eslint-disable-next-line no-console
            return console.log(` + '`' + 'Server is listening on ${process.env.PORT}' + '`'  + `);
        });
    `;
}

module.exports = createServer;
