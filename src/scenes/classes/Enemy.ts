export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }
    public damage = 1;
    public hit(){
        this.destroy();
        console.log('Enemy destroyed!')
    }
}