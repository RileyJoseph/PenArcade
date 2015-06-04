/**
* Saved.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title:{
      type: 'string',
      required:false
    },
    body:{
      type: 'text',
      required:true
    },
    kickStart:{
      type: 'text',
      required: false
    }
    // user:{
    //   model:'User'
    // }

  }
};

