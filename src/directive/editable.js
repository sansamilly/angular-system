define('src/directive/editable',[
      'src/module/directiveMod'
], function(directiveMod) {
      'use strict';
      
      var directive = function($parse){
            var dire = {
                  'restrict': 'A',
                  'require': '?ngModel',
                  'link': link
            }
            return dire;
            function link(scope, $ele, attrs, ctrl){
                  $ele.attr('contenteditable', true);
                  ctrl.$formatters.push(function(value){
                        $parse(attrs.ngModel).assign(scope, value);
                        return value;
                  })

                  ctrl.$render = function(){
                        $ele.html(ctrl.$viewValue);
                  }

                  $ele.on('input', function(){
                        ctrl.$setViewValue($ele[0].innerHTML);
                  })
                  
            }
      }
      directive.$inject = ['$parse'];
      directiveMod.directive("cEditable", directive);
});