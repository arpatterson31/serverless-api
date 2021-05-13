'use strict';

require('dynamoose');
const uuid = require('uuid').v4;
const PersonModel = require('./person-schema.js');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;
    const {name, age, pronoun} = JSON.parse(event.body);

    const data = await PersonModel.update({id: id},{ name: name, age: age, pronoun: pronoun });
    
    return {
      status: 200,
      response: 'Item successfully updated!',
      body: JSON.stringify(data)
    }

  } catch (err) {
    return {
      status: 500,
      response: err.message
    }
  }
}