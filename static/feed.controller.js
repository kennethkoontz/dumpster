
angular
    .module('app')
    .controller('FeedController', function(){
        console.log('here');
        $scope.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
