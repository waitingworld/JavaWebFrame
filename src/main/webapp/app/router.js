define(['app', 'angularAMD', 'uiRouter','baseController'], function (app, angularAMD,uiRouter) {
    return app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            $stateProvider.state('index', angularAMD.route({
                url: '/index',
                templateUrl: '/pages/home.html',
                controllerUrl: 'baseController'
            }))
            $urlRouterProvider.otherwise('/index');
        }]);
});