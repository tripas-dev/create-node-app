const fs = require("fs");

function createRoutesClass(path) {
  const dir = path + "/src/core/routes.ts";
  console.log("Creating Routes Class...");
  fs.writeFileSync(dir, getRoutesClassContent());
}

function getRoutesClassContent() {
    return `
        import resouceExampleRoutes from './resouce.folder/resouce.routes';

        export default (): Record<string, unknown> => {
            return {
                resouceExampleRoutes: () => {
                    return resouceExampleRoutes;
                }
            };
        };
    `;
}

module.exports = createRoutesClass;
