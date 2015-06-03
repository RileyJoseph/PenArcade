/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request')

module.exports = {
  index:function(req,res){
  request({
      url:'https://wordsapiv1.p.mashape.com/words/' + req.query.word + '/definition',
      headers: {
        "X-Mashape-Key":'PgjVvStbFPmshgWnVHGhxFstEqo4p1ROrvTjsno0NVJhCLU7g2'
      }
    },function(error, response, data){
        console.log(response.statusCode)
        if(error) { return console.log(error) }
        if (!error && response.statusCode == 200) {

        console.log(data)
        res.send({data:data})
      }
    })

  }
};