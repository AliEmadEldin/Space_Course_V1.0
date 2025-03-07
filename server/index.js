// Code to start the server
// Importing the required modules
const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const app = express();
// Middleware to handle the graphql requests
app.use('/graphql', graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`Server is running on port ${port}`));