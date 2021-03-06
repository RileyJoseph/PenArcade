WritersApp.controller('SavedCtrl',['$scope','$resource','$rootScope','$http','UserService','$location',function($scope,$resource,$rootScope,$http,UserService,$location){

  console.log('saved controller loaded')

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser
    console.log($scope.currentUser)
  })


  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();
  $scope.date = mm+"/"+dd+"/"+yyyy

  $scope.saved = function(){
    var savedData = {
      title: $scope.date,
      body: $scope.body,
      body2: $scope.body2,
      body3: $scope.body3,
      body4: $scope.body4,
      body5: $scope.body5,
      body6: $scope.body6,
      body7: $scope.body7,
      body8: $scope.body8,
      body9: $scope.body9,
      body10: $scope.body10,
      body11: $scope.body11,
      body12: $scope.body12,
      body13: $scope.body13,
      user: $scope.currentUser.id
    }
    console.log($scope.body)
    $http.post('/api/saved',savedData)
      .success(function(data){
        $location.path('/saved');
        console.log("SAVED",data)
      }).error(function(err){
        alert("error")
      })
  }

//attempt at loading saved?? fix route so it is belonging to user?

$http.get('/api/saved').success(function(data, status){
    // alert(status)
    $scope.yourSaved = []
    if ($scope.currentUser){
      for (var i = 0; i<data.length ;i++){
        if ($scope.currentUser.id == data[i].user){
          $scope.yourSaved.push(data[i])
        }
      }
    }
    console.log("yourData",data)
  }).
  error(function(data, status){
    //whatever you need to do if the data is not available
  });

  $scope.deleteSaved = function(id){
    $http.delete('/api/saved/'+id).success(function(err, data){
      console.log("DELETED",data)
    })
  }

  $scope.showSaved = function(id){
    $location.path('/saved/'+id);
    $http.get('/api/saved/'+id).success(function(data){
      $scope.body = data.body
      $scope.id=id
      console.log("Getting",data)
      console.log("populate",data.body)
    })
  }


}])