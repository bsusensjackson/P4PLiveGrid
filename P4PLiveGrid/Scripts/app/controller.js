var ComharNGApp = angular.module('ComharNGApp', []);

ComharNGApp.controller('comharCtrl', ['$scope', '$http',
  function ($scope, $http){
  $http.get('Scripts/KPIInfo.js').success(function(data) {
    $scope.data = angular.fromJson(data);
  });
}]);


angular.module('ComharNGApp').directive('jqueryCreate', function() {
 return {
 link: function($scope, $element, $attr) {
    $element.parent().trigger('create');
  }
  };
});


  





