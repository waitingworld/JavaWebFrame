var baseApp = angular.module('baseApp', []);
baseApp.controller('baseController', function ($scope,baseService) {
    console.log("baseController");
    debugger
    var promise = baseService.sendData("baseController/selectAllCity",{});
    promise.then(function (data) {
        debugger
        $scope.citys = data;
    });
});