function Airport() {
  this.planes = [];
};

  Airport.prototype.landPlane = function(plane) {
    this.planes.push(plane);
  };

  Airport.prototype.takeoffPlane = function(plane) {
    delete this.planes[plane];
  };
