function Airport(weather) {
  this.planes = [];

  this.weather = weather;
};

  Airport.prototype.landPlane = function(plane) {
    if (!this.isStormy()) {
      return this.planes.push(plane);
    }

  };

  Airport.prototype.takeoffPlane = function(plane) {
    delete this.planes[plane];
  };

  Airport.prototype.isStormy = function() {
    weather.condition() == "stormy"
  };
