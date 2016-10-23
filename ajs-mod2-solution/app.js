<!-- app.js - Single Page Web Applications with AngularJS 2nd assignment -->
<!-- L.Dobrowolski, 24.10.2016 -->

(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.markAsBought = function (itemIndex) {
    ShoppingListCheckOffService.markAsBought(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [{ 
                      name: "cookies",
                      quantity: 10
                   },
                   {
                      name: "yoghurt",
                      quantity: 5
                   },
                   {
                      name: "apple juice",
                      quantity: 3
                   },
                   {
                      name: "chocolate bars",
                      quantity: 4
                    },
                   {
                      name: "corn flakes",
                      quantity: 7
                   },
                   {
                      name: "Haribo gummi bears",
                      quantity: 20
                   }];

  var alreadyBoughtItems = [];

  service.markAsBought = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    alreadyBoughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
