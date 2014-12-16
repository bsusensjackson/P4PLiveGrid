// Reference Scripts/app/controller.js

describe('comharCtrl', function() {
  var $httpBackend;
  beforeEach(module('ComharNGApp'));

  var $controller;


  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));
    
  describe('Loading JSON', function() {
    it('Loads JSON with a Title', function() {
      var $scope = {};
      var controller = $controller('comharCtrl', { $scope : $scope })
      $httpBackend.expectGET('Scripts/KPIInfo.js').respond({
        "P4PInfoId":1, 
        "ProgramName":"TCM", 
        "KpiId": "TCM-01-01:",
        "Heading": "Rationale", 
        "Text" : "To measure the continuity of service provided to CBH-funded TCM and ACT members."
      });
      $httpBackend.flush();
      expect($scope.data.Heading).toEqual("Rationale");
      
    });
  });
});