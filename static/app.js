angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/feed");
        $stateProvider
            .state('feed', {
              url: "/feed",
              templateUrl: "feed.html"
            })
    });
