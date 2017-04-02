'use strict';

angular
.module('videoAssignmentApp')
.factory('accountService', function(SaveDetails) {

  var obj = {
    saveDetails: function(params) {
      function success (response) {
        return response;
      }
      function failure (response) {
        return response;
      }
debugger;
      return SaveDetails.library(params).$promise.then(success,failure);
    }
  };

  return obj;

});