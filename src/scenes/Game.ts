import Phaser from 'phaser';
import animDefs from './animDefs'
import levels from '../levels'
import Player from './classes/Player'
export default class Demo extends Phaser.Scene {
  private player: any;
  private animDefs: any;
  public keys:any;
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
  constructor() {
    super('GameScene');
    this.animDefs = animDefs;
  }

  preload() {
  }

  create() {
    this.animDefs.forEach((anim: { key: string; assetKey: string; frames: any; rate: number; }) => {
      this.createAnim(anim.key,anim.assetKey,anim.frames, anim.rate);
    });
    this.initLevel();
    const spr = this.add.sprite(400, 300, 'ocean-supermetrid');
    this.player = new Player({x:400, y:100, scene: this, key:'player-l3'});
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    spr.alpha = 0
    spr.play({key:'ocean-supermetrid-idle', repeat: -1});
    this.keys = this.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      space: 'space'
    })
    this.tweens.add({
      targets: spr,
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
  }
  update(t,d){
    this.drawLevel();
    this.player.update(t,d);
    this.particles.setPosition(this.player.x-400, this.player.y+200);
  }
}
