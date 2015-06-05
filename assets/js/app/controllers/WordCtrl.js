WritersApp.controller('WordCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

console.log('word ctrl loaded')


$scope.load = function(){

  console.log("--------->",$scope.wordSearch,$scope.options)


    $http.get('/api/word?word='+$scope.wordSearch+'&options='+$scope.options).success(function(data, status){


        $scope.wordD = JSON.parse(data.data).definition
        $scope.wordS = JSON.parse(data.data).synonyms
        $scope.wordA = JSON.parse(data.data).antonyms
        $scope.wordR = JSON.parse(data.data).rhymes.all
      }).
      error(function(data, status){
        //whatever you need to do if the data is not available
      });
    }
$scope.loadS = function(){
    $http.get('/api/word?word='+$scope.wordSearch).success(function(data, status){
        // alert(status)
        $scope.wordSynonym = JSON.parse(data.data).results[3].synonyms[0]
        console.log("yourData",data.data)
      }).
      error(function(data, status){
        //whatever you need to do if the data is not available
      });
    }


}]);