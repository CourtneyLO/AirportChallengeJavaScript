describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function(){
    weather = new Weather();
    spyOn(weather, 'condition' ).and.returnValue("sunny")
    airport = new Airport(weather);
    Gatwick = new Airport(weather)
    plane = new Plane()
  });

  it("should initialize the airport with an empty plane array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should initialize the airport with a constant of full capacity of 10", function() {
    expect(airport.FULLCAPACITY).toEqual(10)
  })

  it("allows the plane to land and shows the plane is in the airport", function() {
    airport.landPlane(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("allows the plane to takeoff and shows the plane is no longer in the airport", function() {
    airport.landPlane(plane);
    airport.takeoffPlane();
    expect(airport.planes).toEqual([]);
  });

  it("should return false if sunny", function() {
    expect(airport.isStormy()).toBe(false);
  });

  it("should return a plane inflight status of false when landed", function() {
    airport.landPlane(plane);
    expect(plane.inFlight).toEqual(false);
  });

  it("should return a plane inflight status to true when flying", function() {
    airport.landPlane(plane);
    airport.takeoffPlane();
    expect(plane.inFlight).toEqual(true);
  });

  it("should return which airport a plane is in", function() {
    airport.landPlane(plane);
    expect(plane.airport).toEqual(airport);
  });

});

  describe("When weather is stormy", function() {

    beforeEach(function(){
      spyOn(weather, 'condition' ).and.returnValue("stormy")
      airport = new Airport(weather);
      plane = new Plane()
    });

    it("should throw an error if a plane tries to land i stormy weather", function() {
      expect(function() {airport.landPlane(plane)}).toThrowError("Plane cannot land: the weather is too stormy")
    });

    it("should return true if stormy", function() {
      expect(airport.isStormy()).toBe(true);
    });

    it("should throw an error if a plan tries to take off in stormy weather", function() {
      airport.planes = [plane]
      expect(function() {airport.takeoffPlane()}).toThrowError("Plane cannot take off: The weather is too stormy")
    });

  });

    describe("When airport capacity is full", function(){

      beforeEach(function(){
        spyOn(weather, 'condition' ).and.returnValue("sunny")
        airport = new Airport(weather);

        var i = 0;
        do {
          var plane = new Plane()
          airport.landPlane(plane)
          i++;
        }
        while (i < 10);

      });

      it("should return true if airport capacity if full", function() {
        expect(airport.isFullCapacity()).toBe(true)
      });

      it("should not allow a plane to land if the capacity at the airport it full", function() {
        expect(function() {airport.landPlane(plane)}).toThrowError("Plane cannot land: The airport is full")
      });

      it("capacity should be able to to changed", function() {
        airport = new Airport(weather, 2);
        expect(airport.FULLCAPACITY).toEqual(2);
      });

    });
