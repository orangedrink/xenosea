import Phaser from 'phaser';
import animDefs from './animDefs'
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
    const spr = this.add.sprite(600, 370, 'ocean-blast');
    spr.play({key:'deep-blast-right-idle', repeat: -1});
  }
}
