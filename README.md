# TypeScript Node Starter
[![Formatting with Prettier](https://img.shields.io/badge/format-prettier-brightgreen)](https://prettier.io/)
[![Linitng with TypeScript ESLint](https://img.shields.io/badge/lint-typescript--eslint-brightgreen)](https://typescript-eslint.io/)

## Getting Started on Development
There are simple steps and prerequisites to acomplish for runnning the project locally after creating a repository using this template.

### Prerequisites
- yarn - Our prefered package manager
- Node.js (see *.nvmrc*) - Use **nvm** to install: `nvm use`

### Installing Dependencies
Use **`yarn`** for install and manage dependencies instead of `npm`, and always commit the `yarn.lock` file.
```sh
yarn
```

### Development Server
There is a simple command to lift the dev server. See the `package.json` file for other useful scripts. This will run the program entrypoint using the `ts-node-dev` package.
```sh
yarn dev
```

### Production Server
There are two ways to run the production server.

#### Build
```sh
# Generates distributables with Production bindings.
yarn bundle:prod

# Starts server using the dist with Production bindings.
yarn start:bundle:prod
```

#### TSNode
As we use `ts-node` for running our TypeScript source, we can skip the build that transpiles all the source to plain JavaScript. This is all handled by `ts-node` and the only thing we need is to define our Env Vars.

> **Perf Note**: This process has a higher memory consumption for starting the server. You might find issues when using it in a low-resource machine with 512MB of RAM.
```sh
# Starts the program with Production bindings.
yarn start:prod

# Starts the program with Staging bindings.
yarn start:stag
```