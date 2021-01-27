class Border{
    constructor(x,y,width,height) {

        var options ={
            
            'isStatic': true ,
            'restitution': 0,
            'density': 0
            
        }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     // this.image  =  loadImage("images/character2.png");
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
     // var angle  = this.body.angle;

      push();
     // translate(pos.x,pos.y);
     // rotate(angle);
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height)
      pop();

    }
}