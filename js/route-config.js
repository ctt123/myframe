define([ "jquery" ], function() {
	var menuTree = null;

	var result = {
		defaultUrl : "/home",
		states : {
			"frame" : {
				templateUrl : "view/banner.html",
                pendencies : ""
			}

			//#################XURH add end######################
		}
	};

	// if (menuTree != null && menuTree.children != null && menuTree.children.length > 0) {
	// 	for (var i = 0; i < menuTree.children.length; i++) {
	// 		var menu = menuTree.children[i];
	// 		var hasController = menu.data.controller != null && menu.data.controller != "";
	// 		result.states["frame." + menu.data.code] = {
	// 			url : "/" + menu.data.code,
	// 			templateUrl : menu.data.url,
	// 			dependencies : hasController ? [ menu.data.controller ] : []
	// 		};
	// 	}
	// } else {
	// 	result.states["frame.home"] = {
	// 		url : "/home",
	// 		templateUrl : "views/home.html",
	// 		dependencies : []
	// 	};
	// }
	return result;
});
