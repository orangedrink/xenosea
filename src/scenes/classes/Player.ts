export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }

    update(...args: any[]): void {
        this.x++;
    }
}