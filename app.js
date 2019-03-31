const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const recipeRoutes = require('./routes/recipe');

const app = express();

mongoose.connect('mongodb://user:Gm6F2p60gQqhjiwT@cluster0-shard-00-00-gddvw.gcp.mongodb.net:27017,cluster0-shard-00-01-gddvw.gcp.mongodb.net:27017,cluster0-shard-00-02-gddvw.gcp.mongodb.net:27017/recipe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', {useNewUrlParser: true})
	.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes);

module.exports = app;
