WritersApp.controller('LoadCtrl',['$scope','$resource','$rootScope','$http','UserService','$routeParams',function($scope,$resource,$rootScope,$http,UserService,$routeParams){


  $http.get('/api/saved/'+$routeParams.id).success(function(data){
    $scope.body = data.body
    console.log("Getting",data)
    console.log("populate",data.body)
  })


  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();
  $scope.date = mm+"/"+dd+"/"+yyyy


  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser
    console.log($scope.currentUser)
  })

}]);