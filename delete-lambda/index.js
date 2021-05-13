'use strict';

require('dynamoose');
const uuid = require('uuid').v4;
const PersonModel = require('./person-schema.js');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;
    
    let deleted = await PersonModel.delete({id: id});

    return {
      status: 200,
      response: 'Item deleted from DB successfully!',
      body: JSON.stringify(deleted)
    }

  } catch (err) {
    return {
      status: 500,
      response: err.message
    }
  }
}