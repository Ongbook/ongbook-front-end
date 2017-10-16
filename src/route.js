(function () {
	'use strict';

	angular
    .module('ongbook')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider',function ($stateProvider,$urlRouterProvider,$locationProvider) {
      // $locationProvider.html5Mode(true);
      $stateProvider
        .state('institutional', {
          url: '/',
          templateUrl:'././views/ongbook/ongbook.html',
          controller: 'institutionalController',
          controllerAs:'vm'
        })
        .state('login', {
          url: '/login',
          templateUrl:'././views/login/login.html'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl:'././views/dashboard/dashboard.html'
        });
        $urlRouterProvider.otherwise('/');
    }])
})();