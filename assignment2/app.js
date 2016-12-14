(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyCtrl.itemName = "";
  toBuyCtrl.itemQuantity = "";

  toBuyCtrl.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  toBuyCtrl.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };




}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();

  boughtCtrl.itemName = "";
  boughtCtrl.itemQuantity = "";


}


function ShoppingListCheckOffService() {

  var service = this;
 
  var initialList = [
    {
            name: "Cookies",
            quantity: 3
    },
    {
            name: "Peanuts",
            quantity: 2
    },
    {
            name: "Cakes",
            quantity: 4
    },
    {
            name: "Drinks",
            quantity: 20
    },
    {
            name: "Meat",
            quantity: 5
    }

  ]

  // List of shopping items
  var toBuyItems = initialList;
  var boughtItems = [];

  service.addBoughtItem = function (item) {
      boughtItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.moveItem = function (itemIndex) {
    var removedItem = toBuyItems[itemIndex];
    // var removedItem =
    toBuyItems.splice(itemIndex, 1);
    console.log ("Moving the item : " + removedItem );
    service.addBoughtItem(removedItem);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };


}

})();
