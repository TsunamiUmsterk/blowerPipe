class Ball{
     constructor(x, y, radius) {
     var options = {
          density: 0.5,
          friction: 0
     }

     this.Body = Bodies.circle(x, y, radius, options);
     World.add(world, this.Body);
     this.radius = radius;
     }

     display() {
     var pos = this.Body.position
          ellipseMode(RADIUS);
          ellipse(pos.x, pos.y, this.radius, this.radius)
          
     }
}