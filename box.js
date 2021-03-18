class Box{
    constructor(x, y, width, height){   
      this.Visiblity = 255; 
      var options = {
       
        density : 0.8,
        friction : 0.5,
        restitution : 0.8
      }
    this.body = Bodies.rectangle(x,y,width,height,options); 
    
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display(){
        var boxpos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
          
          push();
          translate(boxpos.x,boxpos.y);
        rotate(angle);
          strokeWeight(4);
          stroke(230);
          fill(200);
          rect(0,0,this.width,this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
           pop();
         }
       
        
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score = score+0.5;
        Math.round(score);
      }
    }
}


  