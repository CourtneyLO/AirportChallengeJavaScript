function Plane() {
  this.inFlight = true;
};

Plane.prototype.land = function() {
  this.inFlight = false;
};

Plane.prototype.takeOff = function() {
  this.inFlight = true;
};
