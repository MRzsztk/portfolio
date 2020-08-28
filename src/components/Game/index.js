import React, { useEffect } from "react";
import * as p5 from "p5";
 
const Game = () => {
 const Sketch = p5 => {
//class Player
    class Player {
        constructor() {
          this.gravity = 0.7;
          this.speed = 9;
          this.jumps = 0;
          this.x = 300;
          this.caffeine=100;
          this.coffees=3;
          this.dead=false;
        }
        setupPlayer() {
          this.y = height - pRun.height;
          this.width = pRun.width;
          this.height = pRun.height;
        }
        jump() {
          this.jumps += 1;
          if (this.jumps < 3) {
            // jumpSound.play();
            this.speed = -13 ;
          }
        }
        drawPlayer() {
          this.caffeine-=0.1;
          this.speed += this.gravity;
          this.y += this.speed;
          //p5.image(pRun, this.x, this.y, this.width, this.height);
          if (this.y >= height - pRun.height) {
            this.y = height - pRun.height;
            this.jumps = 0;
          }
          if (round.deadCounter>=26) {
            p5.image(deadAnimation[12], 0.3*width, height-48, 60, 48);
            this.dead=true;
          }
          if (this.jumps>0 && this.speed<0) {
            p5.image(pJump, this.x, this.y, pJump.width*2, pJump.height*2);
          } else if (this.jumps>0 && this.speed>0) {
            p5.image(pFall, this.x, this.y, pFall.width*2, pFall.height*2);
          } else if (this.jumps===0 && this.caffeine<=0 && round.deadCounter<28) {
            round.deadCounter++;
            p5.image(deadAnimation[Math.floor(round.deadCounter/2) % 14], 0.3*width, height-48, 60, 48);
          } else if (!this.dead) {
            p5.image(pRun, this.x, this.y, this.width, this.height);
          }
        }
        drawStats() {
          p5.line(0, 15, this.caffeine, 15);
        }
        drawWords() {
          p5.fill(0);
          p5.text('caffeine', 3, 7);
        }
    //     drawCoffee() {
    //       for (let i=0; i<this.coffees; i++) {
    //   p5.image(game.coffee, 3+i*(game.coffee.width*0.7+2), 20, game.coffee.width*0.7, game.coffee.height*0.7)
    //       }
    //     }
        useCoffee() {
          if (this.coffees>0) {
            //insulinVialUse.play();
            this.coffees--;
            this.caffeine+=50;
            //drawCoffee();
          }
        }
      }

//class round
      class Round {
        constructor() {
          this.player = new Player();
          this.obstacles = [];
          this.furniture=[];
          this.messages = [];
          this.animationCounter = 0;
          this.deadCounter = 0;
          this.ready = false;
        }
        drawRound() {
          p5.clear();
          p5.frameRate(30);
        //   p5.textFont(this.font1);
          p5.textSize(18);
          p5.textAlign(p5.CENTER, p5.CENTER);
      //randomizing obstacles
        //   if (p5.frameCount % 110 === 0) {
        //     let randomY = p5.random(40, p5.height - 40);
        //     let randomO = Math.floor(p5.random(0, 4));
            //this.obstacles.push(new Obstacles(randomY,randomO));
          //}
        //   this.obstacles.forEach((obstacle) => {
        //     obstacle.drawObstacles();
        //     obstacle.checkCollision(this.player);
        //   });
        //   this.obstacles = this.obstacles.filter((obstacle) => {
        //     if (obstacle.checkCollision(this.player)) {
        //       console.log(obstacle.name);
        //       if (obstacle.name==='coffee') {
        //         this.player.coffees++;
        //         this.player.drawCoffee();
        //       }
        //       //this.messages.push(new CollisionText(obstacle.name, obstacle.message));
        //       return false;
        //     } else {
        //       return true;
        //     }
        //   });
        //   if (p5.frameCount % 140 === 0) {
        //     let randomF = Math.floor(p5.random(4, 10));
        //     //this.furniture.push(new Furniture(randomF));
        //   } else if (p5.frameCount % 150 === 0 && p5.frameCount % 140 > 9) {
        //     let randomF = Math.floor(p5.random(10, 12));
        //     //this.furniture.push(new Furniture(randomF));
        //   }
        //   this.furniture.forEach((piece) => {
        //     piece.drawFurniture();
        //   }); 
        //   this.messages.forEach((message) => {
        //     message.drawText();
        //   })
          this.player.drawStats();
        //   this.player.drawCoffee();
          p5.textAlign(p5.LEFT);
          this.player.drawPlayer();
          this.player.drawWords(width * 0.25);
        }
        endGame(option) {
          p5.noStroke();
          p5.fill(127, 179, 213);
          p5.rect(50, 50, width-100, height-100);
          //p5.textFont(this.font2);
          p5.textAlign(p5.CENTER, p5.CENTER);
          p5.fill(0);
          p5.textSize(24);
          p5.text('GAME OVER.', width/2, height/2-30)
          p5.textSize(18);
          p5.text(option, width/2, height/2+30)
        }
        startGame() {
          p5.noStroke();
          p5.fill(127, 179, 213);
          p5.rect(0, 0, width, height);
          p5.image(copier, 0.05*width, height-copier.height*1.5, copier.width*1.5, copier.height*1.5);
          p5.image(desk, 0.05*width+copier.width*2, height-desk.height+1, desk.width, desk.height);
          p5.image(aloe, 0.9*width, height-aloe.height, aloe.width, aloe.height);
          
          //   player character transformation intro
          if (!drinkCoffee) {
            p5.image(iIdle, 0.3*width, height-iIdle.height, iIdle.width, iIdle.height);
          } else if (drinkCoffee&&this.animationCounter<coffeeAnimation.length*20) {
            this.animationCounter++;
            p5.image(coffeeAnimation[Math.floor(this.animationCounter/10) % coffeeAnimation.length], 0.3*width, height-40, 30, 40);
          } else if (drinkCoffee&&this.animationCounter<coffeeAnimation.length*20+transformAnimation.length*5) {
            this.animationCounter++;
            p5.image(transformAnimation[Math.floor((this.animationCounter+50)/5) % transformAnimation.length], 0.3*width-16, height-50, 58, 50);
          } else {
            p5.image(pIdle, 0.3*width-4, height-pIdle.height*2, pIdle.width*2, pIdle.height*2);
            this.ready=true;
          }
    
          //game intro text
        //   textFont(this.font2);
          p5.textAlign(p5.CENTER, p5.CENTER);
          p5.fill(21, 67, 96);
          if (!drinkCoffee) {
            p5.textSize(20);
            p5.text('*press c to have a coffee.*', width/2, height/2);
          } 
          else if (drinkCoffee&&!this.ready) {
            p5.textSize(20);
            p5.text('*gulp*', width/2, height/2+10)
          } else if (this.ready) {
            p5.textSize(20);
            p5.text(`ready to roll! \n *press SPACEBAR to jump*`, width/2, height/2);
          }
        }
      }
//game variables
   const width=0.9*p5.windowWidth;
   const height=200;
   const round = new Round();
   let drinkCoffee=false;
   let playGame=false;
   //player gifs and png
   let pRun, pIdle, pJump, pFall, iIdle;
   //object png
   let aloe, arrow, chair, chair2,chart, clock, closet, coffee, coffeeMaker, copier, desk, door, exitdoor, exitsign, papers, plant, pot1, printer, stapler, table, waterDispenser;
   let objects=[];
   //spritesheets and json
   let coffeeData, coffeeSpritesheet, transformData, transformSpritesheet, deadData, deadSpritesheet;
   //animation arrays
   let coffeeAnimation=[];
   let transformAnimation=[];
   let deadAnimation=[];


   p5.preload = () => {
       //need to preload font
       pRun = p5.loadImage('./player/sRun.gif');
       pIdle = p5.loadImage('./player/sIdle.gif');
       pJump = p5.loadImage('./player/sJump.png');
       pFall = p5.loadImage('./player/sFall.png');
       iIdle = p5.loadImage('./player/wIdle.gif');
       coffeeData = p5.loadJSON('./player/coffeeData.JSON');
       coffeeSpritesheet = p5.loadImage('./player/coffeeSpritesheet.png');
       transformData = p5.loadJSON('./player/transformData.JSON');
       transformSpritesheet = p5.loadImage('./player/transformSpritesheet.png');
       deadData = p5.loadJSON('./player/deadData.JSON');
       deadSpritesheet = p5.loadImage('./player/deadSpritesheet.png');
       aloe = p5.loadImage("./objects/aloe.png");
       arrow = p5.loadImage("./objects/arrow.png");
       chair = p5.loadImage("./objects/chair.png");
       chair2 = p5.loadImage("./objects/chair2.png");
       chart = p5.loadImage("./objects/chart.png");
       clock = p5.loadImage("./objects/clock.png");
       closet = p5.loadImage("./objects/closet.png");
       coffee = p5.loadImage("./objects/coffee.png");
       coffeeMaker = p5.loadImage("./objects/coffeeMaker.png");
       copier = p5.loadImage("./objects/copier.png");
       desk = p5.loadImage("./objects/desk.png");
       door = p5.loadImage("./objects/door.png");
       exitdoor = p5.loadImage("./objects/exitdoor.png");
       exitsign = p5.loadImage("./objects/exitsign.png");
       papers = p5.loadImage("./objects/papers.png");
       plant = p5.loadImage("./objects/plant.png");
       pot1 = p5.loadImage("./objects/pot1.png");
       printer = p5.loadImage("./objects/printer.png");
       stapler = p5.loadImage("./objects/stapler.png");
       table = p5.loadImage("./objects/table.png");
       waterDispenser = p5.loadImage("./objects/waterDispenser.png");
       //objects=[.........]
       // jumpSound = loadSound("assets/sound/jump.wav");
       // deadSound = loadSound("assets/sound/dead.wav");
  };

   p5.setup = () => {
     p5.createCanvas(0.9*p5.windowWidth, 200);
     p5.background("#7FB3D5");
     round.player.setupPlayer();
     console.log(round.player.y)
     for (let i = 0; i < coffeeData.frames.length; i++) {
       let pos = coffeeData.frames[i].position;
       let img = coffeeSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
       coffeeAnimation.push(img);
     }
     for (let i = 0; i < transformData.frames.length; i++) {
       let pos = transformData.frames[i].position;
       let img = transformSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
       transformAnimation.push(img);
     }
     for (let i = 0; i < deadData.frames.length; i++) {
       let pos = deadData.frames[i].position;
       let img = deadSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
       deadAnimation.push(img);
     }
   };
 
   p5.draw = () => {
    if (playGame) {
        round.drawRound();
      if (round.player.caffeine<0 && round.player.dead) {
          //deadSound.play();
          round.endGame('You ran out of caffeine and collapsed. \n However, you can still hire Gosha.');
          p5.noLoop();
          console.log('You died.');
        }
      } else {
        round.startGame();
      }
   };

   p5.keyPressed = () => {
       console.log(p5.keyCode);
       if (p5.keyCode === 67 && !playGame) {
           console.log('drinking coffee...')
           drinkCoffee=true;
         }
         if (p5.keyCode === 32 && !playGame && drinkCoffee) {
           playGame=true;
         }
         if (p5.keyCode === 32 && playGame && drinkCoffee) {
           round.player.jump();
         }
         if (p5.keyCode === 67 && playGame) {
           console.log('use caffeine');
           console.log('game.player.useCoffee();')
         }
   }

};
  
  
 
 useEffect(() => {
  new p5(Sketch);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 return (
  	<></>
 );
};
 
export default Game;