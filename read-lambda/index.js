'use strict';

require('dynamoose');
const uuid = require('uuid').v4;
const PersonModel = require('./person-schema.js');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;

    let data; 

    if (id) {
      const list = await PersonModel.query('id').eq(id).exec();
      data = list[0];
    } else {
      data = await PersonModel.scan().exec();
    }
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