angular
    .module('app')
    .controller('NewsController', function(){
        console.log('here');
        $scope.news= [{text: 'Good news'}, {text: 'Bad News'}, {text: 'Meh news'}]
    });
