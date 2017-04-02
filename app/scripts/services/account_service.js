'use strict';

angular
.module('videoAssignmentApp')
.factory('accountService', function(SaveDetails,GetDetails) {

  var obj = {
    saveDetails: function(params) {
      function success (response) {
        return response;
      }
      function failure (response) {
        return response;
      }
      return SaveDetails.library(params).$promise.then(success,failure);
    },

    getDetails: function(params) {
      function success (response) {
        return response;
      }
      function failure (response) {
        return response;
      }
      return GetDetails.library().$promise.then(success,failure);
    }

  };

  return obj;

});