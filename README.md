# React Starter Kit
A starter kit for a new React app--includes React scaffolding, an Express server, Babel transpiling, and Webpack packaging.

## Features
- Write ES6+ eveywhere.
- Bundling and injection of resources into views.

React scaffolding:
- includes two page components and header/footer components to get you going.
- includes React Router scaffolding.

Development Mode:
- watches all source files (HTML, CSS, JavaScript) and re-builds your project any time you save a change.
- produces source maps for JavaScript and CSS.
- server-side logging via [Morgan](https://github.com/expressjs/morgan).
- lints JavaScript code against [Airbnb rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Production Mode:
- minifies HTML, CSS, and JavaScript.
- enables cache-busting for linked resources.

## NPM Scripts
There are only 3 npm scripts that need to be run at the terminal:
- ``npm run start:dev``: builds the development version of your project into the ``dist`` folder.
- ``npm start``: builds the production version of your project into the ``dist`` folder.
- ``npm test``: *to be added*.