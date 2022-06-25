export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        var particles = this.scene.add.particles('bubble');

        this.emitter = particles.createEmitter({
            lifespan: 1000,
            speedX: { min: -50, max: 50 },
            quantity: 1,
            gravityY: -50,
            delay:0,
            angle: {min: 90, max: 180},
            scale: { start: 0.2, end: .5, ease: 'Power3' },
            alpha: { start: 0.6, end: 0, ease: 'Power3' },
            blendMode: 'ADD'
        });
        this.emitter.startFollow(this);
    }
    public direction: any;
    public speed = 30;
    update(...args: any[]): void {
        if(this.scene.keys.right.isDown){
            this.direction = 'right';
        }else if(this.scene.keys.left.isDown){
            this.direction = 'left';
        }else if(this.scene.keys.up.isDown){
            this.direction = 'up';
        }else if(this.scene.keys.down.isDown){
            this.direction = 'down';
        }else if(this.scene.keys.space.isDown){

        } else{
            this.direction = 'none';
        }

        if(this.direction == 'right'){
            this.setVelocityX(this.speed)
        } else if(this.direction == 'left'){
            this.setVelocityX(0-this.speed)
        } else if(this.direction == 'up'){
            this.emitter.frequency=20;
            this.emitter.setSpeedY(50);
            this.emitter.emitParticle(1)
            if(this.y>0){
                this.setVelocityY(0-this.speed)
            }
        } else if(this.direction == 'down'){
            this.setVelocityY(this.speed)
        } else {
            this.emitter.frequency=1000;
            this.emitter.setSpeedY(2);
        }
    }
}