define('src/module/layoutMod',[
      'angular', 
      'src/controller/content/contentCtrl'
], function(angular, contentCtrl) {
      'use strict';
      
      var module = angular.module("layoutMod", []);
      module.controller("contentCtrl", contentCtrl);
      return module;

});