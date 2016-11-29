(function () {
'use strict';

angular.module('myLunchApp', [])

.controller('MyLunchController', MyLunchController);

MyLunchController.$inject = ['$scope'];
function MyLunchController($scope) {

  $scope.dishes = "";

  /** Update the user interface according to the quantity and display messages.
   The myStyle property is used for the CSS part.
   */
  $scope.checkQuantity = function () {

  $scope.message = "";

   var input = $scope.dishes;

   var result = input.split(",");
   var numberOfLunch = result.length;
   var message = "";

   if (input.trim()=="") {
     message = "Please enter data first";
     $scope.myStyle = "please";
   } else if (numberOfLunch>3) {
     message = "Too much!";
     $scope.myStyle = "toomuch";
   } else if (numberOfLunch<=3) {
       message = "Enjoy!";
       $scope.myStyle = "enjoy";
   }

   $scope.message = message;

  };


}


})();
