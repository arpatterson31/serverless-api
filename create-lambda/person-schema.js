'use strict';

const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'age': Number,
  'pronoun': String
});

module.exports = dynamoose.model('people', personSchema);