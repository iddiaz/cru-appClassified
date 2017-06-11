(function() {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('classifieldCtrl', ['$scope', function( $scope ){
         
         $scope.name = {
               first: 'Ivan',
               last: 'Diaz'
         }

      }]);


})();