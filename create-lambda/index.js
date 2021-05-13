'use strict';

require('dynamoose');
const uuid = require('uuid').v4;
const PersonModel = require('./person-schema.js');

exports.handler = async (event) => {
  try {
    const {name, age, pronoun} = JSON.parse(event.body);
    const id = uuid();

    const record = new PersonModel({ id, name, age, pronoun });

    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (err) {
    return {
      statusCode: 500,
      response: err.message
    }
  }
}