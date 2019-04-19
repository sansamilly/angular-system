
(function(){
      require.config({
            baseUrl: './',
            paths: {
                  jquery: './src/lib/jquery-1.11.3',
                  angular: './src/lib/angular',
                  uiRouter: './src/lib/angular-route'
            },
            shim: {
                  angular: {
                        deps: ['jquery'],
                        exports: 'angular'
                  },
                  uiRouter: {
                        deps: ['angular'],
                        exports: 'uiRouter'
                  }
            }
      })

      require(['src/app'], function(app){
            angular.bootstrap("#app", [app.name]);
      })

})()