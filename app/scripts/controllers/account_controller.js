'use strict';

angular.module('videoAssignmentApp')
.controller('AccountCtrl',[ 'accountService','$scope', function(accountService, $scope) {

  var vm = this;
  vm.libraryForm = {};

  $scope.videoUrl = 'https://www.youtube.com/watch?v=79DijItQXMM';


accountService.getDetails().then(function(response) {
  $scope.mylist = [];
  $scope.mylist = response.data;
})

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