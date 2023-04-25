( function(){
	'use strict';

	angular.module('data')
	.component('itemsList', {
		templateUrl: 'items-template.html',
		bindings: {
			items: '<',
			}
	});

})();