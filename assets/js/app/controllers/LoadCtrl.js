WritersApp.controller('LoadCtrl',['$scope','$resource','$rootScope','$http','UserService','$routeParams',function($scope,$resource,$rootScope,$http,UserService,$routeParams){


  $http.get('/api/saved/'+$routeParams.id).success(function(data){
    $scope.body = data.body
    $scope.body2 = data.body2
    $scope.body3 = data.body3
    $scope.body4 = data.body4
    $scope.body5 = data.body5
    $scope.body6 = data.body6
    $scope.body7 = data.body7
    $scope.body8 = data.body8
    $scope.body9 = data.body9
    $scope.body10 = data.body10
    $scope.body11 = data.body11
    $scope.body12 = data.body12
    $scope.body13 = data.body13
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