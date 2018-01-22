'use strict';
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

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById
  };
}() );
