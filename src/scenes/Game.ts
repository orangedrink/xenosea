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
        key:'player-l3-idle',
        assetKey:'player-l1',
        frames: [0],
        rate: 4
      }
    ];
    this.animations = [];
  }

  preload() {
  }

  create() {
    const logo = this.add.image(400, 300, 'logo');
    this.animDefs.forEach((anim: { key: string; assetKey: string; frames: any; rate: number; }) => {
      this.createAnim(anim.key,anim.assetKey,anim.frames, anim.rate);
    });
    const spr = this.add.sprite(600, 370, 'player-l1');
    spr.play({key:'player-l1-idle', repeat: -1});
  }
}
