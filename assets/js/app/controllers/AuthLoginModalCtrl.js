WritersApp.controller('AuthLoginModalCtrl',['$scope','UserService','$modalInstance',function($scope,UserService,$modalInstance){

  console.log('AuthLoginModalCtrl loaded!! woah!')
$scope.login = function(){
//   alert('you done it!' +" "+ $scope.email + ' ' + $scope.password)
// console.log(UserService)

  UserService.login($scope.email,$scope.password, function(err,data){
    if(err){
      alert('something absolutely horrible happened');
      console.log(err);
    }else if(data && data.result){
      $modalInstance.close()
    }else {
      console.log(data);
      alert('unable to log in');
    }
  })
}


}]);