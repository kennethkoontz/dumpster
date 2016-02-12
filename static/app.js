angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/signup");
        $stateProvider
            .state('admin', {
                url:"/admin",
                templateUrl:"admin.html",
                controller:"AdminController"
            })
            .state('eDebate', {
                url:"/eDebate",
                templateUrl:"eDebate.html",
                controller:"eDebateController"
            })
            .state('feed', {
              url: "/feed",
              templateUrl: "feed.html",
              controller:"FeedController"
            })
            .state('login', {
                url:"/login",
                templateUrl:"login.html",
                controller:"LoginController"
            })
            .state('news', {
                url:"/news",
                templateUrl:"news.html",
                controller:"NewsController"
            })
            .state('PostView', {
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
            .state('user', {
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
