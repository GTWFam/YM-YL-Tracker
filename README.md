# YM-YL-Tracker

Financial Tracker based on the book "Your money or your life" by Vicki Robin and Joe Dominguez

## How to run on localhost

First install dependencies:

```sh
npm install
```

Add the following information into the .env file:

```yaml
PORT=
SESSION_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET==

DB_HOST=
DB_PASS=
DB_USER=

GIT_USER_ID=
GIT_NODE_ID=
```

To create a production build:

```sh
npm run build
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:3000 or defined PORT from above

## Credits

Made with [createapp.dev](https://createapp.dev/)
