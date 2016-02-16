angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/signup");
        $stateProvider
            .state('li.admin', {
                url:"/admin",
                templateUrl:"admin.html",
                controller:"AdminController as AdminCtrl"
            })
            .state('li.eDebate', {
                url:"/eDebate",
                templateUrl:"eDebate.html",
                controller:"eDebateController as eDebateCtrl"
            })
            .state('li.feed', {
              url: "/feed",
              templateUrl: "feed.html",
              controller:"FeedController as FeedCtrl"
            })
            .state('li.loggedin',{
                abstract:true,
                templateUrl:'loggedin.html'
            })
            .state('login', {
                url:"/login",
                templateUrl:"login.html",
                controller:"LoginController as LoginCtrl"
            })
            .state('li.news', {
                url:"/news",
                templateUrl:"news.html",
                controller:"NewsController as NewsCtrl"
            })
            .state('li.PostView', {
                url:"/postview",
                templateUrl:"postview.html",
                controller:"PostViewController as PostViewCtrl"
            })
            .state('li.signUp', {
                url:"/signup",
                templateUrl:"signup.html",
                controller:"SignUpController as SignUpCtrl"
            })
            .state('li.termsAndAgreements', {
                url:"/trash_terms_and_garabe_agreements",
                templateUrl:'terms.html',
                controller:"TermsController as TermsCtrl"
            })
            .state('li.user', {
                url:"/user",
                templateUrl:"user.html",
                controller:"UserController as UserCtrl"
            });
    })
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            throw error;
        });
    })
