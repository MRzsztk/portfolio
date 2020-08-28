import React, { useEffect } from "react";
import * as p5 from "p5";
 
const Game = () => {
 const Sketch = p5 => {
   const width=0.9*p5.windowWidth;
   const height=200;
   let drinkCoffee=false;
   let playGame=false;
   let coffeeData, coffeeSpritesheet, transformData, transformSpritesheet, deadData, deadSpritesheet;
   let coffeeAnimation=[];
   let transformAnimation=[];
   let deadAnimation=[];


   p5.preload = () => {
    coffeeData = p5.loadJSON('./player/coffeeData.JSON');
    coffeeSpritesheet = p5.loadImage('./player/coffeeSpritesheet.png');
    transformData = p5.loadJSON('./player/transformData.JSON');
    transformSpritesheet = p5.loadImage('./player/transformSpritesheet.png');
    deadData = p5.loadJSON('./player/deadData.JSON');
    deadSpritesheet = p5.loadImage('./player/deadSpritesheet.png');
    // jumpSound = loadSound("assets/sound/jump.wav");
    // deadSound = loadSound("assets/sound/dead.wav");
  };

   p5.setup = () => {
     p5.createCanvas(0.9*p5.windowWidth, 200);
     p5.background("#7FB3D5");
     p5.stroke(52, 73, 94);
     p5.line(0, height-14, width, height-14);
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
console.log('drawing')
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
        console.log("game.player.jump();")
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