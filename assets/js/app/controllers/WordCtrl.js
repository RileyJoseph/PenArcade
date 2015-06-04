WritersApp.controller('WordCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

console.log('word ctrl loaded')

$scope.load = function(){
    $http.get('/api/word?word='+$scope.wordSearch).success(function(data, status){
        // alert(status)
        $scope.$evalAsync(function(){
          $scope.yourData = data.data;
        })
        console.log("yourData",data)
      }).
      error(function(data, status){
        //whatever you need to do if the data is not available
      });
    }
}]);