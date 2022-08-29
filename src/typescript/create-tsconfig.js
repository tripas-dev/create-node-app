const fs = require("fs");

function createTSConfig(path) {
  const dir = path + "/tsconfig.json";
  console.log("Creating tsconfig...");
  fs.writeFileSync(dir, getTSConfigContent());
}

function getTSConfigContent() {
  return `
    {
        "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "target": "es6",
            "allowJs": true,
            "strict": true,
            "moduleResolution": "node",
            "sourceMap": true,
            "outDir": "dist",
            "baseUrl": "src",
            "paths": {
            "@/*": ["*"]
            },    
        },
        "lib": ["es2015"],
    }
  `;
}

module.exports = createTSConfig;
