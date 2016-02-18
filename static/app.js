angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/signup");
        $stateProvider
            .state('li', {
                abstract: true,
                templateUrl: 'loggedin.html'
            })
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
            .state('termsAndAgreements', {
                url:"/trash_terms_and_garabe_agreements",
                templateUrl:'terms.html',
                controller:"TermsController as TermsCtrl"
            })
            .state('li.user', {
                url:"/user",
                templateUrl:"user.html",
                controller:"UserController as UserCtrl"
            })
            .state('login', {
                url:"/login",
                templateUrl:"login.html",
                controller:"LoginController as LoginCtrl"
            })
            .state('signUp', {
                url:"/signup",
                templateUrl:"signup.html",
                controller:"SignUpController as SignUpCtrl"
            });
    })
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            throw error;
        });
    })
