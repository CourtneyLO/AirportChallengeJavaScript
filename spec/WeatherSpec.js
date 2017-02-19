describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  })

  it("should initialize with possible weather conditions", function() {
    expect(weather.POSSIBLECONDITIONS).toEqual(["sunny", "sunny", "stormy", "sunny"])
  });

  it("will return stormy", function() {
    spyOn(weather, "condition").and.returnValue("stormy");
    expect(weather.condition()).toEqual("stormy");
  });

  it("will return sunny", function() {
    spyOn(weather, "condition").and.returnValue("sunny");
    expect(weather.condition()).toEqual("sunny");
  });

});
