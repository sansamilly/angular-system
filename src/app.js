define('src/app',['angular', 'src/module/dependMod', 'src/router'], function(angular, dependMod, router) {
      'use strict';

      var module = angular.module("myModule", [dependMod.name, router.name]);
      module.run(function($state){
            $state.go('main.wechat');
      })
      module.controller('ctrl', function(){
            
      })
      return module;

});