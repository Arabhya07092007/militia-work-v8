class Game{

    constructor(){

    }

    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{

            gameState = data.val();

        });
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })
    }

    async start(){

        if(gameState === 0){

            khiladi = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');

            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                khiladi.getCount();

            }
            form = new Form();
            form.display();

        }

        ani_images();

        
        khiladi.posX = 1000;
        khiladi.posY = 0;


    }

    play(){

        form.hide();

        Player.getPlayerInfo();


        if(allPlayers !== undefined){

            var index = 0;

            camera.position.x = player1.body.x/2-600;
            camera.position.y = player1.body.y;
        
            
            sound();
        
                if(velo1>=-25){
                    velo1 = velo1-0.9;
                  }
              
                  if(velo2<=25){
                    velo2 = velo2+0.9;
                  }
                  
                  if(velo3<=25){
                    velo3 = velo3+0.9;
                  }
              
                  if(velo4>=-25){
                    velo4 = velo4 - 0.9;
                  }
              
                  velo5 = invisibleObject.velocity.x;
                  
                  if(velo5>0){
                    velo5 = velo5-0.02;
                  }
                  if(velo5<0){
                    velo5 = velo5+0.02;
                  }
              
              
                  abcd = invisibleObject.velocity.y;
                  if(abcd<15){
                    abcd = abcd + 0.5;
                  }else {
                    abcd = invisibleObject.velocity.y;
                  }
        
                  if(keyDown("UP_ARROW")){
        
                    let velo = invisibleObject.velocity;
                    invisibleObject.setVelocity(velo.x,velo1);

                   
                  }else{
                
                    velo1 = invisibleObject.velocity.y;
                    invisibleObject.velocity.y = abcd;
             
                  }
        
                  if(keyDown("RIGHT_ARROW")) {
        
                    let velo = invisibleObject.velocity;
                    invisibleObject.setVelocity(velo3,velo.y);
                  
                  }else{
                    velo3 = invisibleObject.velocity.x;
                    invisibleObject.velocity.x = velo5;
                  }
        
                  if (keyDown("LEFT_ARROW")) {
        
                    let velo = invisibleObject.velocity;
                    invisibleObject.setVelocity(velo4,velo.y);
              
                  }else{
                    velo4 = invisibleObject.velocity.x;
                    //invisibleObject.velocity.x = velo5;
                  }
              
        
        
                  angleMode(DEGREES);
                  khiladi.mousy = atan2(mouseY - height / 2, mouseX - width / 2);
        
                  if(mouseX>662){
                    khiladi.direction = "right";
                  }else{
                    khiladi.direction = "left";
                  }
              
                  if(mouseDown("leftButton")){
                    khiladi.firingState = "onfire"; 
                  }else{
                    khiladi.firingState = "nofire";           
                  }
        
                  //khiladi.update();
                  khiladi.posX = invisibleObject.x;
                  khiladi.posY = invisibleObject.y;
                  khiladi.update();

                      
          if(player1.name !== null&&player1.health!==null){

            push();
            textSize(40);
            fill("red");
            text(player1.name,player1.body.x,player1.body.y+100);
  
            push();
            rectMode(CORNER);
            fill('red');
            rect(player1.body.x,player1.body.y,player1.health,20);
            pop();
            pop();

        }




            for(var plr in allPlayers){
                index = index+1;
                
                if(allPlayers[plr].posX!== undefined&&allPlayers[plr].posY!==undefined){

                  var yy = allPlayers[plr].posY;
                  var xx = allPlayers[plr].posX
                khiladies[index-1].body.x = xx;
                khiladies[index-1].body.y = yy;
                }

                khiladies[index-1].mousy = allPlayers[plr].mousy;
                khiladies[index-1].direction = allPlayers[plr].direction;
                khiladies[index-1].fireState = allPlayers[plr].firingState;
                khiladies[index-1].health = allPlayers[plr].health;
                khiladies[index-1].kills = allPlayers[plr].kills;
                khiladies[index-1].name = allPlayers[plr].name;

                player1.mummy();
                player2.mummy();
                player3.mummy();
                player4.mummy();
                player5.mummy();
                player6.mummy();

                if(index === player1.index){

                  noStroke();
                  textSize(20);
                  text(khiladi[index-1].name,khiladi[index-1].body.x,khiladi[index-1].body.y)
                  
                }
            }

        }


        
 

          invisibleObject.collide(spritesGroup);
          
    }
}
