(function(){

"use strict";


//service module
angular.module('serviceModule',[])
	   .component('service', {
			controller:myctrl,
			templateUrl:'app/components/service.component.html'
		})
	   .factory('servicesFactory',servicesFactory)

//controller
myctrl.$inject=['$scope','$state','servicesFactory'];
function myctrl($scope,$state,servicesFactory){

	var vm=this;

	//featch json data using service
	servicesFactory
		.featchServices()
		.then(function(success){
			vm.serviceData=success.data;
		},function(error){
			console.log(error);
		});

	$scope.displayVal=function(id){		//console.log(id+'id');

 		var x = document.getElementsByClassName("test1");
 		angular.forEach(x, function(value, key) { 			
 			if(id==key){
 				x[key].innerHTML = "Hello World!"+(id+1);
 			}
 		});
	}
}

//factory
servicesFactory.$inject=['$http'];
function servicesFactory($http){
	
	function featchServices(){
		return $http.get('http://127.0.0.1:8080/assets/service.json');			 
	}

	return {
		featchServices:featchServices
	}
}


})();