(function(){
	"use strict";
	//about module
	angular.module('aboutModule',[])
		   .component('about',{
		   	    //controller:aboutCtrl,
				templateUrl:'app/components/about.component.html'
		   });

    //controller
 //    aboutCtrl.$inject=['$ocLazyLoad'];
	// function aboutCtrl($ocLazyLoad){
	// 	//$ocLazyLoad.load('app/components/about.component.js');
	// 	$ocLazyLoad.load('about.component.js');
	// }
    

})();
