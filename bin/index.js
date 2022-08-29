const yargs = require("yargs");
const typescriptMain = require('../src/typescript');
const javascriptMain = require('../src/javascript');

const options = yargs
    .usage("Usage: -l <language>")
    .option(
        "l",   
        {
            alias: "language",
            describe: "language",
            type: "javascript or typescript",
            demandOption: true
        }
    )
    .usage("Usage: -n <name>")
    .option(
        "n",
        {
            alias: "name",
            describe: "Project Name",
            type: "The project name",
            demandOption: true
        }
    )
    .usage("Usage: -p <path>")
    .option(
        "p",   
        {
            alias: "path",
            describe: "path",
            type: "The path where the project will be created",
            demandOption: true
        }
    )
    .argv;

if (options.language === 'javascript') {
    javascriptMain(options);
} else if (options.language === 'typescript') {
    typescriptMain(options);
} else {
    console.log('Language chosen is incorrect');
}
