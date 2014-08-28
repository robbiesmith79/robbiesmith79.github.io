'use strict';

/* App Module */

var myThinkfulApp = angular.module('myThinkfulApp', [
  'ngRoute',
  'thinkfulController'
]);

myThinkfulApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);