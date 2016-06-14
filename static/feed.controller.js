//angular scripting for user feed tab

angular
    .module('app')
    .controller('FeedController', function(){
        var vm = this;
        vm.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}];
         vm.custom = true;
        
    });