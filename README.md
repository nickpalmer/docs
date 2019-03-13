# Dinero.js Documentation

This is where the documentation files of Dinero.js live.

## Install

You need [Node.js][node] >= 11.0.0 to start the server.

### Clone repository

Clone these docs on your environment:

```sh
git clone https://github.com/dinerojs/docs.git
```

### Install dependencies

Go to the project’s root and install the dependencies using [Yarn][yarn]
(recommended) or npm:

```sh
yarn install
# or
npm install
```

### Get a GitHub token

To access the `/docs/releases` endpoint, you need to have access to the GitHub API. You can create GitHub tokens [on your account][github:tokens]. Then, create a `.env` file and add your token as a `GITHUB_TOKEN` environment variable. 

### Start server

Start the dev server on port `4000` by running:

```sh
yarn start
# or
npm run start
```

Then, access the API on [http://localhost:4000][localhost:4000] 🚀

[node]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[localhost:4000]: http://localhost:4000
[github:tokens]: https://github.com/settings/tokens/new