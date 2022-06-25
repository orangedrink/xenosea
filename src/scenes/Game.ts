import Phaser from 'phaser';
import animDefs from './animDefs'
export default class Demo extends Phaser.Scene {
  private animations: any;
  private animDefs: any;
  private createAnim(key:string, assetKey:string, frames:any, rate: integer) {
    const anim = this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(assetKey, { frames: frames }),
      frameRate: rate
    })
    this.animations.push(anim)
  }

  constructor() {
    super('GameScene');
    this.animDefs = animDefs;
    this.animations = [];
  }

  preload() {
  }

  create() {
    this.animDefs.forEach((anim: { key: string; assetKey: string; frames: any; rate: number; }) => {
      this.createAnim(anim.key,anim.assetKey,anim.frames, anim.rate);
    });
    const spr = this.add.sprite(600, 370, 'ocean-blast');
    spr.play({key:'ocean-blast-right-idle', repeat: -1});
    const spr2 = this.add.sprite(630, 370, 'ocean-blast');
    spr2.play({key:'ocean-blast-left-idle', repeat: -1});
  }
}
