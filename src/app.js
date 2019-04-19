define('src/app',['angular', 'src/module/dependMod', 'src/router'], function(angular, dependMod, router) {
      'use strict';
 
      var module = angular.module("myModule", [dependMod.name, router.name]);
      module.controller('ctrl', function($scope){
            $scope.name = "Sandy";
            $scope.signature = "I'm just a lovely cat.";
            $scope.userMsg = "I'm just a lovely cat.";
            $scope.messages = [
                  {
                        isMe: false,
                        name: "Emily",
                        time: new Date().getTime(),
                        msg: "Hello!"
                  },
                  {
                        isMe: true,
                        name: "Sandy",
                        time: new Date().getTime(),
                        msg: "Hi！"
                  },
                  {
                        isMe: false,
                        name: "Emily",
                        time: new Date().getTime(),
                        msg: "Are you free now?"
                  }
            ]
            $scope.sendMsg = function(){
                  $scope.messages.push({
                        isMe: true,
                        name: "Emily",
                        time: new Date().getTime(),
                        msg: $scope.userMsg
                  })
                  $scope.userMsg = '';
            }
      })
      return module;

});