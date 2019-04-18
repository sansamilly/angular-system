
(function(){
      require.config({
            baseUrl: './',
            paths: {
                  jquery: './src/lib/jquery-1.11.3',
                  angular: './src/lib/angular',
                  router: './src/lib/angular-route'
            },
            shim: {
                  angular: {
                        deps: ['jquery'],
                        exports: 'angular'
                  },
                  router: {
                        deps: ['angular'],
                        exports: 'router'
                  }
            }
      })

      require(['src/app'], function(app){
            angular.bootstrap("#app", [app.name]);
      })

})()