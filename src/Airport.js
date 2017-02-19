function Airport(weather) {
  this.planes = [];
  this.weather = weather;
};

  Airport.prototype.landPlane = function(plane) {
    if (this.isStormy()) {
      throw new Error("Plane cannot land: the weather is too stormy")
    } else {
      return this.planes.push(plane);
    }

  };

  Airport.prototype.takeoffPlane = function(plane) {
    delete this.planes[plane];
  };

  Airport.prototype.isStormy = function() {
    return this.weather.condition() == "stormy"
  };
