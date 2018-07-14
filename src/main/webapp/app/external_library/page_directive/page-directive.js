define(['angular', 'app', 'bootstrap'], function (angular, app) {
    debugger
    app.directive('pageDirective', ['$rootScope',
        function ($rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/external_library/page_directive/pagination.html',
                replace: true,
                scope: {
                    conf: '='
                },
                link: function (scope, ele, attrs) {

                    var page = scope.page = {};
                    var conf = scope.conf;
                    // 初始化一页展示多少条  默认为10
                    conf.pageLimit = [10, 15, 20, 30, 50];
                    if (!conf.itemPageLimit) {
                        conf.itemPageLimit = conf.pageLimit[0];
                    } else {
                        // 把自定义的条目加入到pagelimit中
                        if (conf.pageLimit.indexOf(conf.itemPageLimit)) {
                            conf.pageLimit.push(conf.itemPageLimit);
                            conf.pageLimit = conf.pageLimit.sort(function (a, b) {
                                return a - b;
                            })
                        }
                    }
                    //一共多少页
                    page.limit = Math.floor(conf.total / conf.itemPageLimit);
                    // 上一页
                    scope.prevPage = function () {
                        if (conf.currentPage <= 1) return;
                        conf.currentPage -= 1;
                    }

                    // 下一页
                    scope.nextPage = function () {
                        if (conf.currentPage >= page.limit) return;
                        conf.currentPage += 1;
                    }

                    // 改变一页显示条目
                    scope.selectPage = function () {
                        conf.currentPage = 1;
                        page.limit = Math.floor(conf.total / conf.itemPageLimit);
                    }

                    // 跳转页
                    scope.linkPage = function () {
                        if (!conf.linkPage) return;
                        conf.linkPage = conf.linkPage.replace(/[^0-9]/, '');
                        if (conf.linkPage == 0 || conf.linkPage > page.limit) {
                            conf.linkPage = page.limit;
                        }
                        conf.currentPage = conf.linkPage;
                    }
                }
            }
        }
    ])
});
