const path = require("path");
const fs = require("fs");

const createConfigVars =  () => {
  try {
    // Copy old config but change NODE_ENV to Development
    const devConfig =  fs
      .readFileSync(path.join(__dirname, "../", "src", "config", "config.env"), "utf-8")
        .replace("NODE_ENV=development", "NODE_ENV=production");

    // Create config folder if it doesn't exist
    if(!fs.existsSync(path.join(__dirname, '../', 'prod', 'config'))) fs.mkdirSync(path.join(__dirname, '../', 'prod', 'config'));
    
    // Create new config file
    fs.appendFileSync(path.join(__dirname, "../", "prod", "config", "config.env"), devConfig);


    console.log("config file written");
  } catch (error) {
    console.log("ERROR: " + error);
  }
};

createConfigVars();
