angular
    .module('app')
    .controller('UserController', function(){
        var vm = this;
        vm.user = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
