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

  Airport.prototype.takeoffPlane = function() {
    if (this.isStormy()) {
      throw new Error("Plane cannot take off: The weather is too stormy")
    } else {
      return this.planes.pop();
    }
  };

  Airport.prototype.isStormy = function() {
    return this.weather.condition() == "stormy"
  };
