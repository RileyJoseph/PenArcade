WritersApp.controller('UserCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

console.log('User Ctrl Loaded.')



// console.log(UserService)

  $scope.signUp = function(){
    var userData = {
      email: $scope.email,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      password: $scope.password
    }

    $http.post("/api/user",userData).success(function(data){
      $location.url("/")
      alert("Success, log in to continue!")
    }).error(function(err){
      alert("there has been an error.")
    })

  }

}]);

  // create: function(req,res,next){

  //   User.create(req.params.all(), function userCreate (){

  //     if(err) return next(err);

  //     res.json(user);
  //   })
  // }