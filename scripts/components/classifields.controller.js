(function () {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('classifiedsCtrl', ['$scope', '$http', 'classifiedsFactory', '$mdSidenav', '$mdToast', '$mdDialog',
         function ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            var vm = this;
            
            vm.categories;
            vm.classified;
            vm.classifieds;

            vm.closeSidebar = closeSidebar;
            vm.deleteClassified = deleteClassified;
            vm.editing;
            vm.editClassified = editClassified;
            vm.openSidebar = openSidebar;
            vm.saveClassified = saveClassified;

            classifiedsFactory.getClassifieds().then(function (res) {
               vm.classifieds = res.data;
                vm.categories = getCategories(vm.classifieds);
               // console.log(res);
            });

            var contact = {
               name: 'Ivan Diaz',
               phone: '(555) 555-555',
               email: 'correo@ivandazdiaz.com'
            }

            function openSidebar() {
               $mdSidenav('left').open();
            }
            function closeSidebar() {
               $mdSidenav('left').close();
            }

            function saveClassified(classified) {
               if (classified) {
                  classified.contact = contact;
                  vm.classifieds.push(classified);
                  vm.classified = {};
                  closeSidebar();
                  showToast('Classified Save!')

               };
            }

            function editClassified (classified) {
               vm.editing = true;
               openSidebar();
               vm.classified = classified;
            }

            function saveEdit() {
               vm.editing = false;
               vm.classified = {};
               closeSidebar();
               showToast('Edit Save!')
            }

            function deleteClassified (event, classified) {

               var confirm = $mdDialog.confirm()
                  .title('Are you sure you want to delete' + classified.title + '?')
                  .ok('Yes')
                  .cancel('No')
                  .targetEvent(event);

               $mdDialog.show(confirm).then(function () {
                  var index = vm.classifieds.indexOf(classified);
                  vm.classifieds.splice(index, 1);

               }, function () {
                  //case no
               })

            }

            function showToast(message) {
               $mdToast.show(
                  $mdToast.simple()
                     .content(message)
                     .position('top, right')
                     .hideDelay(3000)
               );
            }

            function getCategories(classifieds) {
               var categories = [];
               angular.forEach(classifieds, function (item) {
                  angular.forEach(item.categories, function(category){
                     categories.push(category);

                  });
               });
               //libreria lodash retorna la categoria que se necesita
               return _.uniq(categories);
            }

         }]);


})();