import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/comingsoon.png');
  }

  create() {
    const logo = this.add.image(400, 300, 'logo');


  }
}
