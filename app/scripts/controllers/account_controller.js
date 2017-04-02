'use strict';

angular.module('videoAssignmentApp')
.controller('AccountCtrl', function(accountService) {

  var vm = this;
  vm.libraryForm = {};
  vm.addedContent= false;

  vm.addVideo = function() {
    debugger;
    var params = {
      "library": {
        title: vm.libraryForm.title,
        youtube_url:vm.libraryForm.url,
        start_time:vm.libraryForm.start_time,
        end_time:vm.libraryForm.end_time
      }
    }

    accountService.saveDetails(params).then(function(response) {
      debugger;
      if (response.status === 201) {
        vm.libraryForm = {};
        vm.addedContent= true;
      } else {

      }

    })


  };

})