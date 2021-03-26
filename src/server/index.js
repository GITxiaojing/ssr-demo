import render from './render'

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req));
});

app.listen(port, () => {
  console.log('example running on port ', port)
})