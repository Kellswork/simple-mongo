const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(200).json({
      status: 200,
      error: 'Welcome',
    });
  });

app.use((_req, res, next) => {
    res.status(404).json({
      status: 404,
      error: 'Page Not Found',
    });
    next();
  });

const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Politico started on Port: ${port}`));