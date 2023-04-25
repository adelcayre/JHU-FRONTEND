( function(){
	'use strict';

	angular.module('data')
	.controller('CategoriesController', CategoriesController)


	CategoriesController.$inject = ['MenuDataService'];
	function CategoriesController(MenuDataService) {
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