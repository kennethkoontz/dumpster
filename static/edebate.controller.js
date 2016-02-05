var app = angular.module('fed', []);

angular
    .module('app')
    .controller('eDebateController', function($scope){
        $scope.navigation = [{topic:'angular.js worked finally'}]
        
        $scope.feed = [{text: 'howdy'}, {text: 'second post'}, {text: 'another one'}, {text: 'i appreciate that'},{text:'you is smawt'}]
        
    });