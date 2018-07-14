define(['app', 'angular','baseService','baseDirective'], function (webapp) {//主控制器
    webapp.controller('baseController', function ($scope, baseService) {
        console.log("baseController");
        $scope.getAllCityDate = function () {
            var promise = baseService.selectAllCity({});
            promise.then(function (data) {
                $scope.citys = data;
            });
        }
    });
});