//angular scripting for the post view

angular
    .module('app')
    .controller('PostViewController', function(){
        var vm = this;
        vm.feed = [{text: 'hello world'}];
         vm.custom = true;
    });