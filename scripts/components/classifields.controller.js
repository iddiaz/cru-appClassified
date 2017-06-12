(function () {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('classifieldCtrl', ['$scope', '$http', 'classifiedsFactory','$mdSidenav','$mdToast', '$mdDialog',
         function ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog ) {
         
         var contact = {
            name: 'Ivan Diaz',
            phone: '(555) 555-555',
            email: 'correo@ivandazdiaz.com'
         }
         
         classifiedsFactory.getClassifieds().then(function(res){
            $scope.classifieds = res.data;
            // console.log(res);
         });

         
         $scope.openSidebar = function (){
            $mdSidenav('left').open();
         }
         $scope.closeSidebar = function (){
            $mdSidenav('left').close();
         }

         $scope.saveClassified = function( classified ){
            if(classified){
               classified.contact = contact;
               $scope.classifieds.push( classified );
               $scope.classified = {};
               $scope.closeSidebar();
               showToast('Classified Save!')
               
            };
         }

         $scope.editClassified = function ( classified ){
            $scope.editing = true;
            $scope.openSidebar();
            $scope.classified = classified;
         }

         $scope.saveEdit = function (){
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSidebar();
            showToast('Edit Save!')
         }

         $scope.deleteClassified = function( event, classified ){

            var confirm = $mdDialog.confirm()
               .title('Are you sure you want to delete' + classified.title + '?')
               .ok('Yes')
               .cancel('No')
               .targetEvent(event);
            
            $mdDialog.show(confirm).then(function(){
               var index = $scope.classifieds.indexOf( classified );
               $scope.classifieds.splice( index, 1 );

            }, function(){
               //case no
            })
          
         }

         function showToast(message){
            $mdToast.show(
               $mdToast.simple()
                  .content(message)
                  .position('top, right')
                  .hideDelay(3000)
            );
         }

      }]);


})();