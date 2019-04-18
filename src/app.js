define('src/app',['angular', 'src/module/dependMod'], function(angular, dependMod) {
      'use strict';
      
      var module = angular.module("myModule", [dependMod.name]);
      return module;
});