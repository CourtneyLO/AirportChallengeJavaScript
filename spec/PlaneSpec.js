describe("Plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it("should be initialized as in flight", function(){
    expect(plane.inFlight).toEqual(true);
  });
});
