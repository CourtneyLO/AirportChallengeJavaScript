function Airport(weather, capacity) {
  this.planes = [];
  this.weather = weather;
  this.FULLCAPACITY = capacity || 10;
};

  Airport.prototype.landPlane = function(plane) {
    if (this.isStormy() || this.isFullCapacity()) {
      return this.restrictedLanding();
    } else {
      plane.land();
      this.planes.push(plane);
    }

  };

  Airport.prototype.takeoffPlane = function() {
    if (this.isStormy()) {
      throw new Error("Plane cannot take off: The weather is too stormy");
    } else {
      var plane = this.planes.pop();
      plane.takeOff()
    }
  };

  Airport.prototype.restrictedLanding = function() {
    if (this.isFullCapacity()) {
      throw new Error("Plane cannot land: The airport is full");
    } else {
      throw new Error("Plane cannot land: the weather is too stormy");
    }
  };

  Airport.prototype.isStormy = function() {
    return this.weather.condition() == "stormy";
  };

  Airport.prototype.isFullCapacity = function() {
    return this.planes.length >= this.FULLCAPACITY;
  };
