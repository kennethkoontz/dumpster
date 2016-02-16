angular
    .module('app')
    .controller('FeedController', function(){
        var vm = this;
        vm.feed = [{text: 'hello world'}, {text: 'test post'}, {text: 'another one'}]
    });
