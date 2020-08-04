const path = require('path')
const fs = require('fs')

const createPackageJson = () => {
    try {
        // Create new Production package.json
        const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'package.json'), 'utf-8'))
        // Remove dev dependancies
        delete packageJson.devDependencies;
        // Change Entry
        packageJson.main = "app.js"
        // Remove unecessary scripts
        packageJson.scripts = {
            start : "node app"
        }

        // Create Prod folder if it doesn't exist
        if(!fs.existsSync(path.join(__dirname, '../', 'prod'))) fs.mkdirSync(path.join(__dirname, '../', 'prod'));

        // Add package.json to prod folder
        fs.appendFileSync(path.join(__dirname, '../', 'prod', 'package.json'), JSON.stringify(packageJson));

        console.log('Created package.json.. App ready for deployment')
        console.log('DEPENDANCIES not installed...')

        
    } catch (error) {
        console.log('Error: '+error)   
    }

}
createPackageJson()