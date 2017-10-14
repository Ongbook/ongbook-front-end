(function () {
	'use strict';

	angular
    .module('ongbook')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider','$qProvider',function ($stateProvider,$urlRouterProvider,$locationProvider,$qProvider) {
      // $locationProvider.html5Mode(true);
      $stateProvider
        .state('/', {
          url: '/',
          templateUrl:'././views/ongbook/ongbook.html',
          controller: 'institutionalController',
          controllerAs:'vm'
        })
        .state('login', {
          url: '/login',
          templateUrl:'././views/login/login.html',
          controller: 'institutionalController',
          controllerAs:'vm'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl:'././views/dashboard/dashboard.html'
        });
        $urlRouterProvider.otherwise('/');
    }])
})();