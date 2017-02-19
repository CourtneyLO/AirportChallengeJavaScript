describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function(){
    weather = new Weather();
    spyOn(weather, 'condition' ).and.returnValue("sunny")
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane')
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

  it("should return false if sunny", function() {
    expect(airport.isStormy()).toBe(false)
  })
});

  describe("When weather is stormy", function() {

    beforeEach(function(){
      spyOn(weather, 'condition' ).and.returnValue("stormy")
      airport = new Airport(weather);
      plane = jasmine.createSpy('plane')
    });

    it("should throw an error if a plane tries to land i stormy weather", function() {
      expect(function() {airport.landPlane(plane)}).toThrowError("Plane cannot land: the weather is too stormy")
      expect(airport.planes).toEqual([]);
    });

    it("should return true if stormy", function() {
      expect(airport.isStormy()).toBe(true);
    });

});
