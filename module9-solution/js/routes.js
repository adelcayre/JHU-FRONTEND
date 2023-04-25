(function () {


angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('https://adelcayre.github.io/JHU-FRONTEND/module9-solution');



  // Set up UI states
  $stateProvider
    .state ('home', {
      url:'https://adelcayre.github.io/JHU-FRONTEND/module9-solution/',
      templateUrl:'/JHU-FRONTEND/module9-solution/home.html'
    })
    .state('categories', {
      url: 'https://adelcayre.github.io/JHU-FRONTEND/module9-solution/categories',
      templateUrl: '/JHU-FRONTEND/module9-solution/categories.html',
      controller: 'CategoriesController as menu'
    })

    .state('items', {
      url: 'https://adelcayre.github.io/JHU-FRONTEND/module9-solution/items/*categoryShortName',
      templateUrl: '/JHU-FRONTEND/module9-solution/items.html',
      controller: 'ItemsController as menu',
      resolve: {
        category:['$stateParams', 'MenuDataService', function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
          .then(function(response){
            return response.data;
          });
        }]
      }

    });
}


})();
