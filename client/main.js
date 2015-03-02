'use strict';

(function() {
  /* create address book data */
  var contacts = {
    'addressBook' : [
      {
        'name': 'hillisha',
        'email': 'hill@example.com',
      },
      {
        'name': 'paul',
        'email': 'cleveland@example.com',
      },
      {
        'name': 'vishaal',
        'email': 'vish@example.com',
      },
      {
        'name': 'mike',
        'email': 'grady@example.com',
      },
      {
        'name': 'jamie',
        'email': 'dusted@example.com',
      }
    ]
  };

  /* define the DOM elements and common variables you'll need */
  var searchForm = document.getElementById('search-form'),
      searchField = document.getElementById('q'),
      getAllButton = document.getElementById('get-all'),
      count = contacts.addressBook.length,
      target = document.getElementById('output');

  /* define address book methods */
  var addr = {
    search: function(event) {
      // save the input value, contacts length and i to variables
      var searchValue = searchField.value;
      var i;
      // stop the default behavior
      event.preventDefault();
      // clear the target area just in case there's something in it.
      target.innerHTML = '';

      if (count > 0 && searchValue !== '') {
        for (i = 0; i < count; i++) {
          // look through the name value to see if it contains the searchterm
          var obj = contacts.addressBook[i];
          var isItFound = obj.name.indexOf(searchValue);
          // anything other than -1 means we found a match
          if (isItFound !== -1) {
            target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
          }
        }
      }
    },

    getAllContacts : function () {
      var i;
      target.innerHTML = '';

      if (count > 0) {
        for (i = 0; i < count; i++) {
          var obj = contacts.addressBook[i];
          target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' +
          obj.email + '">'+ obj.email +'</a><p>';
        }
      }
    },

    setActiveSection : function() {
      this.parentNode.setAttribute('class', 'active');
    },

    removeActiveSection : function() {
      this.parentNode.removeAttribute('class');
    },

    addHoverClass : function() {
      searchForm.setAttribute('class', 'hovering');
    },

    removeHoverClass : function() {
      searchForm.removeAttribute('class');
    }
  };

  searchField.addEventListener('keyup', addr.search, false);
  searchField.addEventListener('focus', addr.setActiveSection, false);
  searchField.addEventListener('blur', addr.removeActiveSection, false);
  getAllButton.addEventListener('click', addr.getAllContacts, false);
  searchForm.addEventListener('mouseover', addr.addHoverClass, false);
  searchForm.addEventListener('mouseout', addr.removeHoverClass, false);
  searchForm.addEventListener('submit', addr.search, false);
})();
