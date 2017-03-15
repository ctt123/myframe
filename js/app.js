/**
 * Created by chentingting on 2017/3/15.
 */
define(["angular",
        "route-config"
],function(angular,routeConfig){
    var myApp = angular.module("myApp",[]);
    myApp.controller('myCon',function(people){
        alert(people.name)

    })
    myApp.service('people',function(){
        this.name = 'ctt';
    })

    // myApp.config(["$controllerProvider",
    //     "$compileProvider",
    //     "$filterProvider",
    //     "$provide",
    //     "$locationProvider",
    //     "$stateProvider",
    //     "$urlRouterProvider",
    //     function($controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider, $stateProvider, $urlRouterProvider) {
    //
    //         myApp.lazy = {
    //             controller : $controllerProvider.register,
    //             directive : $compileProvider.directive,
    //             filter : $filterProvider.register,
    //             factory : $provide.factory,
    //             service : $provide.service
    //         };
    //
    //         if (routeConfig.states !== undefined) {
    //             angular.forEach(routeConfig.states, function(route, state) {
    //                 if (route.dependencies !== undefined && route.dependencies.length > 0) {
    //                     route.resolve = resolve(route.dependencies);
    //                 }
    //                 $stateProvider.state(state, route);
    //             });
    //         }
    //         if (routeConfig.defaultUrl !== undefined) {
    //             $urlRouterProvider.otherwise(routeConfig.defaultUrl);
    //         }
    //     }]);



    myApp.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("","/index");

    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"index.html"
        })
        .state("index.page1",{
            url:"/page1",
            templateUrl:"page1.html"
        })
        .state("index.page2",{
            url:"/page2",
            templateUrl:"page2.html"
        })

})

    return myApp;
})

