<!-- app.js L.Dobrowolski, 16.10.2016 -->

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

  $scope.checkIfTooMuch = function () {

    var howManyItems = 0;
    $scope.fontcolor = "black";
    $scope.borderstyle = "none";

    if ($scope.items == "" || $scope.items === undefined) {
      $scope.message = "Please enter data first";
      $scope.fontcolor = "red";
      $scope.borderstyle = "solid";
    }
    else {
      howManyItems = CountItems($scope.items);
      if (howManyItems <= 3) {
        $scope.message = "Enjoy!";
        $scope.fontcolor = "green";
        $scope.borderstyle = "solid";
      }
      else {
        $scope.message = "Too much!";
        $scope.fontcolor = "green";
        $scope.borderstyle = "solid";
      }
    }
  };
}

function CountItems(items) {
  var arrayOfItems = items.split(',');
  // console.log('First item is: ' + arrayOfItems[0]);
  // console.log('There are ' + arrayOfItems.length + ' items');
  return arrayOfItems.length;
}

})();
