var thinkfulControllers = angular.module('thinkfulControllers', []);
 
thinkfulControllers.controller('thinkfulController', function($scope,$location) {
	$scope.page = $location.path();
	$scope.hello = "Because I said so";
});

thinkfulControllers.controller('homeController', function($scope) {
	
});

thinkfulControllers.controller('aboutController',function($scope) {
  
});

thinkfulControllers.controller('contactController',function($scope) {
  
});