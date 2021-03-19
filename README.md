<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://fr.nuxtjs.org" target="blank"><img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg" width="320" alt="Nuxt Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">


## Description

OT1 App

NodeVersion : v15.2.0

## Installation

```bash
$ npm install
```

Nest Js is on http://localhost:3000,
Nuxt is on http://localhost:8080
Nuxt has a wildcard on client/* to use vue-router without client prefix nest controller will handle request

Graphql playground is available on http://localhost:3000/graphql in order to test or graphql methods and mutations

Qraphql works with TypeOrm describe in server/app.module.ts, credentials are in plain text in the connection string but it'll be enough for the moment.

## Running the app in dev

```bash
# Launch Nest and Nuxt
$ npm run dev

# Launch only Nuxt
$ npm run dev:client

# Launch only Nest
$ npm run dev:server
```

Little thing not correct yet, you'll have to press enter after ```run dev```or ```run dev:client``` because nuxt ask you to collect stats when developing.

## Linter
```bash
# Laucnh linter
$ npm run lint

```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


