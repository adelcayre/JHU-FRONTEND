(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var $ctrl = this;
  $ctrl.info=MyInfoService.getMyInfo();
  console.log($ctrl.info.menuItemCategory);

}


})();