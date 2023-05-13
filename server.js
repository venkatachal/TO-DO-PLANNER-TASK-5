// back-end API using Node.js and Express
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/todos', async (req, res) => {
  try {
    // add new to-do item to database
    res.status(201).send(todo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
