const path = require('path');
const express = require('express');
const Person = require('./models/person');

const errorHandler = (error, response) => {
  response.status(400).json({ error: error.message });
};

const app = express()
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(express.json());

app.get('/', (request, response) => {
  response.render(path.join(__dirname, '..', 'index.html'));
});

app.get('/test', (request, response) => {
  Person.find()
    .then(result => response.json(result))
    .catch(error => errorHandler(error, response));
});

app.post('/test', (request, response) => {
  let name = request.body?.name;

  (new Person({ name })).save()
    .then(result => response.json(result))
    .catch(error => errorHandler(error, response));
});

app.listen(5000, '0.0.0.0');

module.exports = app;
