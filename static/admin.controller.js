angular
    .module('app')
    .controller('AdminController', function($scope){
        $scope.admin=[
            {text: 'I shot a hole throught everything I loved'},
            {text: 'BA BA BOOOOM'},
            {text: 'Shoutout to MJ LETS GET RIOGHT INTO THE NEEEEEWWWS'}
        ];
        
        $scope.response=[
            {like: '0', acknowledge: '0', dislike: '0', comment: '0'}
        ];
    });
    