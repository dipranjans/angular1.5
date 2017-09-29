(function(){

	"use strict";



	//register module
	angular.module('registerModule',[])
		   .component('register', {
				controller:RegisterController,
				templateUrl:'app/components/register.component.html'
			})

	//controller
	RegisterController.$inject=['UserService', '$location', '$rootScope', 'FlashService'];
	function RegisterController(UserService, $location, $rootScope, FlashService) {
		var vm=this;

		vm.register = register;


		function register() {
            console.log('test register');
            /*vm.dataLoading = true;

            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });*/
        }
        
	}


})();