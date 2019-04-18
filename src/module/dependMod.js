define('src/module/dependMod',[
      'src/router',
      'src/module/layoutMod'
], function(router, layoutMod) {
      'use strict';

      var dependencies = [router.name, layoutMod.name];
      var module = angular.module("dependMod", dependencies);

      return module;
});