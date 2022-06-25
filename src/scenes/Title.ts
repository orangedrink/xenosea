import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  preload() {
    this.load.image('logo', 'assets/comingsoon.png');

//PLAYER ASSETS


    this.load.spritesheet('player-l1', 
        '/assets/sprites/player/l1.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-l2', 
        '/assets/sprites/player/l2.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-l2', 
        '/assets/sprites/player/l2.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-laser1', 
        'assets/sprites/player/laser1.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.spritesheet('player-laser2', 
        'assets/sprites/player/laser2.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.spritesheet('player-laser3', 
        'assets/sprites/player/laser3.png',
        { frameWidth: 16, frameHeight: 80 }
    );
    this.load.spritesheet('player-laserblast', 
        'assets/sprites/player/player-laserblast.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo1', 
        'assets/sprites/player/torpedo1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo2', 
        'assets/sprites/player/torpedo2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo3', 
        'assets/sprites/player/torpedo3.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-laser1', 
        'assets/sprites/player/powerup-laser1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-laser2', 
        'assets/sprites/player/powerup-laser2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo1', 
        'assets/sprites/player/powerup-torpedo1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo2', 
        'assets/sprites/player/powerup-torpedo2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo3', 
        'assets/sprites/player/powerup-torpedo3.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism1', 
      'assets/sprites/player/powerup-macroorganism1.png',
      { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism2', 
        'assets/sprites/player/powerup-macroorganism2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism3', 
        'assets/sprites/player/powerup-macroorganism3.png',
        { frameWidth: 16, frameHeight: 16 }
    );


//OCEAN ASSETS


    this.load.spritesheet('ocean-fish1', 
      'assets/sprites/ocean/fish1.png',
      { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-fish2', 
        'assets/sprites/ocean/fish2.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-yardworm', 
        'assets/sprites/ocean/yardworm.png',
        { frameWidth: 32, frameHeight: 32 }
    );

    this.load.spritesheet('macroorganism1', 
        'assets/sprites/ocean/macroorganism1.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('macroorganism2', 
        'assets/sprites/ocean/macroorganism2.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('macroorganism3', 
        'assets/sprites/ocean/macroorganism3.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('supermetrid', 
        'assets/sprites/ocean/supermetrid.png',
        { frameWidth: 64, frameHeight: 64 }
    );

    this.load.spritesheet('ocean-projectile-left', 
        'assets/sprites/ocean/projectile-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-projectile-right', 
        'assets/sprites/ocean/projectile-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-blast-left', 
        'assets/sprites/ocean/blast-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-blast-right', 
        'assets/sprites/ocean/blast-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    //DEEP ASSETS

    this.load.spritesheet('deep-fish1', 
        'assets/sprites/deep/fish1.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('deep-fish2', 
        'assets/sprites/deep/fish2.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('deep-crab', 
        'assets/sprites/deep/crab.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('deep-projectile-left', 
        'assets/sprites/deep/projectile-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('deep-projectile-right', 
        'assets/sprites/deep/projectile-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('deep-blast-left', 
        'assets/sprites/deep/blast-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('deep-blast-right', 
        'assets/sprites/deep/blast-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

  }



  create() {
    const logo = this.add.image(400, 300, 'logo');


  }
}
