WritersApp.controller('AuthLoginModalCtrl',['$scope','UserService','$modalInstance','$http','$location',function($scope,UserService,$modalInstance,$http,$location){

  console.log('AuthLoginModalCtrl loaded!! woah!', UserService)

$scope.login = function(){

  UserService.login($scope.email,$scope.password, function(err,data){
    if(err){
      alert('something absolutely horrible happened');
      console.log(err);
    }else if(data && data.result){
      $modalInstance.close()
      $location.url("/")
    }else {
      console.log(data);
      alert('unable to log in');
    }
  })
}


}]);