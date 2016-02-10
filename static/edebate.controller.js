angular
    .module('app')
    .controller('eDebateController', function($scope){
        $scope.navigation = [{current:'un-plebing code'}]
        $scope.pickTwo = [{optnOne: 'lemmings'}, {optnTwo: '2spooky4me'}]
        
        // series of posts / entries by users
        $scope.feed = [
            {text: 'howdy', profilePic: 'images/userProfileExample.png'},
            {text: 'second post', profilePic: 'images/userProfileExample.png'},
            {text: 'another one', profilePic: 'images/userProfileExample.png'},
            {text: 'i appreciate that', profilePic: 'images/userProfileExample.png'},
            {text:'you is smawt', profilePic: 'images/userProfileExample.png'}
        ]
        
        $scope.response = [{like: '0', acknowledge: '0', dislike: '0', comment: '0'}]
        
    });
    