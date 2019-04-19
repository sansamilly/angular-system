define('src/module/dependMod',[
      'src/router',
      'src/module/layoutMod',
      'src/module/directiveMod'
], function(router, layoutMod, directiveMod) {
      'use strict';

      var dependencies = [router.name, layoutMod.name, directiveMod.name];
      var module = angular.module("dependMod", dependencies);

      return module;
});