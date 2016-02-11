angular
    .module('app')
    .controller('AdminController', function($scope){
        $scope.yours=[
            {user: 'LarrytheDumpstrGuy', acknowledged:'420', likes: '69', dislikes: '5/7'},
            {user: 'LarrytheDumpstrGuy', acknowledged:'2397', likes: '728', dislikes: '26'},
            {user: 'LarrytheDumpstrGuy', acknowledged:'4297', likes: '954', dislikes: '623'},
            {user: 'LarrytheDumpstrGuy', acknowledged:'6353', likes: '5178', dislikes: '822'},
            {user: 'LarrytheDumpstrGuy', acknowledged:'9321', likes: '7134', dislikes: '1653'}
        ];
        
        $scope.other=[
            {user: 'Garabo', acknowledged: '240', likes: '22', dislikes:'27'},
            {user: 'Trashy', acknowledged: '124', likes: '2', dislikes:'32'},
            {user: 'Wastey', acknowledged: '6739', likes: '7', dislikes:'44'},
            {user: 'Junker', acknowledged: '85', likes: '54', dislikes:'19'},
            {user: 'Rubbi$h', acknowledged: '9', likes: '42', dislikes:'33'}
        ];

    });
    