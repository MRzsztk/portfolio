import React, { useEffect } from "react";
import * as p5 from "p5";
 
const Game = () => {
 const Sketch = p5 => {
   //class collision text
   class CollisionText {
    constructor(object, message) {
        this.object=object;
        this.x = round.player.x;
        this.y = round.player.y-10;
        this.text=message;
        this.fade = 255;
        this.fadeAmount = 1;
      }
      drawText() {
          if (this.y>-15) {
              this.y-=1.5;
              //this.x-=0.5;
          }
          if (this.fade<0) {
              this.fadeAmount=2;
          }
          if (this.fade>255) {
              this.fadeAmount=-10;
          }
          this.fade -= this.fadeAmount; 
          if (this.object==='coin') {
            p5.fill(21, 67, 96, this.fade)
          } else if (this.object==='stapler') {
            p5.fill(179, 0, 0, this.fade)
          } else {
            p5.fill(24, 120, 5, this.fade)
          }
          p5.text(this.text, this.x, this.y);
      }
}  

  //class Obstacle
  class Obstacle {
    constructor(y, index) {
      this.x = width;
      this.y = y;
      this.frames = 0;
      this.item=objectArray[index];
      this.points = this.item.points;
      this.message=this.item.message;
      this.name=this.item.name;
      this.img = this.item.img;
      this.width = this.img.width || 25;
      this.height = this.img.height || 25;
      this.alpha = 255;
    }
    checkCollisionXY() {
      let leftSide = this.x-5;
      let rightSide = this.x + this.width+5;
      let playerLeftSide = round.player.x-25;
      let playerRightSide = round.player.x + round.player.width+25;
      let topSide = this.y-5;
      let bottomSide = this.y + this.height+5;
      let playerTopSide = round.player.y-25;
      let playerBottomSide = round.player.y + round.player.height+25;
      let xCollision =
        leftSide > playerLeftSide &&
        leftSide < playerRightSide &&
        rightSide > playerLeftSide  &&
        rightSide < playerRightSide;
      let yCollision =
        topSide > playerTopSide &&
        topSide < playerBottomSide &&
        bottomSide > playerTopSide &&
        bottomSide < playerBottomSide;
      if (yCollision && xCollision) {
        return true;
      } else {
        return false;
      }
    }
    drawObstacle() {
      if (!round.over) {
        this.x -= 5;
        this.yMod=0;
          if (this.frames%20<10) {
            this.yMod=-(10-this.frames%20);
          } else {
            this.yMod=20-this.frames%20;
          }
        if (this.name==='coin' || this.name==='react') {
          this.y+=0.1*this.yMod;
          p5.image(this.img[Math.floor(this.frames/3)%4], this.x, this.y, 25, 25);
          this.frames++;
        } else if (this.name==='stapler') {
            this.x-=7; 
            //this.y+=0.05*this.yMod;
            p5.image(this.img, this.x, this.y, this.width, this.height);
            //this.frames++;
        } else {
          this.y+=0.15*this.yMod;
          p5.image(this.img, this.x, this.y, this.width, this.height);
          this.frames++;
        }
      } else if (this.name==='coin' || this.name==='react') {
        p5.tint(255, this.alpha); 
        p5.image(this.img[0], this.x, this.y, this.width, this.height);
        p5.tint(255, 255); 
        this.alpha>0 ? this.alpha-=5 : round.obstacles=[];
      } else {
        p5.tint(255, this.alpha); 
        p5.image(this.img, this.x, this.y, this.width, this.height);
        p5.tint(255, 255); 
        this.alpha>0 ? this.alpha-=5 : round.obstacles=[];
      }
    }
  }  
  
  //class furniture
    class Furniture {
        constructor(index, x) {
          this.x = x;
          this.item=furnitureArray[index];
        }
        drawFurniture() {
          p5.image(this.item, this.x, height-this.item.height);
          if (playGame && !round.over) {
            this.x -= 3;
          }
        }
      }

    //class Player
    class Player {
        constructor() {
          this.gravity = 0.85;
          this.speed = 13;
          this.jumps = 0;
          this.x = 0.3*width;
          this.caffeine = 100;
          this.coffees = 3;
          this.points = 0;
          this.dead = false;
          this.won = false;
        }
        setupPlayer() {
          this.y = height - pRun.height;
          this.width = pRun.width;
          this.height = pRun.height;
        }
        jump() {
          this.jumps += 1;
          if (this.jumps < 2) {
            // jumpSound.play();
            this.speed = -15.5;
          }
        }
        drawPlayer() {
          if (!this.won) {
            this.caffeine-=0.1;
          }
          //to optimize
          this.speed += this.gravity;
          this.y += this.speed;
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
          } else if (this.won) {
            p5.image(pIdle, 0.3*width-4, height-pIdle.height*2, pIdle.width*2, pIdle.height*2);
            round.over = true;
          } else if (!this.dead) {
            p5.image(pRun, this.x, this.y, this.width, this.height);
          }
        }
        drawStats() {
          p5.stroke(21, 67, 96);
          p5.line(0, 35, this.caffeine*3, 35);
          p5.noStroke();
          p5.textFont(VT323);
          p5.textAlign(p5.LEFT);
          p5.fill(21, 67, 96);
          p5.text('caffeine', 3, 15);
          p5.textAlign(p5.RIGHT);
          p5.text('points', width-150, 15);
          p5.textSize(24);
          p5.text(this.points, width-150, 35);
          p5.textAlign(p5.LEFT);
          p5.textSize(18);
        }
        drawCoffee() {
          for (let i=0; i<this.coffees; i++) {
      p5.image(coffee, 3+i*(coffee.width*0.7+2), 45, coffee.width*0.7, coffee.height*0.7)
          }
        }
        useCoffee() {
          if (this.coffees>0) {
            //insulinVialUse.play();
            this.coffees--;
            this.caffeine+=50;
            this.drawCoffee();
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
          this.over = false;
        }
        drawRound() {
          p5.clear();
          p5.frameRate(30);
          p5.textSize(18);
          p5.textAlign(p5.CENTER, p5.CENTER);
          if (p5.frameCount % 250 === 0) {
            let index = Math.floor(p5.random(4, furnitureArray.length));
            this.furniture.push(new Furniture(index, width));
          }
          this.furniture.forEach((office) => {
            office.drawFurniture();
          }); 
          this.messages.forEach((message) => {
            message.drawText();
          });
              //randomizing obstacles
              if (p5.frameCount % 65 === 0) {
                let randomY = p5.random(40, height - 40);
                let randomO = Math.floor(p5.random(0, objectArray.length));
                this.obstacles.push(new Obstacle(randomY,randomO));
              }
              this.obstacles.forEach((obstacle) => {
                obstacle.drawObstacle();
                obstacle.checkCollisionXY();
              });
              this.obstacles = this.obstacles.filter((obstacle) => {
                if (obstacle.checkCollisionXY()) {
                  round.player.points+=obstacle.points;
                  console.log(obstacle.name, obstacle.points);
                  if (obstacle.name==='coffee') {
                    this.player.coffees++;
                    this.player.drawCoffee();
                  }
                  this.messages.push(new CollisionText(obstacle.name, obstacle.message));
                  return false;
                } else {
                  return true;
                }
              });
          this.player.drawStats();
          this.player.drawCoffee();
          this.player.drawPlayer();
        }
        endGame(option, message) {
          p5.noStroke();
          p5.fill(255);
          p5.rect(width/2-180, height/2-70, 360, 140);
          //p5.textFont(this.font2);
          p5.textAlign(p5.CENTER, p5.CENTER);
          p5.fill(21, 67, 96);
          p5.textSize(24);
          p5.text(option, width/2, height/2-30)
          p5.textSize(18);
          p5.text(message, width/2, height/2+30)
        }
        startGame() {
          p5.clear();
          this.furniture.forEach((piece) => {
            piece.drawFurniture();
          }); 
          
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
          p5.textAlign(p5.CENTER, p5.CENTER);
          p5.fill(21, 67, 96);
          if (!drinkCoffee) {
            p5.textSize(20);
            p5.text('*press C to have a coffee.*', width/2, height/2);
          } 
          else if (drinkCoffee&&!this.ready) {
            p5.textSize(20);
            p5.text('*gulp*', width/2, height/2+10)
          } else if (this.ready) {
            p5.textSize(20);
            p5.text(`READY TO ROLL \n collect 100 points to win \n \n *press SPACEBAR to jump*\n*press C to drink more coffee.*`, width/2, height/2);
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
   let office0, office1, office2, office3, office4, aloe, coffee, copier, desk, exitdoor, stapler;
   //collectibles
   let coin0, coin1, coin2, coin3;
   let react0, react1, react2, react3;
   //spritesheets and json
   let coffeeData, coffeeSpritesheet, transformData, transformSpritesheet, deadData, deadSpritesheet;
   //animation arrays
   let coffeeAnimation=[];
   let transformAnimation=[];
   let deadAnimation=[];
   let furnitureArray=[];
   let objectArray=[];
    //font
    let VT323;

   p5.preload = () => {
       VT323 = p5.loadFont('./VT323-Regular.ttf');
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
       coin0 = p5.loadImage('./coin/c1.png');
       coin1 = p5.loadImage('./coin/c2.png');
       coin2 = p5.loadImage('./coin/c3.png');
       coin3 = p5.loadImage('./coin/c4.png');
       react0 = p5.loadImage('./react/react0.png');
       react1 = p5.loadImage('./react/react1.png');
       react2 = p5.loadImage('./react/react2.png');
       react3 = p5.loadImage('./react/react3.png');
       office0 = p5.loadImage('./office/office0.png');
       office1 = p5.loadImage('./office/office1.png');
       office2 = p5.loadImage('./office/office2.png');
       office3 = p5.loadImage('./office/office3.png');
       office4 = p5.loadImage('./office/office4.png');
       aloe = p5.loadImage("./objects/aloe.png");
       coffee = p5.loadImage("./coffee.png");
       copier = p5.loadImage("./objects/copier.png");
       desk = p5.loadImage("./objects/desk.png");
       exitdoor = p5.loadImage("./objects/exitdoor.png");
       stapler = p5.loadImage("./objects/stapler.png");
       furnitureArray=[copier, desk, aloe, exitdoor, office0, office1, office2, office3, office4];
       objectArray=[
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 10, message: '+10'},
         {name:'react', img: [react0, react1, react2, react3], points: 25, message: '+25 for react!'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 7, message: '+9'},
         {name:'stapler', img: stapler, points: -20, message: 'you got hit by a stapler!  -20'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 7, message: '+8'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 7, message: '+7'},
         {name:'stapler', img: stapler, points: -10, message: 'you got hit by a stapler!  -10'},
         {name:'coffee', img: coffee, points: 0, message: '*coffee collected*'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 1, message: '+1'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 1, message: '+2'},
         {name:'react', img: [react0, react1, react2, react3], points: 25, message: '+25 for react!'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 3, message: '+3'},
         {name:'stapler', img: stapler, points: -10, message: 'you got hit by a stapler!  -10'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 1, message: '+4'},
         {name:'coin', img: [coin0, coin1, coin2, coin3], points: 5, message: '+5'},
         {name:'stapler', img: stapler, points: -10, message: 'you got hit by a stapler!  -10'},
         {name:'coffee', img: coffee, points: 0, message: '*coffee collected*'}
        ];
       // jumpSound = loadSound("assets/sound/jump.wav");
       // deadSound = loadSound("assets/sound/dead.wav");
  };

   p5.setup = () => {
     p5.createCanvas(0.9*p5.windowWidth, 200);
     p5.background("#7FB3D5");
     p5.textFont(VT323);
     round.player.setupPlayer();
     round.furniture.push(new Furniture(0, 0.05*width));
     round.furniture.push(new Furniture(1, 0.05*width+2*copier.width));
     round.furniture.push(new Furniture(2, 0.85*width));
     round.furniture.forEach((piece) => {
      piece.drawFurniture();
    }); 
     console.log(round.furniture)
     //console.log(round.player.y)
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
     console.log('game is set up')
   };
 
   p5.draw = () => {
    if (playGame) {
        round.drawRound();
      if (round.player.caffeine<0 && round.player.dead) {
          //deadSound.play();
          round.endGame('GAME OVER.', 'You ran out of caffeine and collapsed. \n However, you can still hire Gosha.');
          // p5.noLoop();
          console.log('You died.');
        } else if (round.player.points>=100 && round.player.jumps===0) {
          round.player.won=true;
          //deadSound.play();
          round.endGame('YOU WON.', 'You acquired a voucher to hire Gosha. \n Contact me to redeem your voucher.');
          console.log('You won.');
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
           console.log('*gulp*');
           round.player.useCoffee();
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