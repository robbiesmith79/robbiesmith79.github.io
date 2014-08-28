angular.module('components',[])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                name:'@',
                id:'@',
                value:'@'
            },
            templateUrl: 'partials/input.html'
        }
    });
    
  

angular.module('HelloApp', ['components']);