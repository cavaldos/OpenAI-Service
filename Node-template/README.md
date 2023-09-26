# Node-template 🌈"💯👍💡 ⭐️ 🔥

### Node.js TypeScript Express.js

<br />

## Manual Installation

1. Clone project

```shell
git clone https://github.com/cavaldos/Node-template.git
```

2. Rename

```shell
mv  Node-template New-name
```

3. Move path

```shell
- cd New-name
```

4. Delete git

```shell
- rm -rf .git
```

5. Install

```shell
- yarn add  # npm install  # pnpm install
```

6. Run Production

```shell
- yarn run  start:prod
```

8. Run Development

```shell
- yarn run dev
```

9. Build

```shell
- yarn run build
```

## Docker

### Build docker

1.Build your updated version of the image, using the `docker build` command.

```shell
docker build -t  project-name .
```

2.Start a new container using the updated code.

```shell
docker run -dp 3000:3000  project-name .

```

## Table of Contents

<br />

## [Features](#features)

<br />

## [Environment Variables](#environment-variables)

```shell
PORT=3000
```

<br />

## [Project Structure](#project-structure)

```js
├─ src
│  ├─ api
│  │  ├─ controllers
│  │  │  └─ index.ts
│  │  ├─ middlewares
│  │  │   └─ index.ts
│  │  ├─ routes
│  │  │  └─ index.ts
│  │  └─ validators
│  │     └─ index.ts
│  ├─ config
│  │  └─ index.ts
│  ├─ loaders
│  │  └─ index.ts
│  ├─ models
│  │  └─ index.ts
│  └─ utils
│      └─ index.ts
├─ main.ts
├─ tsconfig.json
├─ .tsconfig.build.json
├─ .env
├─ README.md
├─ .gitignore
├─ LICENSE
├─ package-lock.json
└─ package.json
```

## [API Documentation](#api-documentation)

### API Endpoints

List of available routes:

**User Auth Routes**:

- is coming soon

**User Edit Routes**:

- is coming soon

**Other User Routes**:

- is coming soon

<br />
