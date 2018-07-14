define(['app', 'angular', 'baseService', 'baseDirective', 'pageDirective'], function (webapp) {//主控制器
    webapp.controller('baseController', function ($scope, baseService) {
        console.log("baseController");
        $scope.paginationConf = {
            currentPage : 1,
            itemPageLimit : 5,
            total : 1190,
            isSelectPage : false,// 是否显示一页选择多少条
            isLinkPage : false// 是否显示快速跳转
        };
        $scope.getAllCityDate = function () {
            var promise = baseService.selectAllCity({});
            promise.then(function (data) {
                $scope.citys = data;
            });
        }
    });
});