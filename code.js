var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","82b603b8-d6d5-40c6-96fa-9954c99a1464","9f5dad2f-fca3-4f59-a382-d4d05bf408a1","f66628bc-6b30-4211-bf8d-c851a9bf0683","a831c5fe-8d35-4556-9405-efb357d5b5e2","74ed2ba4-679f-4764-bf8c-df6250b223cb","5b42b2d6-49a9-4a57-85d2-11d2ff4f65d3"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"LY6yxaCBFLv5JkO1RKwO7KKoS0fDP583","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"f","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cj5vKZwkbai8Xe59yzcWf7ZmwYwgkUMM","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"82b603b8-d6d5-40c6-96fa-9954c99a1464":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv/category_vehicles/enemyBlack3.png","frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv/category_vehicles/enemyBlack3.png"},"9f5dad2f-fca3-4f59-a382-d4d05bf408a1":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"f66628bc-6b30-4211-bf8d-c851a9bf0683":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png","frameSize":{"x":283,"y":334},"frameCount":1,"looping":true,"frameDelay":2,"version":"J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":334},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png"},"a831c5fe-8d35-4556-9405-efb357d5b5e2":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png"},"74ed2ba4-679f-4764-bf8c-df6250b223cb":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"B6mUms6yflHdiaD7nVfqAGRzs7rymc12","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B6mUms6yflHdiaD7nVfqAGRzs7rymc12/category_retro/retrocreature_01.png"},"5b42b2d6-49a9-4a57-85d2-11d2ff4f65d3":{"name":"net","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"chAObImDQ5.Q4RktibKO7Dfpoa9LYi_j","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/5b42b2d6-49a9-4a57-85d2-11d2ff4f65d3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,15,200,20)
net.shapeColor="red"
var gameState="start"
var goal =0;
var death = 0
net.setAnimation("net");
net.scale=.1;
hero.setAnimation("hero1");
hero.scale=.5;
enemy1.setAnimation("enemy");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {


createEdgeSprites()

hero.bounce(edges)
enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}


 






if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}

  
drawSprites()
if (death==3){
 textSize(30)
      text("game over",100,180)
  hero.velocityX=0
  hero.velocityY=0
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350)
   textSize(20)
  fill("blue")
  text("Death:"+death,20,350);
}
if (gameState=="start"){
      textSize(17.5)
      text("Welcome!",100,180)
      if(keyDown("RIGHT_ARROW"))
    gameState="play"
      }





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
