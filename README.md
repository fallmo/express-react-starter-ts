# Express + React Starter (Typescript)

Workspace setup for CRA and Express in typescript.

## Usage

### To create production app
```
npm run build
```
Code : npm run build-server && npm run build-react && npm run setup-config && npm run setup-package

(This will take care of everything and create a deployment ready app in '/prod' folder).

___
___
### To run express server
```
npm run dev 
```
Code : nodemon src/app.ts
___
___

### To run react dev server
```
npm run react
```
Code : npm run start --prefix ./react
___
___

### To run both simultaneously
```
npm run both
```
Code : concurrently \\"npm run dev\\" \\"npm run react\\"
___
___

### To build out server
```
npm run build-server
```
Code : tsc -p . (creates 'prod' folder with compiles server files)
___
___

### To build out react
```
npm run build-react
```
Code : npm run build --prefix ./react 

(build script in react app: react-scripts build && mv build ../prod/public)

This moves react build files into 'prod/public' folder.
___
___
### To setup production environment variables
```
npm run setup-config
```
Code : node setup/config (copies development 'config.env' and sets NODE_ENV to 'production')

As a result express server will automatically serve the public folder, which contains react build files.

___
____

### To add package.json to prod folder
```
npm run setup-package
```
Code : node setup/package (creates a production package.json file for prod folder; excluding devDependancies and unnecessary scripts)




