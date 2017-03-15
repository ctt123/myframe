/**
 * Created by chentingting on 2017/3/10.
 */
require.config({
    baseUrl:"js",
    paths:{//此时这些地址都可以在index.html下使用简单的名字就可以找到对应的地址了
        "bootstrapJs":"bootstrap",
        "index":"index",
        "angular":"angular",
        "ui-router":"lib/angular/angular-ui-router",
        "route-config":"route-config",
        "jquery":"jquery-1.10.2",
        "test":"test"
        // "app":"app"

    },
    shim : {
        "angular": {
            "deps": ["jquery"],
            "exports": "angular"
        }
    }
})
require(["app","test"],function(people){
    //1.此时function中的参数可写可不写.2.require,define里面的[],既是执行了一遍里面的js文件.3.既然是执行文件应该是一步一步来吧，但是requirejs是异步加载
     alert(people.name)
    // $(document).ready(function(){
    //     angular.bootstrap(document,[app.name])
    // })

})