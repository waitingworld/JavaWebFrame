define(['app', 'angular', 'baseService', 'baseDirective', 'pageDirective'], function (webapp) {//主控制器
    webapp.controller('baseController', function ($scope, baseService) {
        console.log("baseController");
        $scope.paginationConf = {
            currentPage: 1,
            itemPageLimit: 5
        };
        $scope.getAllCityDate = function () {
            var postDate = {
                currentPage: $scope.paginationConf.currentPage,
                pageSize: $scope.paginationConf.itemPageLimit
            };
            var promise = baseService.selectAllCity(postDate);
            promise.then(function (data) {
                $scope.citys = data.data;
                $scope.paginationConf.total = data.total;
            });
        }
        $scope.$watch("paginationConf.currentPage + paginationConf.itemPageLimit", $scope.getAllCityDate);
    });
});