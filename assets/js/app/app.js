var WritersApp = angular.module('WritersApp',['ngRoute','ngResource','ui.bootstrap']);

WritersApp.run(['$rootScope','UserService',function($rootScope,UserService){

  console.log('PenArcade is up and running')

}]);

WritersApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){


  $locationProvider.html5Mode(true);


  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller:  'HomeCtrl'
    })
    .when('/write', {
      templateUrl: '/views/write.html',
      controller:  'WordCtrl'
    })
    .when('/kickStart', {
      templateUrl: '/views/kickStart.html',
      controller:  'ToolsCtrl'
    })
    .when('/signUp', {
      templateUrl: '/views/signUp.html',
      controller:  'UserCtrl'
    })
    .when('/abstractExercises', {
      templateUrl: '/views/kickStart/abstractExercises.html',
      controller:  'ToolsCtrl'
    })
    .when('/quickExercises', {
      templateUrl: '/views/kickStart/quickExercises.html',
      controller:  'ToolsCtrl'
    })
    .when('/prompts', {
      templateUrl: '/views/kickStart/prompts.html',
      controller:  'ToolsCtrl'
    })
    .when('/responseExercises', {
      templateUrl: '/views/kickStart/responseExercises.html',
      controller:  'ToolsCtrl'
    })
    .when('/snowflake', {
      templateUrl: '/views/kickStart/snowflake.html',
      controller:  'ToolsCtrl'
    })
    .when('/saved', {
      templateUrl: '/views/saved/index.html',
      controller:  'HomeCtrl'
    })
}]);

