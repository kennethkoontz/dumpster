angular
    .module('app')
    .controller('FeedController', function($scope){
        $scope.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}] 
    });