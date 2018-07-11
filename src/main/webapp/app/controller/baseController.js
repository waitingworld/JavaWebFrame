// var baseApp = angular.module('baseApp', []);
// baseApp.controller('baseController', function ($scope,baseService) {
//     console.log("baseController");
//     debugger
//     var promise = baseService.sendData("baseController/selectAllCity",{});
//     promise.then(function (data) {
//         debugger
//         $scope.citys = data;
//     });
// });
define(['app', 'baseService'], function (webapp) {//主控制器
    webapp.controller('baseController', function ($scope, baseService) {
        console.log("baseController");
        var promise = baseService.sendData("baseController/selectAllCity", {});
        promise.then(function (data) {
            $scope.citys = data;
        });
    });
});