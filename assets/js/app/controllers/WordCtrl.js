WritersApp.controller('WordCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

console.log('word ctrl loaded')

$scope.load = function(){
    $http.get('/api/word?word='+$scope.wordSearch).success(function(data, status){
        // alert(status)
        $scope.yourData = data;
        console.log(data)
      }).
      error(function(data, status){
        //whatever you need to do if the data is not available
      });
    }
}]);