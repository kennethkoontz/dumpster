angular
    .module('app')
    .controller('NewsController', function(){
        var vm = this;
        vm.news= [{text: 'Good news'}, {text: 'Bad News'}, {text: 'Meh news'}]
    });
