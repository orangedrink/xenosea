import Phaser from 'phaser';
import config from './config';
import TitleScene from './scenes/Title';

new Phaser.Game(
  Object.assign(config, {
    scene: [TitleScene]
  })
);
