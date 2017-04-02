'use strict';

angular
.module('videoAssignmentApp')
.factory('SaveDetails', function ($resource, ENV) {
debugger;

  return $resource(ENV.api_path + "api/v1/library",
  {
    format: 'json'
  },
  {
    library: {
      method: "Post",
      headers: { 'Content-Type': 'application/json' },
      url: ENV.api_path + "api/v1/library/create"
    }

  });
});



