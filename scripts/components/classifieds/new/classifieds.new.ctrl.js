(function() {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('newClassifiedsCtrl', newClassifiedsCtrl);

   newClassifiedsCtrl.$inject = ['$mdSidenav','$timeout', '$mdDialog', 'classifiedsFactory'];
   function newClassifiedsCtrl ($mdSidenav, $timeout, $mdDialog, classifiedsFactory ) {
      
      var vm = this;

      //Uso $timeout para poder hacer un callback y llamar al sservicio $mdSidenav para que abra el submenu una vez ejecutado el componente,
      //si no diria que no lo encuentra, ya qye no existe el tpl cargado en el momento de llamar al servicio de submenu.
      $timeout(function(){
         $mdSidenav('left').open();
      },100);

      

      activate();

      ////////////////

      function activate() { }
   }
})();