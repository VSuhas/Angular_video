'use strict';

angular.module('videoAssignmentApp')
.controller('AccountCtrl',[ 'accountService','$scope', function(accountService, $scope) {

  var vm = this;
  vm.libraryForm = {};
  vm.addedContent= false;

  $scope.videoUrl = 'https://www.youtube.com/watch?v=79DijItQXMM';

  vm.addVideo = function() {
   var params = {
    "library": {
      title: vm.libraryForm.title,
      youtube_url:vm.libraryForm.url,
      start_time:vm.libraryForm.start_time,
      end_time:vm.libraryForm.end_time
    }
  }

  accountService.saveDetails(params).then(function(response) {
    if (response.status === 201) {
      vm.libraryForm = {};
      vm.addedContent= true;
    } else {

    }

  })


};

$scope.looper = 'VvTvtIeXJ1I';

$scope.$on('youtube.player.ended', function ($event, player) {
    // play it again
    player.playVideo();
  });

}])