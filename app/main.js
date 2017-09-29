(function() {

//"use strict";

/*
* @author Dipranjan 
* @component based angular 1.5 onwards
*
* @Description
* MyApp route module here with all the dependencies i.e other module and external files
*
*/
angular.module('MyApp',[
		/* External module */
		'ui.router',		
		'oc.lazyLoad',
		/* Internal module */
		'homeModule',		
	]).config(myconfig);

//config with ui routing
myconfig.$inject=['$ocLazyLoadProvider','$stateProvider','$urlRouterProvider','$locationProvider'];
function myconfig($ocLazyLoadProvider,$stateProvider,$urlRouterProvider,$locationProvider){
	
	//Config For ocLazyLoading
    $ocLazyLoadProvider.config({
        'debug': false, // For debugging 'true/false'
        'events': true, // For Event 'true/false'
        'modules': [
	        {
	            name : 'about', 
	            files: ['app/components/about.component.js']
	        },
	        {
	        	name : 'service',
	        	files: ['app/components/service.component.js']
	        },
	        {
	        	name:'detail',
	        	files:['app/components/detail.component.js']
	        },
	        {
	        	name:'contact',
	        	files:['app/components/contact.component.js']
	        }
        ]
    })

    //for routing
	$stateProvider		
		.state('home',{
			url:'/',
			component:'home'
		})
		.state('about',{
			url:'/about',
			component:'about',
	        resolve: {
	            loadMyComponent: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load('about'); // Resolve promise and load before view 
	            }]
	        }
		})
		.state('service',{
			url:'/service',				
			views:{
				'':{
				  component:'service'
				},
				'allService@service':{
					templateUrl:'./app/components/allservice.html'
				}
			},
			resolve: {
	            loadMyComponent: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load('service');
	            }]
	        }	
		})				
		.state('detail',{
			url:'/detail/:id',
			component:'detail',
			resolve:{
				loadMyComponent:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('detail');
				}]
			}
		})
		.state('contact',{
			url:'/contact',						
			views:{
				'':{component:'contact'},
				'columnOne@contact':{template:'columnOne template'},
				'columnTwo@contact':{template:'columnTwo template'}
			},
			resolve: {
	            loadMyComponent: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load('contact');
	            }]
	        }
		})
		.state('contact.form1',{
			url:'/form1',
			templateUrl:'app/components/form1.component.html'
		})
		.state('contact.form2',{
			url:'/form2',
			templateUrl:'app/components/form2.component.html'
		})
		.state('contact.form3',{
			url:'/form3',
			templateUrl:'app/components/form3.component.html'
		})
		.state('contact.form4',{
			url:'/form4',
			templateUrl:'app/components/form4.component.html'
		})
		.state('contact.form5',{
			url:'/form5',
			templateUrl:'app/components/form5.component.html'
		})
		.state('contact.form6',{
			url:'/form6',
			templateUrl:'app/components/form6.component.html'
		})		
		$urlRouterProvider
			.when("/detail", "/service")
			.when('','/')
    		.otherwise('/')

    	//html5 mode true
    	//$locationProvider.html5Mode(true);
    	//$locationProvider.hashPrefix('!');
	}

})();