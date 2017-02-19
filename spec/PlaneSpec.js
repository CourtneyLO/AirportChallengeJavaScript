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

  it("should raise an error if the plane is in airport but land plane is called", function(){
console.log(plane.inFlight)
    plane.land();
    console.log(plane.inFlight)
    expect(function() {plane.land()}).toThrowError("Plane cannot land: Plan has already landed")
  });

  it("should raise an error if the plane is already in flight but take off is called", function() {
    plane.land();
    plane.takeOff();
    expect(function() {plane.takeOff()}).toThrowError("Plane cannot take off: The plane is already in the air")
  });
});
