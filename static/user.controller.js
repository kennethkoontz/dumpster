angular
    .module('app')
    .controller('UserController', function(){
        console.log('pls work');
        $scope.user = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
