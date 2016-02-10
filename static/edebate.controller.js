angular
    .module('app')
    .controller('eDebateController', function($scope){
        $scope.navigation = [{current:'angular.js worked finally'}]
        $scope.pickTwo = [{optnOne: 'lemmings'}, {optnTwo: '2spooky4me'}]
        
        // series of posts / entries by users
        $scope.feed = [{text: 'howdy'}, {text: 'second post'}, {text: 'another one'}, {text: 'i appreciate that'}, {text:'you is smawt'}]
        
        $scope.response = [{like: '0', acknowledge: '0', dislike: '0', comment: '0'}]
        // $scope.response = [{like: '2', acknowledge: '1', dislike: '0', comment: '8'}]
        
    });
    