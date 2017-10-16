
(function () {
  'use strict';
	angular
	.module('ongbook')
	.factory('registerServiceApi',registerServiceApi);
  
	registerServiceApi.$inject = ['$http','apiUrl'];
  
	function registerServiceApi( $http, apiUrl ) {
    
    var _registerUser = function ( objParam ) {
			return $http.post( apiUrl + 'auth/local/register', objParam );
		};

		return {
			registerUser:_registerUser
		};
	}
})();