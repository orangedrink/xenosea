import Phaser from 'phaser';
import animDefs from './animDefs'
import Player from './classes/Player'
export default class Demo extends Phaser.Scene {
  private player: any;
  private animDefs: any;
  private createAnim(key:string, assetKey:string, frames:any, rate: integer) {
    const anim = this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(assetKey, { frames: frames }),
      frameRate: rate
    })
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
    const spr = this.add.sprite(400, 300, 'ocean-supermetrid');
    this.player = new Player({x:100, y:100, scene: this, key:'player-l1'});
    spr.alpha = 0
    spr.play({key:'ocean-supermetrid-idle', repeat: -1});
    this.tweens.add({
      targets: spr,
      alpha: 1,
      duration: 1000,
    });
  }
  update(){
    this.player.update();
  }
}
