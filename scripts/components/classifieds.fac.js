//sintaxis 1
// (function() {
//    'use strict';

//    angular
//       .module('ngClassifields')
//       .factory('classifiedsFactory', ['$http', function($http){

//         function getClassifieds() { 
//             return $http.get('data/classifieds.json');
//          }

//          return {
//             getClassifieds: getClassifieds
//          };

//       }]);  



// })();

//Sintaxis 2
(function () {
   'use strict';

   angular
      .module('ngClassifields')
      .factory('classifiedsFactory', classifiedsFactory);

   classifiedsFactory.$inject = ['$http'];
   function classifiedsFactory($http) {
      var service = {
         getClassifieds: getClassifieds
      };

      return service;

      ////////////////
      function getClassifieds() {
         return $http.get('data/classifieds.json');
      }
   }
})();