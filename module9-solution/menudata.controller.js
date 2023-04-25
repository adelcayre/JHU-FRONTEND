( function(){
	'use strict';

	angular.module('data')
	.controller('CategoryController', DataController)


	DataController.$inject = ['MenuDataService'];
	function DataController(MenuDataService) {
		var menu=this;

		var promise = MenuDataService.getAllCategories();

		promise.then(function(response){
			menu.categories = response.data;
		})
		.catch(function(error){
			console.log(oof);
		});
	}
})();