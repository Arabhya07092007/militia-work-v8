class Players{
    constructor(){

        this.fireState = "nofire";
        this.direction = "right";
        this.health = 288;
        this.kills = 0;
        this.mousy = null;
        this.posX = 0;
        this.posY = 0;
        this.name = null;
        this.state = "alive";

        this.body = createSprite(-820,330,100,150);
        this.body.visible = false;
       

        this.handr = createSprite(2070,300);
        this.handr.addImage(s3);

        this.handl = createSprite(2070,300);
        this.handl.addImage(s1);

        //// ani1 and ani2 contains animations in right direction
  
        this.ani1 = createSprite(2070,300);
        this.ani1.addAnimation("a",rf1);
        this.ani1.scale = 1.35;

        this.ani2 = createSprite(2070,300);
        this.ani2.addAnimation("b",rf2);
        this.ani2.scale = 1.35;

        /// ani3 and ani4 contains animation in  left direction 

        this.ani3 = createSprite(2070,300);
        this.ani3.addAnimation("c",lf1);
        this.ani3.scale = 1.35;

        this.ani4 = createSprite(2070,300);
        this.ani4.addAnimation("d",lf2);
        this.ani4.scale = 1.35;


        this.headr = createSprite(2070,300);
        this.headr.addImage(s2);

        this.headl = createSprite(2070,300);
        this.headl.addImage(s4);

        this.bulletGroup = new Group();

        this.animationGroup = new Group();
        this.animationGroup.add(this.ani1);

        
        console.clear();
        console.log(this.body.x);


        this.ani1.visible = false;
        this.ani2.visible = false;
        this.ani3.visible = false;
        this.ani4.visible = false;

        this.handr.visible = false;
        this.handl.visible = false;

        this.headr.visible = false;
        this.headl.visible = false;


        
  
    }

    mummy(){

      let pos = this.body.position;

      this.body.collide(spritesGroup);



     // this.body.x = this.posX;
     // this.body.y = this.posY;
    
        this.handr.x = pos.x+41;
        this.handr.y = pos.y-75+65;
        this.handr.rotation = 6;

        this.handl.x = pos.x-35;
        this.handl.y = pos.y-65+65;
        this.handl.scale = 1-0.623;
        this.handl.rotation =-8+12;

        this.ani1.x = pos.x;
        this.ani1.y = pos.y+65;

        this.ani2.x = pos.x;
        this.ani2.y = pos.y+65;

        this.ani3.x = pos.x;
        this.ani3.y = pos.y+65;

        this.ani4.x = pos.x;
        this.ani4.y = pos.y+65;

        this.headr.x = pos.x+5;
        this.headr.y = pos.y-130+65;
        this.headr.scale = 0.79;

        this.headl.x = pos.x;
        this.headl.y = pos.y-130+65;
        this.headl.scale = 0.79;

        this.ani1.frameDelay = 2.5;
        this.ani2.frameDelay = 1;
        this.ani3.frameDelay = 2.5;
        this.ani4.frameDelay = 1;



       // this.ani1.visible = true;
        this.ani1.depth = this.handr.depth+1;



        if(this.direction  ==="right"){

            if(this.body.velocity.y<0){

                this.ani1.visible = false;
                this.ani2.visible = true;

            }else{

                this.ani1.visible = true;
                this.ani2.visible = false;

            }

            this.ani3.visible = false;
            this.ani4.visible = false;

            this.headr.visible = true;
            this.headl.visible = false;
            this.handr.visible = true;
            this.handl.visible = false;

            push();
            angleMode(DEGREES); 
            translate(width / 2, height / 2);
            imageMode(CORNER);
            translate(pos.x-710,pos.y-410+65);
            rotate(this.mousy);
            image(gun1,30,0,s3.width,s3.height);
            pop();

            
            angleMode(DEGREES); 
            translate(width / 2, height / 2);
            push();
            imageMode(CORNERS);
            translate(pos.x-715,pos.y-410+65);
            rotate(this.mousy);
            image(s3,0,0,s3.width,s3.height);
            pop();



        }

        if(this.direction==="left"){

            this.ani1.visible = false;
            this.ani2.visible = false;

            this.headr.visible = false;
            this.headl.visible = true;

            this.handr.visible = false;
            this.handl.visible = true;

            if(this.body.velocity.y<0){

                this.ani3.visible = false;
                this.ani4.visible = true;

            }else{

                this.ani3.visible = true;
                this.ani4.visible = false;
            }

            push();
            angleMode(DEGREES); 
            translate(width / 2, height / 2);
            imageMode(CORNER);
            translate(pos.x+-635,pos.y-375+65);
            rotate(this.mousy);
            image(gun2,50,0,s3.width,s3.height);
            pop();
    
            push();      
            angleMode(DEGREES); 
            translate(width / 2, height / 2);
            imageMode(CORNER);
            translate(pos.x-640,pos.y-370+65);
            rotate(this.mousy);
            image(s5,0,0,s3.width,s3.height);
            pop();


  
            
        }

        if(this.direction  === "right"&&this.fireState==="onfire"){
        

            if (frameCount % 7 === 0){
                push();
                let pos = this.body.position;
               // angleMode(DEGREES);
        
                let bullet1 = createSprite(pos.x-30,pos.y-90+65,35,10);
                bullet1.rotation = this.mousy;
                bullet1.setSpeedAndDirection(70,bullet1.rotation);
                bullet1.shapeColor = 'white';
        
                this.bulletGroup.add(bullet1);
        
                if(this.bulletGroup.isTouching(spritesGroup)){
                    this.bulletGroup.destroyEach();    
                
                  }
        
                pop();
            }
            
          }

          if(this.direction == "left"){
          if(this.fireState==="onfire"){

            if (frameCount % 7 === 0){
              push();
              let pos = this.body;
              angleMode(DEGREES);       
              let bullet2 = createSprite(pos.x+25,pos.y-75+65,35,10);
              bullet2.rotation = this.mousy;
              bullet2.setSpeedAndDirection(70,bullet2.rotation);
              bullet2.shapeColor = 'red';

              this.bulletGroup.add(bullet2);
      
              if(this.bulletGroup.isTouching(spritesGroup)){
                  this.bulletGroup.destroyEach();    
              
                }
              pop();
    
            }
            
          }}


    }
}