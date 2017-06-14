angular.module('ngClassifields', ['ngMaterial', 'ui.router'])
   .config(function($mdThemingProvider, $stateProvider){
      $mdThemingProvider.theme('default')
      // .dark();
      // .primaryPalette('green')
      // .accentPalette('orange')

      //ROUTING CONFIG
      $stateProvider
         .state('classifieds', {
            url: '/classifieds',
            templateUrl: 'scripts/components/classifieds/classifieds.tpl.html',
            controller: 'classifiedsCtrl as vm'
         })
         .state('classifieds.new', {
            url: '/new',
            templateUrl: 'scripts/components/classifieds/new/classifieds.new.tpl.html',
            controller: 'newClassifiedsCtrl as vm'
         })

   })
  
