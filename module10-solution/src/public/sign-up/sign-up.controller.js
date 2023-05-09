(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService'];
function SignUpController (MenuService, MyInfoService) {
  var info = this;

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match used for parsing dish input from html form

  info.register = function () {
    var dishInfo = info.dish.match(/[a-zA-Z]+|[0-9]+/g);
    var promise=MenuService.getMenuItem(dishInfo[0], dishInfo[1]-1);
    promise.then(function(response){
      if(response==null){
      info.success=-1;
    }
    else{
      info.user.menuItemCategory=dishInfo[0];
      info.user.menuItem=response;
      console.log(response);
      info.success=1;
      MyInfoService.setMyInfo(info.user);
    }
  })
  };

  info.checkDishExists= function(){
    var dishInfo = info.dish.match(/[a-zA-Z]+|[0-9]+/g);
    var promise=MenuService.getMenuItem(dishInfo[0], dishInfo[1]-1);
    promise.then(function(response){
      if(response==null){
        info.success=-1;
      }
      else{
        info.success=0;
      }
    });
  }

  
}

})();
