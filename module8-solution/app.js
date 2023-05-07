( function(){
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItems);





	NarrowItDownController.$inject =['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrow=this;

		narrow.search="";

		narrow.showResult=false;

		narrow.found=[];


		narrow.narrowItDown = function(){
			narrow.found=MenuSearchService.getMatchedMenuItems(narrow.search).then( function (response){
				if(narrow.search.length==0){
					narrow.found=[];
					
				}
				else{
					narrow.found=response;

				}
				narrow.showResult=true;
			});
		};

		narrow.remove = function(index){
			narrow.found.splice(index,1);
		};
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service=this;

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				method: "GET",
				url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
			}).then(function (response){
				var foundItems=[];
				for(let i in response.data){
					for(let j in response.data[i].menu_items){
						if(!foundItems.includes(response.data[i].menu_items[j].name)&&response.data[i].menu_items[j].description.includes(searchTerm)){
							foundItems.push(response.data[i].menu_items[j].name);
						}
					}
				};

			return foundItems;
			}).catch(function (error) {
		    console.log("Something went terribly wrong.");
		  });
		};


		
	}

  function FoundItemsDirectiveController() {
  var list = this;
  }

	

	function foundItems() {
	  var ddo = {
	    templateUrl: 'found.html',
	    scope: {
	      items: '<',
	      onRemove: '&'

	    },
	    controller: FoundItemsDirectiveController,
	    controllerAs: 'list',
	    bindToController: true
	  };

	  return ddo;
	}

	
})();