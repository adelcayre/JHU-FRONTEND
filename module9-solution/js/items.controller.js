( function(){
	'use strict';

	angular.module('data')
	.controller('ItemsController', ItemsController)


	ItemsController.$inject = ['category'];
	function ItemsController(category){
		var menu=this;

		menu.categoryInfo=category;
		
		
		};
})();


