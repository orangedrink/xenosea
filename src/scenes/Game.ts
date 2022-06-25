import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }
  private animations: any;
  private createAnim(key:string, assetKey:string, frames:any) {
    const anim = this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(assetKey, { frames: frames }),
      frameRate: 16
    })
    this.animations.push(anim)
  }

  preload() {
  }

  create() {
    const logo = this.add.image(400, 300, 'logo');
    this.createAnim('player-l1-idle','player-l1',[0]);

  }
}
