define('src/router',['angular', 'uiRoute'], function(angular, uiRoute) {
      'use strict';

      var module = angular.module("myRouter", ['ui.router']);
      module.config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('main', {
                  url: '/main',
                  templateUrl: 'src/view/content/content.html',
                  controller: 'contentCtrl'
            })
            .state('main.wechat', {
                  url: '/wechat',
                  templateUrl: 'src/view/content/wechat.html',
                  controller: 'wechatCtrl'
            }) 
      });
      return module;
});