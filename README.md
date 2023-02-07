# Kikao

## Development server

Run `nx serve meetings` for a dev server. Navigate to http://localhost:42001/. The app will automatically reload if you change any of the source files.

Run `nx serve user` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `yarn run:all` to run both apps concurrently. The app will automatically reload if you change any of the source files.

Run `npx nx storybook loader` or `npx nx storybook button` to view storybook for loader and button share components.

Run `yarn nx test {dir}` to run jest test for each folder. e.g `yarn nx test loader` to run tests for shared loader component.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.
