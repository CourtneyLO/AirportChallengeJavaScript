function Airport() {
  this.planes = [];
};

  Airport.prototype.landPlane = function(plane) {
    this.planes.push(plane);
  };
