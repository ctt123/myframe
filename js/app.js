/**
 * Created by chentingting on 2017/3/15.
 */

define(["angular","ui-router"], function (angular) {
    var myApp = angular.module("myApp", ["ui.router"]);
    myApp.controller('myCon', function (people, $scope) {
        $scope.name = 'ctt';
    });
    myApp.service('people', function () {
        this.name = 'ctt';
    });

    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'page1.html'
            });
        $urlRouterProvider.otherwise('/index');
    });
    // myApp.run(function ($rootScope, $state, $stateParams) {
    //         window.getState = function () {
    //             return $state;
    //         };
    //         window.getStateParams = function () {
    //             return $stateParams;
    //         };
    //     });

    return myApp;//必须返回，要不然function中传不到该module,所以说模块虽然执行了，但是不代表就相当于加载在同一个html上。还是分开的。
});

