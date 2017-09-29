(function(){
	"use strict";

angular.module('detailModule',[])
	   .component('detail',{
	   		controller:detailsCtrl,
	   		templateUrl:'app/components/detail.component.html'
	   })
	   .factory('detailsFactory',detailsFactory)

//controller
detailsCtrl.$inject=['$log','$state','detailsFactory','$filter'];
function detailsCtrl($log,$state,detailsFactory,$filter){	
	var vm=this;

	detailsFactory
		.singleItem()
		.then(function(success){
			//vm.result=$filter('filter')(success.data, {'Id':$state.params.id})[0];
			//console.log(vm.result);
			//vm.result=success.data;

			vm.result=success.data[$state.params.id];

		},function(error){
			$log.log(error);
		});
}

//factory
detailsFactory.$inject=['$http'];
function detailsFactory($http){
	
	function singleItem(){
		return $http.get('http://127.0.0.1:8080/assets/servicedetails.json');
	}

	return{
		singleItem:singleItem
	}
}

})();