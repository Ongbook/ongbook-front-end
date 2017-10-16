(function () {
  'use strict';

  angular.module('ongbook',[
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'toaster',
    'ui.bootstrap'
  ])
  .constant('apiUrl','https://ongbook-api-strapi-dev.herokuapp.com/');
  
})();