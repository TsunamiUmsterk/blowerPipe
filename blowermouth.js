class Blowmouth{
     constructor(x, y, width, height) {
     var options = {
          density: 0.5,
          friction: 0,
          isStatic: true
     }

     this.Body = Bodies.rectangle(x, y, width, height, options);
     World.add(world, this.Body);
     this.width = width;
     this.height = height;
     }

     display() {
     var pos = this.Body.position
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height)
          
     }
}