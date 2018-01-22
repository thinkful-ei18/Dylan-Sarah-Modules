/* global shoppingList, cuid, store */

// eslint-disable-next-line no-unused-vars
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  console.log(store.findById(1));
});



