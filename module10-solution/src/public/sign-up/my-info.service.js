(function() {
  'use strict';

  angular.module('public')
    .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;
    service.myInfo={};

    service.setMyInfo = function(info) {
      service.myInfo = info;
    };

    service.getMyInfo = function() {
      return service.myInfo;
    };
  }
})();