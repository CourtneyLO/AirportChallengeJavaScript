describe("Plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should be initialized as in flight", function(){
    expect(plane.inFlight).toEqual(true);
  });

  it("should change the inFlight status of the plane when it lands", function() {
    plane.land();
    expect(plane.inFlight).toEqual(false);
  });

  it("should change the inFlight status of the plane to when it takes off", function() {
    plane.land();
    plane.takeOff();
    expect(plane.inFlight).toEqual(true);
  });
});
