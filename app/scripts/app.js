'use strict';

/**
 * @ngdoc overview
 * @name videoAssignmentApp
 * @description
 * # videoAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('videoAssignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/content/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/my_account', {
        templateUrl: 'views/content/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
