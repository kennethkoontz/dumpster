var app = angular.module('fed', []);

angular
    .module('app')
    .controller('FeedController', function($scope){
        $scope.feed = [{text: 'hello world'}] 
    });