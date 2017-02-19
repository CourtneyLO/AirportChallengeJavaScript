describe("Airport", function() {
  var airport;

  beforeEach(function(){
    weather = new Weather();
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane')
    spyOn(weather, 'condition' ).and.returnValue("sunny")
  });

  it("should initiate the airport with an empty plane array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("allows the plane to land and shows the plane is in the airport", function() {
    airport.landPlane(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("allows the plane to takeoff and shows the plane is no longer in the airport", function() {
    airport.takeoffPlane(plane);
    expect(airport.planes).toEqual([]);
  });


});
