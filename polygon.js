class polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            density : 2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("hexagon/images.jpg")
        this.body.scale = 0.2;
        World.add(world,this.body);
    }
    display(){

        var polygonpos = this.body.position;
        var angle = this.body.angle;
        this.body.x = mouseX;
        this.body.y = mouseY;
        push();
        translate(polygonpos.x,polygonpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.radius);
        pop();
    }
}