var app = angular.module('fed', []);

angular
    .module('app')
    .controller('eDebateController', function($scope){
        $scope.navigation = [{topic:'something something darkside'}]
    })