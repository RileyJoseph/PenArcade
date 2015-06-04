WritersApp.factory('SaveService',['$resource',function($resource){


  return $resource('/api/:userId/saved/:id', null, {
    'update': {method: 'PUT'}
  });

}]);