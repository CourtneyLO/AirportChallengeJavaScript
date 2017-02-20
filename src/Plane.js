function Plane() {
  this.inFlight = true;
};

Plane.prototype.land = function(airport) {
  if (this.inFlight == false) {
    throw new Error("Plane cannot land: Plan has already landed")
  }
  this.inFlight = false;
  this.airport = airport;
};

Plane.prototype.takeOff = function() {
  if (this.inFlight == true){
    throw new Error("Plane cannot take off: The plane is already in the air");
  } else {
    this.inFlight = true;
  }
};
