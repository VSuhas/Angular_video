'use strict';

angular.module('videoAssignmentApp')
.controller('LoginCtrl', function ($location) {

  var vm = this;
  vm.account = {};
  vm.invalidCredentials = false;


  vm.login = function() {
    vm.authMsg = '';
    if(vm.loginForm.$valid) {

      // When we use any API to pass these parameters, then the below block makes sense.

      // var params = {
      //   "user": {
      //     email: vm.account.email,
      //     password: vm.account.password
      //   }
      // };

      // since API usage is not in picture as of now, conditions are checked for a pre-defined input.

      if (vm.account.email === 'raj@videoken.com' && vm.account.password === 'videoken123') {
        $location.path("/my_account")
      } else {
        vm.invalidCredentials = true;
        $location.path("/")
      }

    }
    else {
      vm.loginForm.account_email.$dirty = true;
      vm.loginForm.account_password.$dirty = true;
    }
  };
});
