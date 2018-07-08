/**
 * main.js这个文件完成的事情简单来说就是：载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
 * 这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
 * */

require.config({
    paths: {
        //库文件
        "angular": "lib/angular",
        "bootstrap": "lib/bootstrap.min",
        "angularRoute": "lib/angular-route",
        "angularResource": "lib/angular-resource",
        "jquery": "lib/jquery.min"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        angularRoute: {
            deps: ["angular"]
        },
        angularResource: {
            deps: ['angular']
        }
    },
    urlArgs: "time=" + (new Date()).getTime()  //防止读取缓存，调试用
});


//手动启动ng
define(["routes"], function () {
    //使用bootstrap方法启动Angular应用
    angular.bootstrap(document, ["app"]);
});