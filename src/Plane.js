function Plane() {
  this.inFlight = true;
};

Plane.prototype.land = function() {
  this.inFlight = false;
};

Plane.prototype.takeOff = function() {
  if (this.inFlight == true){
    throw new Error("Plane cannot take off: The plane is already in the air");
  } else {
    this.inFlight = true;
  }
};
