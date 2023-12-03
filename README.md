Dev comments in bottom
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Dev comments
 ### List of dependencies:
 @emotion/react@11.11.1
├── @emotion/styled@11.11.0
├── @mui/icons-material@5.14.0
├── @mui/material@5.14.0
├── @reduxjs/toolkit@1.9.5
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── firebase@10.6.0
├── localforage@1.10.0
├── match-sorter@6.3.1
├── react-dom@18.2.0
├── react-redux@8.1.1
├── react-router-dom@6.14.1
├── react-scripts@5.0.1
├── react@18.2.0
├── sort-by@1.2.0
├── uuid@9.0.0
└── web-vitals@2.1.4

To install all of them use next command: npm install @emotion/react@11.11.1 @emotion/styled@11.11.0 @mui/icons-material@5.14.0 @mui/material@5.14.0 @reduxjs/toolkit@1.9.5 @testing-library/jest-dom@5.16.5 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0 firebase@10.6.0 localforage@1.10.0 match-sorter@6.3.1 react-dom@18.2.0 react-redux@8.1.1 react-router-dom@6.14.1 react-scripts@5.0.1 react@18.2.0 sort-by@1.2.0 uuid@9.0.0 web-vitals@2.1.4

### How to run
 - Install dependencies
 - use next command: npm run

### Link to vercel deployed project: https://test-todo-jet.vercel.app/
### Link to github: https://github.com/SilverSol-official/Test_todo

### How it works?

When the program starts, it takes user's device screen width and redirect acording to it in apropriate version. Then it calls async thunk fetchAllTasks() to get tasks from api. Extra reducers from (apiTasks) handle fetch method, in case any error occurs it takes data from localStorage, and notify user. In task list conponent you can see all tasks and pages we have, there we can delete task or we can sort them by their status. Every task component formaly is a button which redirects user by url which has id param in it which uses in TaskWindow component to represent informaion about task. 

### Stack of technologies:

 - HTML
 - CSS
 - JS 
 - React
 - Redux-toolkit
 - MUI
 - Redux-router
 - RestApi
