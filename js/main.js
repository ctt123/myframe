/**
 * Created by chentingting on 2017/3/10.
 */
require.config({
    baseUrl:"js",
    paths:{
        "bootstrapJs":"bootstrap",
        "index":"index",
        "angular":"angular",
        "ui-router":"lib/angular/angular-ui-router",
        "route-config":"route-config",
        "jquery":"jquery-1.10.2"

    }
})
require(["index"],function(index){

    $(document).ready(function(){
        $.bootstrap(document,[index.name])
    })

})