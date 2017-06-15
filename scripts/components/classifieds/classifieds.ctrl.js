(function () {
   'use strict';

   angular
      .module('ngClassifields')
      .controller('classifiedsCtrl', ['$scope', '$http', '$state', 'classifiedsFactory', '$mdSidenav', '$mdToast', '$mdDialog',
         function ($scope, $http, $state, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            var vm = this;

            // //Emiting data options
            // $scope.$on
            // $scope.$broadcast
            // $scope.$emit
            
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

            $http.get('https://api.github.com/users').then(function(res){
               console.log(res);
            })

            //ejemplo de recepción del valor comunicado
            // $scope.$on('myMessage', function(event, message){
            //       console.log(message);
            // })

            $scope.$on('newClassified', function(event, classified){
               classified.id = vm.classifieds.length + 1;
               vm.classifieds.push(classified);
               showToast('classified saved!');
            });

            $scope.$on('editSaved', function(event, message){
               showToast(message)
            });

            var contact = {
               name: 'Ivan Diaz',
               phone: '(555) 555-555',
               email: 'correo@ivandazdiaz.com'
            }

            function openSidebar() {
               $state.go('classifieds.new');
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
               // vm.editing = true;
               // openSidebar();
               // vm.classified = classified;
               $state.go('classifieds.edit', {
                  id: classified.id,
                  classified: classified
               });
               
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