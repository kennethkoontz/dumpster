angular
    .module('app')
    .controller('FeedController', function($scope){
        $scope.post=[
            {user: 'Garabo', likes: '22', dislikes:'27'},
            {user: 'Trashy', likes: '2', dislikes:'32'},
            {user: 'Wastey', likes: '7', dislikes:'44'},
            {user: 'Junker', likes: '54', dislikes:'19'},
            {user: 'Rubbi$h', likes: '42', dislikes:'33'},
            ]
    });
    