angular
    .module('app')
    .controller('eDebateController', function(){
        var vm = this;
        vm.navigation = [{current:'un-plebing code'}]
        vm.pickTwo = [{optnOne: 'lemmings'}, {optnTwo: '2spooky4me'}]
        
        // series of posts / entries by users
        vm.feed = [
            {text: 'howdy', profilePic: 'images/userProfileExample.png'},
            {text: 'second post', profilePic: 'images/100x100profileImage.gif'},
            {text: 'another one', profilePic: 'images/100x100profileImage.gif'},
            {text: 'i appreciate that', profilePic: 'images/userProfileExample.png'},
            {text:'you is smawt', profilePic: 'images/100x100profileImage.gif'}
        ]
        
        vm.response = [{like: '0', acknowledge: '0', dislike: '0', comment: '0'}]
        
    });
    