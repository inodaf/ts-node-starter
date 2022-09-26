<h1>
  <div>
    GraphQL Starter
    <div>
      <img src="https://img.shields.io/badge/Web%20Framework-Fastify-white.svg" />
      <img src="https://img.shields.io/badge/ORM-Prisma-blueviolet.svg" />
      <img src="https://img.shields.io/badge/Testing-AVA-pink.svg" />
      <img src="https://img.shields.io/badge/Format-Prettier-coral.svg" />
      <img src="https://img.shields.io/badge/Linting-TypeScript_ESLint-blue.svg" />
      <img src="https://img.shields.io/badge/Node.js-v16.17.2-green.svg" />
    </div>
  </div>
</h1>

Starting a new **Node.js Backend** project needs to be easy and well organized. **GraphQL Starter** provides a fully featured environment with **[Mercurius GraphQL](https://mercurius.dev/#/)** + **[Fastify](https://fastify.io)** + **Clean Architecture** structure for letting you focus on code delivery without compromising best practices.

## Getting Started

Base commands for develop, test and build.

**Requirements**

- Node.js Toolchain Manager: [Volta](https://volta.sh)
- Package Manager: [pnpm](https://pnpm.io/installation)

**Prepare Development**

A **Makefile** is used to orchestrate the installation of required tooling and dependencies. Open your Terminal app and run the command bellow, then you are able to get started.

```sh
make
```

> **Note**
>
> In case of failure, head to the [**Troubleshooting**](#troubleshooting) section below for alternatives.


## Development Server

The next command will spawn the Dev Server and load the Env Vars from `.env`, `.env.development` and `.env.local`.

```sh
# spawns the Dev Server at http://localhost:3000
pnpm dev
```

## Testing

There are **Integration** and **Unit** tests available and the matching test environment variables (`.env.test`) are automatically loaded.

```sh
# Unit & Integration Tests
pnpm test     # run tests without watch
pnpm test:w   # run tests with watch
pnpm test:c   # run tests with coverage
pnpm t        # alias for `pnpm test`
```

## Linting & Code Formatting

We split the process into Check and Fix commands.

```sh
# Linting
pnpm lint:check # checks linting without fixing (useful for CI)
pnpm lint       # checks linting and fixes issues
```

```sh
# Code Formatting
pnpm fmt:check # checks formatting without fixing (useful for CI)
pnpm fmt       # checks formatting and fixes issues
```

---

## Building
Builds are separated by environments: Production and Staging. For both environments the `NODE_ENV` is set to `production`.

**Production**

Refer to `./config/envs/.env.production` for the environment variables.

```sh
pnpm build:prod # builds with production bindings
pnpm start:build:prod # starts the built app with production bindings
```

**Staging**

Refer to `./config/envs/.env.staging` for the environment variables.

```sh
pnpm build:stag # builds with staging bindings
pnpm start:build:stag # starts the built app with staging bindings
```

## Alternative to Build

Alternatively we can use `ts-node` for running our TypeScript source without generating distributable files.

> **Note**:
>
> This process has a higher memory consumption for starting the server. You might find **issues** when using it in a **low-resource machine** with 512MB of RAM.
```sh
yarn start:prod # Starts the program with Production bindings.
yarn start:stag # Starts the program with Staging bindings.
```

---

## Cleanup

Whenever you need a fresh start in case something is going wrong, you can leverage handy cleanup commands.

```sh
make clean # remove caches and temp files
make clean_hard # same as above but also remove `node_modules`
```

---

## Troubleshooting

**Fail while using the `make` command:** Behind the scenes this command depends on `cURL` for downloading Volta and pnpm binaries. Try installing cURL then run the command again. Also, the commands from Makefile are **not supported on Windows** machines so the alternative is manually installing the required dependencies.

---

## License

Altough this **template** itself is MIT licensed, if needed, you must change the license after creating your project.
