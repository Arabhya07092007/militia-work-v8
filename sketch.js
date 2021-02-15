const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

let abcd  = 0;

let c= 0;

var engine,world;
var b1, b2, b3, b4;
var background;

var B1;

var ani ;
var ani2;

var i1,i_1,i2,i_2,i3,i_3,i4,i_4;
let i5,i6,i7,i8,i9,i10,i11,i12,i13,i14;
let j5,j6,j7,j8,j9,j10,j11,j13,j14;
let j51,j16,j17,j18,j19,j20,j21,j22,j23,j24;


let j81;
let i44,i45,i46,i47;

let s1,s2,s3;
let r1,r2,r3,r4,r5,r6;

let invisibleObject;

//// right = rf & left = lf animations variables 

let rf1, rf2, lf1, lf2, rf3, lf3;



let gun1, gun2;

let f1,f2;

let fs1,fs2,fs3,fs4,fs5;

let bullet;
let imp1,imp2;

var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;
let bullets;
let bState;
let val;

let bulletGroup1, bulletGroup2; 

let spritesGroup =[] ;

let w1, w2, w3, w4, w5, w6, w7, w8, w9, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20;
let w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39, w40;

let health, healthimg, healthSprite;
let infoimg, infoSprite, gunSprite;


/////////////

let fuel = 288;

let form, game, khiladi;
let gameState = 0;
let playerCount, database, allPlayers, khiladies;

let player1, player2, player3, player4, player5, player6;

let velo1 = 0 , velo2 = 0, velo3 = 0, velo4 = 0, velo5 = 0;



function preload(){

  back = loadImage("spriete 8.webp");
  back2 = loadImage("the1.jpg");
 
  rf1 = loadAnimation("youcan5.png","youcan6.png","youcan7.png");
  rf2 = loadAnimation("a21.png","a23.png","b1.png","b3.png","b5.png","b6.png","b9.png","b11.png","b14.png");
  
  lf1 = loadAnimation("youcan10.png","youcan11.png","youcan12.png");
  lf2 = loadAnimation("c1.png"/*,"ani1/c2.png"*/,"c3.png"/*,"ani1/c4.png"*/,"c5.png"/*,"ani1/c6.png","ani1/c7.png"*/,"c8.png","c9.png",/*"ani1/c10.png",*/"c11.png",/*"ani1/c12.png",*/"c14.png",/*"ani1/c17.png",*/"c18.png",/*"ani1/c20.png"*/"c22.png");

  rf3 = loadImage('youcan6.png');
  lf3 = loadImage("youcan10.png");

  i1 = loadImage("b5.jpg");
  i2 = loadImage("b11.jpg");
  i3 = loadImage("b12.jpg");
  i4 = loadImage("b2.jpg");
  i5 = loadImage("bdown1.jpg");
  i6 = loadImage("s3.png");
  i7 = loadImage("b35.jpg");
  i8 = loadImage("b36.jpg");
  i9 = loadImage("b37.jpg");
  i10 = loadImage("b41.jpg");
  i11 = loadImage("b38.jpg");
  i12 = loadImage("b27.jpg");
  i13 = loadImage("b28.jpg");
  i14 = loadImage("s1.jpg");
  i15 = loadImage("b74.jpg");
  i16 = loadImage("B51.jpg");
  i17 = loadImage("B53.jpg");
  i18 = loadImage("s1.jpg");
  i19 = loadImage("b57.jpg");
  i20 = loadImage("i3.jpg");
  i21 = loadImage("i1.jpg");
  i22 = loadImage("i5.jpg");
  i23 = loadImage("i4.jpg");
  i24 = loadImage("v75.jpg");
  i25 = loadImage("b76.jpg");
  i26 = loadImage("b20.jpg");
  i27 = loadImage("b19.jpg");
  i28 = loadImage("b77.jpg");
  i29 = loadImage("b83.jpg");
  i30 = loadImage("t.jpg");
  i31 = loadImage("b18.jpg");
  i32 = loadImage("b16.jpg");
  i33 = loadImage("t1.jpg");
  i34 = loadImage("t2.jpg");
  i35 = loadImage("b812.jpg");
  i36 = loadImage("b432.jpg");
  i37 = loadImage("b8122.jpg");
  i38 = loadImage("t12.jpg");
  i39 = loadImage("t122.jpg");
  i40 = loadImage("b612.jpg");
  i41 = loadImage("b652.jpg");
  i42 = loadImage("b655.jpg");
  i43 = loadImage("t4.jpg");

  i44 = loadImage("b362.jpg");
  i45 = loadImage("b372.jpg");
  i46 = loadImage("B32.jpg");
  i47 = loadImage("b33.jpg");


  s1 = loadImage("hand 1.png");
  s2 = loadImage("sprite12.png");
  s3 = loadImage("sprite15.png");
  s4 = loadImage("sprite 16.png");
  s5 = loadImage("hand 2.png");

  gun1 = loadImage("gun4.png");
  gun2 = loadImage("gun2.png");


  fs1 = loadSound("fire 1.mp3");

  healthimg = loadImage("health.png");
  infoimg = loadImage("info 1.png");


}


