define('src/module/layoutMod',[
      'angular', 
      'src/controller/content/contentCtrl',
      'src/controller/content/wechatCtrl'
], function(angular, contentCtrl, wechatCtrl) {
      'use strict';
      
      var module = angular.module("layoutMod", []);
      module.controller("contentCtrl", contentCtrl);
      module.controller("wechatCtrl", wechatCtrl);
      return module;

});