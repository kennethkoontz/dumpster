var app = angular.module('fed', []);

angular
    .module('app')
    .controller('eDebateController', function($scope){
        $scope.navigation = [{current:'angular.js worked finally'}]
        $scope.pickTwo = [{optnOne: 'lemmings'}, {optnTwo: '2spooky4me'}]
        
        // series of posts / entries by users
        $scope.feed = [{text: 'howdy'}, {text: 'second post'}, {text: 'another one'}, {text: 'i appreciate that'}, {text:'you is smawt'}]
        
        
    });