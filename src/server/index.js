import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/Home';

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))

const content = renderToString(<Home />) 

app.get('/', (req, res) => {
  res.send(
    `
    <html>
      <head>
        <title>
          ssr demo
        </title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
    `
  );
});

app.listen(port, () => {
  console.log('example running on port ', port)
})