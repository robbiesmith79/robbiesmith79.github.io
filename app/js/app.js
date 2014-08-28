'use strict';

/* App Module */

var myThinkfulApp = angular.module('myThinkfulApp', [
  'ngRoute',
  'thinkfulControllers',
]);

myThinkfulApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'app/partials/about.html',
        controller: 'aboutController'
      }).
      when('/contact', {
        templateUrl: 'app/partials/contact.html',
        controller: 'contactController'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'app/partials/index.html',
        controller: 'homeController'
      });
  }]);