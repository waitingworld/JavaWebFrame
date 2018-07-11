// 通过Requirejs加载、启动Angularjs
//domReady! 这个是requireJS的插件可以让回调函数在页面DOM结构加载完成后再运行
require(['domReady','uiRouter', 'baseController'], function(app){
    //angular.bootstrap方法是angular自带的，顾名思义，如果手工去调用，就是启动一个angular app的意思
    angular.bootstrap(document, ['app']);
});