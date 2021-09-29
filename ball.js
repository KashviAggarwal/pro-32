class Ball {
    constructor(x,y,r){
        let option = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,r,option);
        this.r = r;
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        push();
         ellipseMode(RADIUS);
        stroke(255);
        fill("blue");
       ellipse(pos.x, pos.y, this.r);
      //   translate(pos.x,pos.y)       
        pop();
    }
}
