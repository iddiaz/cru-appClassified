(function() {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('newClassifiedsCtrl', newClassifiedsCtrl);

   newClassifiedsCtrl.$inject = ['$scope', '$timeout', '$state', '$mdSidenav', '$mdDialog', 'classifiedsFactory'];
   function newClassifiedsCtrl ( $scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory ) {
      
      var vm = this;
      //hace conocida la funcion del controlador en el template
      vm.closeSidebar = closeSidebar;
      vm.saveClassified = saveClassified;

      //Uso $timeout para poder hacer un callback y llamar al sservicio $mdSidenav para que abra el submenu una vez ejecutado el componente,
      //si no diria que no lo encuentra, ya qye no existe el tpl cargado en el momento de llamar al servicio de submenu.
      $timeout(function(){
         $mdSidenav('left').open();
      });

      // Ejemplo de configuracion de un watcher
      // $scope.$watch('vm.valueToChange', function( value ){
      //    if( value=== 2) {
      //       console.log('value changed to 2');
      //    }
      // })
      // vm.valueToChange = 1;

      // $timeout( function(){
      //    vm.valueToChange = 2;
      // }, 2000 );

      // controla el evento de redireccion para que navege a la ruta anterior en caso de que se haga click fuera del submenu y se cierre.
      $scope.$watch('vm.sidenavOpen', function( sidenav ){
         if( sidenav === false ){
            $mdSidenav('left').close()
            .then(function(){
               $state.go('classifieds');
            })
         }
      });

      //click cerrar submenu
      function closeSidebar(){
         vm.sidenavOpen = false;
      }

      //ejemplo de emision de dato
      // vm.sendMessage = function(){
      //    $scope.$emit('myMessage', 'Hey how are you?')
      // }

      function saveClassified( classified ) {
         
         if( classified ) {
             
            classified.contact = {
               name: 'Ivan Diaz',
               phone: '(555) 555-555',
               email: 'correo@ivandazdiaz.com'
            }

            $scope.$emit('newClassified', classified );
            vm.sidenavOpen = false;
         }
      }



      

   
   }
})();