angular.module('ngClassifields', ['ngMaterial', 'ui.router'])
   .config(function($mdThemingProvider, $stateProvider){
      $mdThemingProvider.theme('default')
      // .dark();
      // .primaryPalette('green')
      // .accentPalette('orange')

      //ROUTING CONFIG
      $stateProvider
         .state('stateone', {
            url: '/stateone',
            template: '<h1>State One</h1>'
         })
         .state('statetwo', {
            url: '/statetwo',
            template: '<h1>State Two</h1>'
         })

   })
   .directive('helloWorld', function(){
      return {
         // template: '<h1>Hello, World</h1>'
         template: '<h1>{{message}}</h1>'
      }
   })
