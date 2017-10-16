(function () {
  'use strict';
  angular
    .module('ongbook')
    .controller('institutionalController', institutionalController );
    
    institutionalController.$inject = ['$uibModal','registerServiceApi','toaster','$state'];
    function institutionalController($uibModal,registerServiceApi,toaster,$state) {
      var vm = this;
	    vm.register = register;

      function register() {
        var modalInstance = $uibModal.open({
          templateUrl: '../../../views/register/register.html',
          size:'md',
          backdrop:false,
          controller: function ($uibModalInstance) {
            var modal = this;
            modal.cancel = cancel;
            modal.sendRegister = sendRegister;
 
            function cancel() {
              modalInstance.close();
            }
 
            function sendRegister(objParam) {
              registerServiceApi.registerUser( objParam ).then(function (res) {
                if( res.data.jwt ){
                  modalInstance.close();
                  setTimeout(function(){
                    $state.go('login');
                    toaster.pop(
                      'success',
                      'Sucesso',
                      'Cadastro efetuado com sucesso',
                      1500
                    );
                  },1500);
                } else {
                  toaster.pop('error','Dados incorretos','Revise as informações digitadas.',3000);
                }
              });
            }
          },
          controllerAs: 'modal'
        });
      }      
    }
})();