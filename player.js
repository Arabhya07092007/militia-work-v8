class Player {
    constructor(){

        this.index = null;
        this.name = null;
        this.posX = null;
        this.posY = null;
        this.mousy = null;
        this.direction = null;
        this.firingState = null;
        this.health = null;
        this.kills = null;

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){

        database.ref("/").update({
            playerCount: count
        });

    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            index:this.index,
            posX:this.posX,
            posY:this.posY,
            mousy:this.mousy,
            direction:this.direction,
            firingState:this.firingState,
            health:this.health,
            kills:this.kills

        });
    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    kill(){
      database.ref("players/player"+player1.index).update({
          health:player1.health,
          kills:player1.kill
      })
      database.ref("players/player"+player2.index).update({
          health:player2.health,
          kills:player2.kill
      })
      database.ref("players/player"+player3.index).update({
          health:player3.health,
          kills:player3.kill
      })
      database.ref("players/player"+player4.index).update({
          health:player4.health,
          kills:player4.kill
      })
      database.ref("players/player"+player5.index).update({
          health:player5.health,
          kills:player5.kill
      })
      database.ref("players/player"+player6.index).update({
          health:player6.health,
          kills:player6.kill
      })



    }



}