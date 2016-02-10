
angular
    .module('app')
    .controller('FeedController', function($scope){
        console.log('here');
        $scope.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
