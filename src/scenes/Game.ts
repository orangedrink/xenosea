import Phaser from 'phaser';
import animDefs from './animDefs'
import levels from '../levels'
import Player from './classes/Player'
import OceanFish1 from './classes/OceanFish1'
import OceanFish2 from './classes/OceanFish2'
import DeepFish1 from './classes/DeepFish1'
import DeepFish2 from './classes/DeepFish2'
import Supermetrid from './classes/Supermetrid'
export default class Demo extends Phaser.Scene {
  private player: any;
  private animDefs: any;
  public keys:any;
  public enemies: Array<any>;
  private levelIndex = 0;
  private level : any;
  private createAnim(key:string, assetKey:string, frames:any, rate: integer) {
    const anim = this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(assetKey, { frames: frames }),
      frameRate: rate
    })
  }
  private initLevel(){
    this.level = levels[this.levelIndex];
    this.background = this.add.image(0, -100, this.level.background).setOrigin(0,0);
    this.background.setScrollFactor(0,.25);
  }
  private drawLevel(){
  }
  private updateEnemies(t,d){
    const _this = this;
    if(Math.random()>.5 && this.enemies.length<110-this.player.health){
      this.spawnEnemy()
    }
    this.enemies.forEach(function(enemy, i){
      if(enemy.active){
        enemy.update(t,d)
        if(_this.player.y-enemy.y>400){
          enemy.destroy()
          _this.enemies.splice(i,1)

        }
      }else{
        console.log(enemy)
        enemy.destroy()
        _this.enemies.splice(i,1)
        console.log(_this.enemies.length)
      }
    })
  }
  
  private spawnEnemy(){
    let spr = {};
    console.log(this.player.y)
    if(this.player.y<2000){
      spr = new OceanFish1({x: (Math.random()*400)+this.player.x-200, y: (Math.random()*600)+this.player.y+300, scene: this});
    } else if(this.player.y<4000){
      spr = new OceanFish2({x: (Math.random()*400)+this.player.x-200, y: (Math.random()*600)+this.player.y+300, scene: this});
    } else if(this.player.y<6000){
      spr = new DeepFish1({x: (Math.random()*400)+this.player.x-200, y: (Math.random()*600)+this.player.y+300, scene: this});
    } else if(this.player.y<8000){
      spr = new DeepFish2({x: (Math.random()*400)+this.player.x-200, y: (Math.random()*600)+this.player.y+300, scene: this});
    }else{
      spr = new Supermetrid({x: (Math.random()*400)+this.player.x-200, y: (Math.random()*600)+this.player.y+300, scene: this});
    }
    var _this = this;
    this.physics.add.collider(spr, this.player, function (enemy, player){
      player.health-=enemy.damage;
      //enemy.destroy()
      player.setTintFill();
      player.setScale(.75);
      _this.tweens.add({
        targets: player,
        scale: 1,
        duration: 100,
        onCompleteScope: _this,
        onComplete: function () {
          player.clearTint();
        }
    });

      _this.tweens.add({
        targets: enemy,
        scale: 0,
        duration: 50,
        onCompleteScope: _this,
        onComplete: function () {
          enemy.destroy();
        }
      })
      console.log(_this.player.health)
    })
    this.enemies.push(spr);
  }

  constructor() {
    super('GameScene');
    this.animDefs = animDefs;
    this.enemies = []
  }

  preload() {
  }

  create() {
    this.animDefs.forEach((anim: { key: string; assetKey: string; frames: any; rate: number; }) => {
      this.createAnim(anim.key,anim.assetKey,anim.frames, anim.rate);
    });
    this.initLevel();
    this.player = new Player({x:400, y:100, scene: this, key:'player-l1'});
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.keys = this.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space'
    })
    this.tweens.add({
      targets: this.spr,
      alpha: 1,
      duration: 1000,
    });
    this.particles = this.add.particles('bubble');
    this.particles.createEmitter({
        y: this.player.y+200,
        x: { min: 0, max: 800 },
        lifespan: 4000,
        speedY: { min: -80, max: -200  },
        scale: { start: 0.8, end: 0 },
        alpha: { start: 0.3, end: 0 },
        quantity: 1,
        blendMode: 'ADD'
    });
    this.spawnEnemy()

  }
  update(t,d){
    this.timer = t;
    this.drawLevel();
    this.player.update(t,d);
    this.updateEnemies(t,d)
    this.particles.setPosition(this.player.x-400, this.player.y+200);
  }
}
