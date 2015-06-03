WritersApp.controller('NavCtrl',['$scope','$rootScope','$modal','UserService',function($scope,$rootScope,$modal,UserService){

  console.log("nav controller loaded")

  $scope.UserService = UserService;

  $scope.showLogin = function(){
    // alert("download postman dick")
    $modal.open({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'AuthLoginModalCtrl'
    })
  };

  $scope.logout = function(){
    UserService.logout(function(err,data){
      ///server call to logout, nothing
    })
  }


  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });
}]);