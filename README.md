## Asteroids hub for New Things Co.

I decided to do a create react app with: React, recon, typescript, sass, i18n localization and basic promises for fetching data.

I also tried to add a nice animation and a space 'feeling' by adding a few ReactGlobe instances to the screen.

Data is fetched from NASA REST API (NeoWs https://api.nasa.gov/). The page loads data between 2017-01-01 and 2018-12-21 dates and
largest asteroids by month are show (after trying this it generated 104 calls/page (1/week) refresh to NASA API, so after 10 page refresh 1000
call limit was met. So I decided to fetch only the first week of the month = 24 calls/page refresh).

An asteroid can be selected from the list, and the size of the asteroid on the screen should change (sizes are generated by random).

I used around 10 hours to do the assignment but got a little bit carried away in 'trying out new things'.
As Recoil and NASA api were a little bit more complicated than expected. 

Known issues:
- Recoil gives a warning (Cannot update a component ""Batcher"...) while fetching data. selectors are not used exactly the right way
- ReactGlobe library gives an error (THREE.Object3D.add...) while using a local texture file (url would work fine)
- Api key is in a config file, should be given some other way
- Tests are missing (because of time and also because ReactGlobe npm package does not compile so jest tests fail on render)
- Page is missing the first part of the assignment to show: 'The asteroid that passed the closest to Earth between 19th December 2015 and
26th December 2015 and show its characteristics.'

Future improvements:
- show api call limit
- add data to local storage after fetching so future refresh use already fetched data
- add a 'hub' beside asteroid to show more info about selected asteroid
- do the API communication lazy by using RxJS/BaconJS instead of using basic promises 
(didn't know how RxJS would have worked with recoil so I decided to use promises)
- add finnish language support
- BEM pattern for classes would have been nice
- add react router (recoil handled loading screen and there was only one page so decided to drop router for now)
- do a proper ui for smaller screens (different layout maybe)

![Asteroids hub](src/img/screenshot.png?raw=true "Asteroids hub")


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).