//Reference dashboard-1.0.0.js
jasmine.getFixtures().fixturesPath = '/';
describe("fixDates()", function() {
  it("should return an array of fixed dates", function() {
    var encounterData = [{ "P4PSummaryId": 1, 
                            "ProgramName": "TCM", 
                            "KpiId": "TCM-01-01", 
                            "Clinician": "Nancy Jones", 
                            "PatientId": "101123", 
                            "PatientName": "Joe Balagio", 
                            "EncounterStartDate": "2014-01-05T00:00:00", 
                            "EncounterEndDate": "2014-02-10T00:00:00", 
                            "ElapsedDays": 34 
                            }]
    fixedDates = fixDates(encounterData);
    expect(fixedDates[0].EncounterStartDate instanceof Date).toBe(true)

  });
});

//describe("colorData()", function() {
//  it("should color in the time elapsed column", function() {
//    loadFixtures('index.html');
//    colorData();
//    firstDay = $('.elapsedDays')[0]
//    expect(firstDay).nottoHaveCss({background: '#ffffff'});
//  });
//});
//

