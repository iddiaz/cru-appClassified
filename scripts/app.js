angular.module('ngClassifields', ['ngMaterial', 'ui.router'])
   .config(function($mdThemingProvider, $stateProvider){
      $mdThemingProvider.theme('default')
      // .dark();
      // .primaryPalette('green')
      // .accentPalette('orange')

      //ROUTING CONFIG
      $stateProvider
         .state('one', {
            url: '/stateone',
            template: '<h1>State One</h1>'
         })
         .state('two', {
            url: '/statetwo',
            template: '<h1>State Two</h1> <md-button ui-sref="two.more">Go to nested state</md-button><ui-view></ui-view>'
         })
         .state('two.more', {
            url: '/more',
            template: '<p>this is the deeper state</p>'
         })

   })
   .directive('helloWorld', function(){
      return {
         // template: '<h1>Hello, World</h1>'
         template: '<h1>{{message}}</h1>'
      }
   })
