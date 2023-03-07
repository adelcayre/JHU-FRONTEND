var app = angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.listInput= "";
	$scope.result="";
	$scope.alertType="";
	$scope.check= function (){
		var items=$scope.listInput
			.split(',')
			.filter(item => item.replaceAll(' ', '').length>0);
		console.log(items);
		if($scope.listInput==""){
			$scope.result="Please enter data first";
			$scope.alertType="danger";
		}
		else if(items.length<=3){
			$scope.result="Enjoy!";
			$scope.alertType="success";
		} 
		else{
			$scope.result="Too Much!";
			$scope.alertType="success";
		}
	}
};


