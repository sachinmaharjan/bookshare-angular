'use strict';

// Declare app level module which depends on views, and components
angular.module('bookshare', [
  'ngRoute',
  'bookshare.view1',
  'bookshare.view2',
  'bookshare.version'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: 'app'});
}]);
