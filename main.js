
(function(){
      require.config({
            baseUrl: './',
            paths: {
                  jquery: './src/lib/jquery-1.11.3',
                  angular: './src/lib/angular',
                  uiRoute: './src/lib/angular-route'
            },
            shim: {
                  angular: {
                        deps: ['jquery'],
                        exports: 'angular'
                  },
                  uiRoute: {
                        deps: ['angular'],
                        exports: 'uiRoute'
                  }
            }
      })

      require(['src/app'], function(app){
            angular.bootstrap("body", [app.name]);
      })

})()