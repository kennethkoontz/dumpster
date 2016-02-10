angular
    .module('app')
    .controller('NewsController', function($scope){
        console.log('here');
        $scope.news= [{text: 'Good news'}, {text: 'Bad News'}, {text: 'Meh news'}]
    });
