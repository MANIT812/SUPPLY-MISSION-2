class Log{
    constructor(x,y,width,height,angle){
        var option={
            restitution:0.8,
            density:1.0,
            friction:1.0,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,angle,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
        fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}