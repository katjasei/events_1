'use strict';

function asTabs(node) {
  
  var childElements = document.querySelectorAll('[data-tabname]');
  var tabs = [];
  for (var i = 0; i < childElements.length; i++) {
    tabs.push(childElements[i]);
  }
  
  var buttonList = document.createElement('div');
  tabs.forEach(function(tab, index) {
    
    var button = document.createElement('button');
    var buttonText = document.createTextNode(tab.dataset.tabname);
    button.appendChild(buttonText);
    buttonList.appendChild(button);
    button.addEventListener('click', function() {
      selectTab(index);
    });
  });
  node.insertBefore(buttonList, node.firstChild);

  
  function selectTab(index) {
    tabs.forEach(function(tab, i) {
      if (index == i) {
        tab.style.display = '';
      } else {
        tab.style.display = 'none';
      }
    });
  }

  selectTab(0); 
}

asTabs(document.querySelector("tab-panel"));
