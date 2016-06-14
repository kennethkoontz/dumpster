//angular scripting for terms and conditions tab (located via link in signup tab)

angular
    .module('app')
    .controller('TermsController', function(){
        var vm = this;
        
        vm.terms=[
            {text: 'ADS'},
            ];
    });