(function(){
	"use strict";
	//contact module
	angular.module('contactModule',['ngMessages'])
	   .component('contact',{	   	
	   		controller:contactCtrl,
	   		templateUrl:'app/components/contact.component.html'			
	   })

	/**
	*controller
	*/
	contactCtrl.$inject=['$log'];
	function contactCtrl($log){

		var vm=this;
		vm.users=[
			{'Id':1,'name':'Dipranjan Sukla','email':'dipranjan@gmail.com'},
			{'Id':2,'name':'Tanmay Sukla','email':'tanmay@gmail.com'},
			{'Id':3,'name':'Tanya Sukla','email':'tanya@gmail.com'}
		]
		vm.formDataTwo={}
		vm.formDataTwo.users=vm.users;
		vm.main={};


		vm.hello=true;
		vm.appState='goodbye';
		vm.checkSomething=function(){
			return true;
		}
		vm.goCats=true;
		// set the default value of our number
		vm.myNumber = 0;
		// function to evaluate if a number is even
		vm.isEven = function(value) {
			if (value % 2 == 0)
				return true;
			else 
				return false;
		}

		vm.test=true;
		vm.test1='text-danger';
		vm.test2='bg-info';


		/**
		*sorting the table
		*/
		vm.sortType     = 'name'; // set the default sort type
		vm.sortReverse  = false;  // set the default sort order
		vm.searchFish   = '';     // set the default search/filter term

		// create the list of sushi rolls 
		vm.sushi = [
			{ name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
			{ name: 'Philly', fish: 'Tuna', tastiness: 4 },
			{ name: 'Tiger', fish: 'Eel', tastiness: 7 },
			{ name: 'Rainbow', fish: 'Variety', tastiness: 6 }
		];

	}


})();

