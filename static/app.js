angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/signup");
        $stateProvider
            .state('li.admin', {
                url:"/admin",
                templateUrl:"admin.html",
                controller:"AdminController"
            })
            .state('li.eDebate', {
                url:"/eDebate",
                templateUrl:"eDebate.html",
                controller:"eDebateController"
            })
            .state('li.feed', {
              url: "/feed",
              templateUrl: "feed.html",
              controller:"FeedController"
            })
            .state('li',{
                abstract:true,
                templateUrl:'loggedin.html'
            })
            .state('login', {
                url:"/login",
                templateUrl:"login.html",
                controller:"LoginController"
            })
            .state('li.news', {
                url:"/news",
                templateUrl:"news.html",
                controller:"NewsController"
            })
            .state('li.PostView', {
                url:"/postview",
                templateUrl:"postview.html",
                controller:"PostViewController"
            })
            .state('signUp', {
                url:"/signup",
                templateUrl:"signup.html",
                controller:"SignUpController"
            })
            .state('termsAndAgreements', {
                url:"/trash_terms_and_garabe_agreements",
                templateUrl:'terms.html',
                controller:"TermsController"
            })
            .state('li.user', {
                url:"/user",
                templateUrl:"user.html",
                controller:"UserController"
            });
    })
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            throw error;
        });
    })
