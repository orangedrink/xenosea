import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  preload() {
    this.load.image('logo', 'assets/comingsoon.png');
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






  }

  create() {
    const logo = this.add.image(400, 300, 'logo');


  }
}
