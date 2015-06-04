/**
 * SavedController
 *
 * @description :: Server-side logic for managing saveds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  save:function(){
    if (req.session.user){
    Saved.create({
      title:req.body.title,
      body:req.body.body,
      user:req.session.user.id
    }).then(function(data){
      Saved.findOne({id:req.params.postId}).populateAll().then(function(save){
        console.log(save)
        res.send(save);
      });
    });
    }else{
      res.send(403,"You must be logged in!")
    }
  }

};

