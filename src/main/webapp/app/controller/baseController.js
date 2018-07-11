define(['app', 'baseService'], function (webapp) {//主控制器
    webapp.controller('baseController', function ($scope, baseService) {
        console.log("baseController");
        debugger
        $scope.getAllCityDate = function () {
            debugger
            var promise = baseService.selectAllCity({});
            promise.then(function (data) {
                debugger
                $scope.citys = data;
            });
        }
    });
});