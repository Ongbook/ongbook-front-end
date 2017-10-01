(function () {
  'use strict';

  angular.module('ongbook.controllers',[]);
  angular.module('ongbook.directives',[]);
  

  angular.module('ongbook',[
    'ui.router',
    'ongbook.controllers',
    'ongbook.directives'
  ]);
  
})();