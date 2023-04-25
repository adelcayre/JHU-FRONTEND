(function () {


angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');



  // Set up UI states
  $stateProvider
    .state ('home', {
      url:'/',
      templateUrl:'/JHU-FRONTEND/module9-solution/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: '/JHU-FRONTEND/module9-solution/categories.html',
      controller: 'CategoriesController as menu'
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: '/JHU-FRONTEND/module9-solution/items.html',
      controller: 'ItemsController as menu',
      resolve: {
        category:['$stateParams', 'MenuDataService', function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
          .then(function(response){
            console.log($stateParams.categoryShortName);
            return response.data;
          });
        }]
      }

    });
}


})();
