describe("Airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it("should initiate the airport with an empty plane array", function() {
    expect(airport.planes).toEqual([]);
  });

});
