(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signUp', {
      url: '/signup',
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/sign-up/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signup',

    })
    .state('public.myInfo', {
      url: '/user',
      templateUrl: '/JHU-FRONTEND/module10-solution/src/public/sign-up/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myinfo',

    });
}
})();
