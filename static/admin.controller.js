//angular scripting for admin tab

angular
    .module('app')
    .controller('AdminController', function(){
        var vm = this;
        
        vm.admin=[
            {text: 'I shot a hole through everything I loved'},
            {text: 'BA BA BOOOOM'},
            {text: 'Shoutout to MJ LETS GET RIOGHT INTO THE NEEEEEWWWS'}
        ];
        
        vm.response=[
            {like: '0', acknowledge: '0', dislike: '0', comment: '0'}
        ];
        
        vm.custom = true;
    });
    