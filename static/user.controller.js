
angular
    .module('app')
    .controller('UserController', function($scope){
        console.log('pls work');
        $scope.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
