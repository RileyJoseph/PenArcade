WritersApp.controller('SavedCtrl',['$scope','$resource','$rootScope','$http','UserService',function($scope,$resource,$rootScope,$http,UserService){

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser
    console.log($scope.currentUser)
  })

  $scope.saved = function(){
    var savedData = {
      body: $scope.body,
      user: $scope.currentUser.id
    }
    console.log($scope.body)
    $http.post('/api/saved',savedData)
      .success(function(data){
        console.log("SAVED",data)
      }).error(function(err){
        alert("error")
      })
  }

//attempt at loading saved?? fix route so it is belonging to user?
  $scope.history = function(){
    $http.get('/api/saved').success(function(data, status){
        // alert(status)
          $scope.yourSaved = data;
        console.log("yourData",data)
      }).
      error(function(data, status){
        //whatever you need to do if the data is not available
      });
    }



}])