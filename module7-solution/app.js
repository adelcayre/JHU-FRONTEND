(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	 var buy = this;

	 buy.items = ShoppingListCheckOffService.getBuy();

	 buy.isEmpty = ShoppingListCheckOffService.buyEmpty();

	 buy.checkOff = function(item){
	 	ShoppingListCheckOffService.checkOff(item);
	 } 

}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;

	bought.items = ShoppingListCheckOffService.getBought();

	bought.isEmpty = ShoppingListCheckOffService.boughtEmpty();
	
	bought.isEmpty = !(ShoppingListCheckOffService.getBought().length ? true :  false);

}

function ShoppingListCheckOffService(){
	var service = this;

	var buyList =[{name:'cookies', quantity: 10, pricePerItem: 5}, {name:'cakes', quantity: 4, pricePerItem: 10}, {name:'chocolate', quantity: 40, pricePerItem: 3}];

	var boughtList =[];

	service.checkOff = function(item){
		
		boughtList.push(item);
		buyList.splice(buyList.indexOf(item),1);
	}

	service.getBuy = function(){
		return buyList;
	}

	service.buyEmpty = function() {
		if(buyList.length==0){
			return true;
		}
		return false;
	}

	service.getBought = function(){
		return boughtList;
	}

	service.boughtEmpty = function() {
		if(boughtList.length==0){
			return true;
		}
		return false;
	}



}
})();