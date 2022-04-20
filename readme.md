# Guide on running React + Express

## Setup CORS

In the root directory, run `npm install cors` and add these code in `index.js`.

```js
const express = require("express");
const path = require('path');
const cors = require('cors'); // add this

const app = express();
app.use(cors()); // add this
```

## Input absolute URL instead of relative

In the `List.js` [here](./client/src/App/pages/List.js), use absolute path.

```js
  getList = () => {
    fetch('http://localhost:5050/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }
```

> take note that i uses port 5050 for express

## Running Express & React

You have to run both express and react.

In the root directory: run `npm run start` to start index.js (express).

In the `client` directory: run `npm runs start` to start react.

This should works.