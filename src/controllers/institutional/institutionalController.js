(function () {
  'use strict';
  angular
    .module('ongbook.controllers')
    .controller('institutionalController', institutionalController );
    
    institutionalController.$inject = ['$uibModal'];
    function institutionalController($uibModal) {
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
            // modal.sendRegister = sendRegister;
 
            function cancel() {
              modalInstance.close();
            }
 
            // function sendRegister(objParam) {
            //   if (objParam) {
            //     registerServiceApi.registerUser(objParam)
            //       .then(function (response) {
            //         if(response.data.jwt){
            //           modalInstance.close();
            //           toaster.pop('success','Sucesso','Cadastro efetuado com sucesso',2000);
            //           setTimeout(function(){
            //             $state.go('login');
            //           },2000);
            //         } else {
            //           toaster.pop('error','Dados incorretos','Revise as informações digitadas.',3000);
            //         }
            //       });
            //   }
            // }
          },
          controllerAs: 'modal'
        });
      }

      
    }
})();