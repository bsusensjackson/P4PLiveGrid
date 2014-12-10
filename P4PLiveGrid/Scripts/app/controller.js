var cormhairApp = angular.module('cormhairApp', []);

cormhairApp.controller('cormhairCtrl', ['$scope', '$http',
  function ($scope, $http){
  $http.get('/Scripts/KPIInfo.json').success(function(data) {
    $scope.data = angular.fromJson(data);
  });
}]);


angular.module('cormhairApp').directive('jqueryCreate', function() {
 return {
 link: function($scope, $element, $attr) {
    $element.parent().trigger('create');
  }
  };
});


  





