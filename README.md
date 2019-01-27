# ReadMe Karen LIENEMANN

## Démarrage de l’application
Ouvrir un terminal depuis la racine du projet puis entrer la commande `npm start`

## Point d’entrée de mon code 
`src/index.js`

## Choix de développement
La base de l’application a été générée grâce à Create-React-App.
J’ai créé un fichier `ServiceDb.js` afin d’aller récupérer le résultat d’une requête vers l’API movie db. L’objectif était de récupérer le résultat de la requête dans un fichier JSON et de l’exploiter ensuite. Pour cela, j’avais besoin d’utiliser le module node « file-system ». Comme j’ai créé mon application grâce à Create-React-App, mon serveur n’est pas en node, je n’ai donc pas accès au module « file-system ». Je n’ai pas trouvé d’équivalent à « file–system » que je pourrais exploiter. 
J’ai donc essayé de migrer mon application en créant un serveur node ; donc en construisant le projet sans utiliser Create-React-App. Je me suis heurté à un nouveau soucis : la syntaxe es6 n’est pas reconnue par mon projet. J’ai essayé d’utiliser des modules complémentaires comme Babel. Malgré plusieurs tentatives, je n’ai pas réussi à résoudre le problème. J’ai donc décidé de continuer avec mon application basée sur Create-React-App, en codant en dur les résultats bruts de requêtes tels qu’ils m’auraient été transmis par mon `ServiceDb.js`.

-----

# Copyright Create-React-App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
