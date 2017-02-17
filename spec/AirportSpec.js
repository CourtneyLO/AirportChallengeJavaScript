describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    weather = new Weather();
    plane = jasmine.createSpy('plane')
    // spyOn(weather, 'condition' ).and.Return("sunny")
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

  it("does not allow plane to land when it is stormy", function() {
    spyOn(weather, "condition" ).andReturn("stormy")
    airport.landPlane(plane);
    expect(airport.planes).toEqual([]);
  });

});
