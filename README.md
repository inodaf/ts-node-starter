# Project Name
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Getting Started on Development
There are simple steps and prerequisites to acomplish for runnning the project locally after cloning the project into your local machine.

### Prerequisites
- yarn - Our prefered package manager
- Node.js (*v14.16.0*) - Use **nvm** to install: `nvm use`

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
As we use `ts-node` for running our TypeScript source, there is no need for a build step that transpiles all the source to plaing JavaScript. This is all handled by `ts-node`. The only thing we need is to define our Env Vars.
```sh
# Starts the program with Production bindings.
yarn start:prod

# Starts the program with Staging bindings.
yarn start:stag
```