function setup(){
    var canvas  = createCanvas(1365,620);
 
    engine = Engine.create();
    world = engine.world;

    database = firebase.database();
    game  = new Game();
    game.getGameState();
    game.start();


    camera.on();
    camera.zoom = 0.3;

}
function draw(){
    background(159,159,164);


    Engine.update(engine);
    drawSprites();

    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      game.play();
    }

   
    camera.zoom = 0.36;




  }
    


function ani_images(){

          
  healthSprite = createSprite(200,200);
  healthSprite.addImage(healthimg);

  b2 = createSprite(width/2,height/2);
  b2.addImage(back);
  b2.scale = 14.5;

  B1 = createSprite(3845,-1600);
  B1.addImage(back2);
  B1.scale = 2.83;

  j71 = createSprite(-2110,-980);
  j71.addImage(i37);
  j71.scale = 3.5899;
  j71.rotation = 180;

  
  j74 = createSprite(-4600,-770);
  j74.addImage(i39);
  j74.scale = 2.889;
  j74.rotation = -64;

  
  j75 = createSprite(-4200,-370);
  j75.addImage(i39);
  j75.scale = 1.439;
  j75.rotation = 108;

  j76 = createSprite(-3270,-2340);
  j76.addImage(i39);
  j76.scale = 2.589;
  j76.rotation = 322;

  j77 = createSprite(3930,-1090);
  j77.addImage(i39);
  j77.scale = 1.7899;
  j77.rotation =521;

  j42 = createSprite(4390,740);
  j42.addImage(i23);
  j42.scale = 3.19;

  j30 = createSprite(3140,4260);
  j30.addImage(i11);
  j30.scale = 2;

  j29 = createSprite(4280,3680);
  j29.addImage(i17);
  j29.scale = 2.0;

  j5 = createSprite(-1100,3350);
  j5.addImage(i5);
  j5.scale = 2.15;
  j5.rotation = 3;

  i_1 = createSprite(4450,1780);
  i_1.addImage(i1);
  i_1.scale = 1.55;

  i_2 = createSprite(-1750,3410);
  i_2.addImage(i2);
  i_2.scale = 2.85;

  i_3 = createSprite(4550,-1750);
  i_3.addImage(i3);
  i_3.scale = 1.7;

  i_4 = createSprite(-2800,3200);
  i_4.addImage(i4);
  i_4.scale = 2.4;
  i_4.rotation = 12;

  j6 = createSprite(-120,4220);
  j6.addImage(i6);
  j6.scale = 0.85;

  j7 = createSprite(1090,4250);
  j7.addImage(i7);
  j7.scale = 1.65;

  j8 = createSprite(-70,2800);
  j8.addImage(i8);
  j8.scale = 2.1;

  j9 = createSprite(1450,-1700);
  j9.addImage(i8);
  j9.scale = 2.1;
  j9.rotation = 180;

  j10 = createSprite(-2310,1080);
  j10.addImage(i8);
  j10.scale = 2.15;

  j11 = createSprite(1450,2800);
  j11.addImage(i9);
  j11.scale = 2.1;
  
  j12 = createSprite(-770,1080);
  j12.addImage(i9);
  j12.scale = 2.15;

  j13 = createSprite(-2280,60);
  j13.addImage(i9);
  j13.scale = 2.15;
  j13.rotation = 180;

  j14 = createSprite(-90,-1700);
  j14.addImage(i9);
  j14.scale = 2.15;
  j14.rotation = 180;

  j15 = createSprite(3680,1060);
  j15.addImage(i9);
  j15.scale = 2.1;

  j16 = createSprite(3420,-210);
  j16.addImage(i9);
  j16.scale = 2.1;
  j16.rotation = -90;

  j17 = createSprite(-1230,4280);
  j17.addImage(i10);
  j17.scale = 2.05;

  j18 = createSprite(2180,4250);
  j18.addImage(i11);
  j18.scale = 2.05;

  j19 = createSprite(2910,4250);
  j19.addImage(i11);
  j19.scale = 1.85;

  j20 = createSprite(-2900,4010);
  j20.addImage(i12);
  j20.scale = 2.2;
  j20.rotation = -69;

  j25 = createSprite(-4860,1310);
  j25.addImage(i12);
  j25.scale = 1.75;
  j25.rotation = -29;

  j21 = createSprite(-3910,3310);
  j21.addImage(i14);
  j21.scale = 1.8;
  j21.rotation = -35;

  j23 = createSprite(-3810,1690);
  j23.addImage(i14);
  j23.scale = 1.9;
  j23.rotation = 128;
  
  j22 = createSprite(-2720,1960);
  j22.addImage(i13);
  j22.scale = 1.75;

  j24 = createSprite(-4440,2400);
  j24.addImage(i14);
  j24.scale = 2.5;
  j24.rotation = -29;

  j26 = createSprite(2520,2980);
  j26.addImage(i15);
  j26.scale = 3.35;
  //j26.rotation = -29;

  j27 = createSprite(440,3180);
  j27.addImage(i16);
  j27.scale = 2.1;
  
  j28 = createSprite(920,3180);
  j28.addImage(i16);
  j28.scale = 2.1;

  j31 = createSprite(5540,2450);
  j31.addImage(i18);
  j31.scale = 3.15;
  j31.rotation = -151;

  j32 = createSprite(6130,1300);
  j32.addImage(i4);
  j32.scale = 1.7;
  j32.rotation = 108;

  j33 = createSprite(6120,-550);
  j33.addImage(i12);
  j33.scale = 2.3;
  j33.rotation = -214;

  j34 = createSprite(5250,-1840);
  j34.addImage(i12);
  j34.scale = 2.15;
  j34.rotation = -218;

  j35 = createSprite(4180,-2680);
  j35.addImage(i12);
  j35.scale = 1.7;
  j35.rotation = -254;

  j36 = createSprite(5260,-460);
  j36.addImage(i12);
  j36.scale = 2.25;
  j36.rotation = -36;

  j37 = createSprite(4810,-1040);
  j37.addImage(i19);
  j37.scale = 1.85;
  j37.rotation = -5;

  j38 = createSprite(5360,1190);
  j38.addImage(i20);
  j38.scale = 3.44;
  j38.rotation = -45;

  j39 = createSprite(5080,1510);
  j39.addImage(i12);
  j39.scale = 1.2;
  j39.rotation = 41;

  j40 = createSprite(4810,290);
  j40.addImage(i21);
  j40.scale = 3.44;
 // j40.rotation = 41;
 
  j41 = createSprite(2329,2010);
  j41.addImage(i22);
  j41.scale = 3.44;

  j43 = createSprite(-1220,2700);
  j43.addImage(i24);
  j43.scale = 3.349;

  j44 = createSprite(-920,2010);
  j44.addImage(i25);
  j44.scale = 3.349;

  j45 = createSprite(-3290,530);
  j45.addImage(i26);
  j45.scale = 2.05;

  j46 = createSprite(-4010,800);
  j46.addImage(i27);
  j46.scale = 2.05;

  j47 = createSprite(-4010,310);
  j47.addImage(i27);
  j47.scale = 2.05;

  j48 = createSprite(-5240,800);
  j48.addImage(i27);
  j48.scale = 2.05;

  j49 = createSprite(-5240,310);
  j49.addImage(i27);
  j49.scale = 2.05;

  j50 = createSprite(5380,810);
  j50.addImage(i27);
  j50.scale = 2.05;

  j51 = createSprite(6620,310);
  j51.addImage(i27);
  j51.scale = 2.05;

  j52 = createSprite(6620,800);
  j52.addImage(i27);
  j52.scale = 2.05;

  j53 = createSprite(-2900,2560);
  j53.addImage(i28);
  j53.scale = 2.05;

  j54 = createSprite(-450,-310);
  j54.addImage(i29);
  j54.scale = 3.299;

  j55 = createSprite(-450,-310);
  j55.addImage(i29);
  j55.scale = 3.299;

  j56 = createSprite(1810,-300);
  j56.addImage(i30);
  j56.scale = 3.299;

  j57 = createSprite(-3270,-1290);
  j57.addImage(i31);
  j57.scale = 2;

  j58 = createSprite(-2340,-2008);
  j58.addImage(i32);
  j58.scale = 2.1;

  j59 = createSprite(-850,-2950,2.599);
  j59.addImage(i33);
  j59.scale = 2.599;

  j60 = createSprite(1980,-2970);
  j60.addImage(i34);
  j60.scale = 2.599;

  j61 = createSprite(3162.199,1720);
  j61.addImage(i16);
  j61.scale = 2.09;

  j62 = createSprite(3162.19,1720);
  j62.addImage(i16);
  j62.scale = 2.09;

  j63 = createSprite(-1300,1700);
  j63.addImage(i16);
  j63.scale = 2.09;

  j64 = createSprite(-1750,-570);
  j64.addImage(i16);
  j64.scale = 2.09;
  j64.rotation = -180;

  j65 = createSprite(440,-2060);
  j65.addImage(i16);
  j65.scale = 2.1399;
  j65.rotation = -180;

  j66 = createSprite(940,-2060);
  j66.addImage(i16);
  j66.scale = 2.1399;
  j66.rotation = -180;

  j67 = createSprite(-1610,-1670);
  j67.addImage(i35);
  j67.scale = 3.339;

  j68 = createSprite(1830,1426);
  j68.addImage(i29);
  j68.scale = 3.339;
  j68.rotation = -180;  

  j69 = createSprite(-470,1440);
  j69.addImage(i30);
  j69.scale = 3.389;
  j69.rotation = 180;

  j70 = createSprite(-2070,2860);
  j70.addImage(i36);
  j70.scale = 2.09;

  j72 = createSprite(-2800,1930);
  j72.addImage(i39);
  j72.scale = 2.3899;

  j73 = createSprite(-4030,1440);
  j73.addImage(i39);
  j73.scale = 1.5399;
  j73.rotation = 50;

  j78 = createSprite(-1340,-2420);
  j78.addImage(i40);
  j78.scale = 2.339;
 // j78.rotation = 50;

  j79 = createSprite(-160,-2410);
  j79.addImage(i41);
  j79.scale = 2.6899;
 // j78.rotation = 50;

  j80 = createSprite(1470,-2410);
  j80.addImage(i42);
  j80.scale = 2.4899;
 // j78.rotation = 50;

  j80 = createSprite(1470,-2410);
  j80.addImage(i42);
  j80.scale = 2.4899;
 // j78.rotation = 50; 

  j81 = createSprite(-75,600+2260);
  j81.addImage(i44);
  j81.scale = 2.1;

  j82 = createSprite( -75+1515,600+2260);
  j82.addImage(i45);
  j82.scale = 2.1;

  j83 = createSprite(200-480,600+2390);
  j83.addImage(i46);
  j83.scale = 6.049;

  j84 = createSprite(200+1590,600+2410);
  j84.addImage(i46);
  j84.scale = 6.549;

  j85 = createSprite(200-690,600+850);
  j85.addImage(i46);
  j85.scale = 3.099;

  j86 = createSprite(200-680,600-890);
  j86.addImage(i46);
  j86.scale = 3.099;
  
  j87 = createSprite(200+1580,600+850);
  j87.addImage(i46);
  j87.scale = 2.25;

  j88 = createSprite(200+1650,600-860);
  j88.addImage(i46);
  j88.scale = 3.249;

  j89  = createSprite(200+3940,600+700);
  j89.addImage(i46);
  j89.scale = 8.949;

  j90  = createSprite(200+3660,600+940);
  j90.addImage(i46);
  j90.scale = 5.699;

  j91  = createSprite(200+4140,600+940);
  j91.addImage(i46);
  j91.scale = 5.699;

  j92  = createSprite(200+4950,600+650);
  j92.addImage(i46);
  j92.scale = 2.89+0.4499;
  j92.rotation = -43;

  j93  = createSprite(200+4080,600-900);
  j93.addImage(i46);
  j93.scale = 9.99;


  j94  = createSprite(200-2980,600+850);
  j94.addImage(i46);
  j94.scale = 9.1499;

  j95  = createSprite(200-2650,600+520);
  j95.addImage(i46);
  j95.scale = 3.8999;

  j96  = createSprite(200-3900, 600+520);
  j96.addImage(i46);
  j96.scale = 5.99;

  j97  = createSprite(200-3140,600-910);
  j97.addImage(i46);
  j97.scale = 11.2;

  j98  = createSprite(200-3030,600-1500);
  j98.addImage(i46);
  j98.scale = 9.6;
  j98.rotation = 40;

  j99  = createSprite(200-540,600-2510);
  j99.addImage(i46);
  j99.scale = 6.8499;

  j100 = createSprite(200-1640,600-2660);
  j100.addImage(i46);
  j100.scale = 5.649;

  j101 = createSprite(200+1620,600-2510);
  j101.addImage(i46);
  j101.scale = 7.799;

  j102 = createSprite(200-2750,600+2380);
  j102.addImage(i46);
  j102.scale = 3.299;

  j103 = createSprite(200+130,600+1730+60);
  j103.addImage(i47);
  j103.scale = 2.8499;

  j104 = createSprite(200+130-320,600+1730+60);
  j104.addImage(i47);
  j104.scale = 2.8499;

  j105 = createSprite(200-900,600+1740+60);
  j105.addImage(i47);
  j105.scale = 2.699;


  j106 = createSprite(200-560,600+1740+60);
  j106.addImage(i47);
  j106.scale = 2.699;

  j107 = createSprite(200+820,600+1740+60);
  j107.addImage(i47);
  j107.scale = 2.699;

  j108 = createSprite(200+820,600+1740+60);
  j108.addImage(i47);
  j108.scale = 2.699;

  j109 = createSprite( 200+1280,600+1740+60);
  j109.addImage(i47);
  j109.scale = 2.699;

  j110 = createSprite(200+1790,600+1740+60);
  j110.addImage(i47);
  j110.scale = 2.699;

  j111 = createSprite(200+1520,600+1740+60);
  j111.addImage(i47);
  j111.scale = 2.699;

  j112 = createSprite(200-2850,600+1550);
  j112.addImage(i47);
  j112.scale = 8.09;

  j113 = createSprite(200-3680,600+1530);
  j113.addImage(i47);
  j113.scale = 5.8499;

  j114 = createSprite(200-4300,600+1070);
  j114.addImage(i47);
  j114.scale = 5.8499;
  j114.rotation = 51;

  j115 = createSprite(200-3580,600+2300);
  j115.addImage(i47);
  j115.scale =  4.399;
  j115.rotation = 65;

  j116 = createSprite(200-3180,600+3060);
  j116.addImage(i47);
  j116.scale = 7.099;
  j116.rotation = 23;

  j117 = createSprite(200-390,600+3360);
  j117.addImage(i47);
  j117.scale = 12.75;

  j118 = createSprite(200-20,600+3170);
  j118.addImage(i47);
  j118.scale = 8.399;

  j119 = createSprite(200-2560+5110,600+3360);
  j119.addImage(i47);
  j119.scale = 12.1;

  j120 = createSprite(200+4050,600+2580);
  j120.addImage(i47);
  j120.scale = 12.1;
  j120.rotation = -50;

  j121 = createSprite(200+4410,600+2350);
  j121.addImage(i47);
  j121.scale = 12.1;
  j121.rotation = -50;

  j122 = createSprite(200+4410,600+1580);
  j122.addImage(i47);
  j122.scale = 8.7499;
  j122.rotation = 1;

  j123 = createSprite(200+4800,600+1580);
  j123.addImage(i47);
  j123.scale = 11;
  j123.rotation = -51;

  j124 = createSprite(200+4890,600+1280);
  j124.addImage(i47);
  j124.scale = 8.849;
  j124.rotation = -43;

  j125 = createSprite(200+5540,600-1080);
  j125.addImage(i47);
  j125.scale = 8.849;
  j125.rotation = -123;

  j126 = createSprite(200+5090,600-1590);
  j126.addImage(i47);
  j126.scale = 8.849;
  j126.rotation = -123;

  j127 = createSprite(200+3430,600-1770);
  j127.addImage(i47);
  j127.scale = 5.6499;
  j127.rotation = -199;

  j128 = createSprite(200+4390,600-2710);
  j128.addImage(i47);
  j128.scale = 6.6499;
  j128.rotation = -138;

  j129 = createSprite(200+4370,600-2610);
  j129.addImage(i47);
  j129.scale = 4.199;
  j129.rotation = -176;

  j130 = createSprite(200+2740,600-3280);
  j130.addImage(i47);
  j130.scale = 6.849;
  j130.rotation = -179;

  

  /*
    w1 = new Border(1090,3900,6000,20);

    w2 = new Border2(-820,1880,1400,20,0);
    w3 = new Border2(-820,2150,1400,20,0);
    w4 = new Border2(798,1880,1350,20,0);
    w5 = new Border2(820,2150,1400,20,0);
    w6 = new Border2(-120,1390,1000,20,1.58);
    w7 = new Border2(120,1390,1000,20,1.58);
    w8 = new Border2(140,2620,950,20,1.58);
    w9 = new Border2(-130,2620,950,20,1.58);

    w10 = new Border2(-2990,130,1350,20,0);
    w11 = new Border2(-2990,390,1350,20,0);
    w12 = new Border2(-1350,110,1480,20,0);
    w13 = new Border2(-1380,380,1480,20,0);
    w14 = new Border2(-2320,-480,20,1250,0);
    w15 = new Border2(-2350,990,20,1250,0);
    w16 = new Border2(-2080,-500,20,1250,0);
    w17 = new Border2(-2130,1020,20,1250,0);

    w18 = new Border2(1350,120,1480,20,0);
    w19 = new Border2(1370,370,1480,20,0);

    w20 = new Border2(2080,-500,20,1250,0);
    w21 = new Border2(2110,1000,20,1250,0);
    w22 = new Border2(2360,-510,20,1250,0);
    w23 = new Border2(2370,990,20,1250,0);
    w24 = new Border2(2950,100,1210,20,0);
    w25 = new Border2(2970,370,1210,20,0);

    w26 = new Border2(-760,-1620,1300,20,0);
    w27 = new Border2(-760,-1360,1300,20,0);
    w28 = new Border2(750,-1350,1300,20,0);
    w29 = new Border2(780,-1630,1300,20,0);

    w30 = new Border2(-120,-2110,20,1000,0);
    w31 = new Border2(140,-2120,20,1000,0);
    w32 = new Border2(-130,-880,20,1000,0);
    w33 = new Border2(120,-880,20,1000,0);

    w34 = new Border2(-630,-200,20,600,0);
    w35 = new Border2(-380,-400,480,20,0);
    w36 = new Border2(620,-170,20,600,0);
    w37 = new Border2(620,660,20,600,0);
    w38 = new Border2(-630,670,20,600,0);
    w39 = new Border2(370,-390,480,20,0);
    w40 = new Border2(-370,900,480,20,0);
    w41 = new Border2(380,900,480,20,0); 

    w42 = new Border2(-920,3140,1200,20,0); 
    
    w43 = new Border2(-1780,3270,600,20,0.29); 
    w44 = new Border2(-2070,3300,600,20,-0.8); 
    w45 = new Border2(-2510,3330,600,20,0.74); 
    w46 = new Border2(-2710,3230,300,20,-0.52); 
    w47 = new Border2(-2970,3230,300,20,-2.48); 
    w48 = new Border2(-3180,3190,300,20,-3.44); 
    w49 = new Border2(-2080,3990,300,20,-0.44); 
    w50 = new Border2(-2350,4000,300,20,-2.64); 
    w51 = new Border2(-2600,3950,300,20,-3.14); 
    w52 = new Border2(-3600,3550,1800,20,0.44); 
    w53 = new Border2(-4880,2420,1800,20,1.02); 
    w54 = new Border2(-5200,1690,600,20,1.38); 
    w55 = new Border2(-5430,1040,1000,20,1.10); 
    w56 = new Border2(-3700,2850,1000,20,0.84); 
    w57 = new Border2(600,3000,600,20,0.32); 
    w58 = new Border2(3160,3940,600,20,-0.86); 
    w59 = new Border2(1460,3140,600,20,0.3); 
    w60 = new Border2(3650,3660,600,20,-0.18); 
    w61 = new Border2(2030,3120,600,20,-0.359); 
    w62 = new Border2(990,3210,400,20,0.76); 
    w63 = new Border2(1270,3200,400,20,-0.82); 
    w64 = new Border2(2260,3120,400,20,0.46); 
    w65 = new Border2(2610,3090,400,20,-0.66); 
    w66 = new Border2(3480,2430,400,20,-1.12); 
    w67 = new Border2(3100,2770,800,20,-0.54); 
/*
    push(); 
    health = createSprite(200,200,200,50);
    health.shapeColor = 'red';
    healthSprite.scale = 2.56;
    pop();

    infoSprite = createSprite(200,200);
    infoSprite.addImage(infoimg);
    infoSprite.scale = 2.56;

    gunSprite = createSprite(200,200);
    gunSprite.addImage(gun2);
    gunSprite.scale = 1.48;
    gunSprite.rotation = 178;
*/

w1 = createSprite(1000,1000,30000,50);
w1.shapeColor = "red";
spritesGroup.push(w1);

    invisibleObject  = createSprite(1000,0,1000,150);
    invisibleObject.visible = true;
    invisibleObject.shapeColor = "blue";
    invisibleObject.visible = false;
    invisibleObject.collide(spritesGroup);

    camera.position.x = invisibleObject.x+width/2-600;
    camera.position.y = invisibleObject.y;

    player1 = new Players();
    player2 = new Players();
    player3 = new Players();
    player4 = new Players();
    player5 = new Players();
    player6 = new Players();

    khiladies  = [player1,player2,player3,player4,player5,player6];


}

