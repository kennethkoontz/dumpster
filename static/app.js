angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/feed");
        $stateProvider
            .state('admin', {
                url:"/admin",
                templateUrl:"admin.html"
            })
            .state('eDebate', {
                url:"/eDebate",
                templateUrl:"eDebate.html"
            })
            .state('feed', {
              url: "/feed",
              templateUrl: "feed.html"
            })
            .state('login', {
                url:"/login",
                templateUrl:"login.html"
            })
            .state('news', {
                url:"/news",
                templateUrl:"news.html"
            })
            .state('PostView', {
                url:"/postview",
                templateUrl:"postview.html"
            })
            .state('signUp', {
                url:"/signup",
                templateUrl:"signup.html"
            })
            .state('user', {
                url:"/user",
                templateUrl:"user.html"
            });
    });
