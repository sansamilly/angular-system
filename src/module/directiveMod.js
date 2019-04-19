require(['src/directive/editable']);

define('src/module/directiveMod',[
    'angular'
], function(angular) {
      'use strict';
      var module = angular.module("directiveMod", []);
      return module;
});