function sound(){
  if(player1.fireState==="onfire"){
    if(frameCount%7===0){
    fs1.play();
    fs1.setVolume(0.3);}
}


if(player2.fireState==="onfire"){
  if(frameCount%7===0){
  fs1.play();
  fs1.setVolume(0.3);}
}


if(player3.fireState==="onfire"){
if(frameCount%7===0){
fs1.play();
fs1.setVolume(0.3);}
}


if(player4.fireState==="onfire"){
if(frameCount%7===0){
fs1.play();
fs1.setVolume(0.3);}
}


if(player5.fireState==="onfire"){
if(frameCount%7===0){
fs1.play();
fs1.setVolume(0.3);}
}


if(player6.fireState==="onfire"){
if(frameCount%7===0){
fs1.play();
fs1.setVolume(0.3);}
}
}

function killing(){

  if(player1.bulletGroup.isTouching(player2.body)){
    player2.health = player2.health -20;
    
    if(player2.health<=0){
      player1.kill = player1.kill+1;
    }
    khiladi.kill();

  }

  if(player1.bulletGroup.isTouching(player3.body)){
    player3.health = player3.health -20;
    
    if(player2.health<=0){
      player1.kill = player1.kill+1;
    }
    khiladi.kill();

  }

  if(player1.bulletGroup.isTouching(player4.body)){
    player4.health = player4.health -20;
    
    if(player2.health<=0){
      player1.kill = player1.kill+1;
    }
    khiladi.kill();

  }

  if(player1.bulletGroup.isTouching(player5.body)){
    player5.health = player5.health -20;
    
    if(player2.health<=0){
      player1.kill = player1.kill+1;
    }
    khiladi.kill();

  }

  if(player1.bulletGroup.isTouching(player6.body)){
    player6.health = player6.health -20;
    
    if(player2.health<=0){
      player1.kill = player1.kill+1;
    }
    khiladi.kill();
    
  }
}
