import Phaser from 'phaser';

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
    this.animDefs = [
      {
        key:'player-l1-idle',
        assetKey:'player-l3',
        frames: [0,1,4,4,4,4,1,0,0,0],
        rate: 8
      }
    ];
    this.animations = [];
  }

  preload() {
  }

  create() {
    this.animDefs.forEach((anim: { key: string; assetKey: string; frames: any; rate: number; }) => {
      this.createAnim(anim.key,anim.assetKey,anim.frames, anim.rate);
    });
    const spr = this.add.sprite(600, 370, 'player-l1');
    spr.play({key:'player-l1-idle', repeat: -1});
  }
}
