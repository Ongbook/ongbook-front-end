(function () {
  'use strict';

  angular.module('ongbook.controllers',[]);
  angular.module('ongbook.directives',[]);
  

  angular.module('ongbook',[
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ongbook.controllers',
    'ongbook.directives'
  ]);
  
})();