describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane')
  });

  it("should initiate the airport with an empty plane array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("allows the plane to land and shows the plane is in the airport", function() {
    airport.landPlane(plane)
    expect(airport.planes).toEqual([plane]);
  });

});
