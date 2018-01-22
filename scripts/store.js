'use strict';
/* global Item, cuid */

const store = (function() {
  const   items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (e){
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  // maybe the return is wrong
  // test with and without 'this'
  const findAndToggleChecked = function(id) {
    let toggled = this.findById(id).checked;
    this.findById(id).checked = !toggled;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (e){
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    // const itemIndex = this.items.findIndex(function(element) {
    //   return element.id === id;
    // });
    // this.items.splice(itemIndex, 1);
    this.items = this.items.filter(element => {
      return element.id !== id;
    });
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}() );