class Border2{
    constructor(x, y, width, height, angle) {
 
   
     
        this.sprite = createSprite(x+695,y+310,width,height);
        this.sprite.shapeColor = 'indigo';
        this.sprite.visible = false;
        angleMode(RADIANS);
        this.sprite.rotation = angle;
        spritesGroup.push(this.sprite);

      }


}