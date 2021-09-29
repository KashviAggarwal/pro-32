class Net {
    constructor(x, y, w, h) {
      let options = {
        isStatic:true
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.image = loadImage("net.png");
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
       image(this.image,0,0,80,80);
      pop();
    }
    
  }
  