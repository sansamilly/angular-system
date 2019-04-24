define('src/module/dependMod',[
      'src/module/layoutMod',
      'src/module/directiveMod'
], function(layoutMod, directiveMod) {
      'use strict';

      var dependencies = [layoutMod.name, directiveMod.name];
      var module = angular.module("dependMod", dependencies);

      return module;
});