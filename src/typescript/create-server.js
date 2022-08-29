const fs = require("fs");

function createServer(path) {
    const dir = path + '/src/server.ts'
    console.log('Creating server...');
    fs.writeFileSync(dir, getServerContent());
}

function getServerContent() {
  return `
        import express from 'express';
        import * as dotenv from 'dotenv';
        import * as bodyParser from 'body-parser';
        import resouceExampleRoutes from './core/routes';

        dotenv.config();

        import cors = require('cors');
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
