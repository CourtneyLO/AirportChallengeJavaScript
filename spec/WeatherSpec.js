describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  })

  it("will return stormy", function() {
    spyOn(weather, "condition").and.returnValue("stormy");
    expect(weather.condition()).toEqual("stormy");
  });

  it("will return sunny", function() {
    spyOn(weather, "condition").and.returnValue("sunny"));
    expect(weather.condition()).toEqual("sunny");
  });

});
