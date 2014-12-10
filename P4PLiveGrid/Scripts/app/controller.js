var funApp = angular.module('funApp', []);

funApp.controller('myCont', function($scope, $http){
  $http.get('/Scripts/KPIInfo.json').success(function(data) {
    $scope.data = angular.fromJson(data);
  });
 });
angular.module('funApp').directive('jqueryCreate', function() {
  return {
    link: function($scope, $element, $attr) {
        $element.parent().trigger('create');
     }
  };
 
});
  





