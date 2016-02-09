var app = angular.module('fed', []);

<<<<<<< HEAD


=======
>>>>>>> 5b9f0e6c02cb49d8c0636c71a3fb6f6899191dc2
angular
    .module('app')
    .controller('FeedController', function($scope){
        $scope.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });