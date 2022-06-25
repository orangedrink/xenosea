export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.ship = config.key;
        this.scene.physics.add.existing(this);
        var particles = this.scene.add.particles('bubble');

        this.emitter = particles.createEmitter({
            lifespan: 1000,
            speedX: { min: -50, max: 50 },
            quantity: 1,
            gravityY: -50,
            angle: {min: 90, max: 180},
            scale: { start: 0.2, end: .5, ease: 'Power3' },
            alpha: { start: 0.6, end: 0, ease: 'Power3' },
            blendMode: 'ADD'
        });
        this.emitter.startFollow(this);
    }
    public direction: any;
    public shooting: boolean = false;
    public speed = 40;
    public weapon = 'laser1';
    public ship;
    public cooldown = 60
    private lastShot = 0;
    private range = 300
    private doShoot(){
        
            let yoff = 16;
            let duration = this.range
            if(this.weapon=='laser3'){
                yoff = 40
            }else if(this.weapon.indexOf('torpedo')==0){
                duration = duration*5
            }
            const laser = this.scene.physics.add.image(this.x, this.y+yoff, `player-${this.weapon}`);
          
            this.scene.tweens.add({
                targets: laser,
                alpha: 1,
                y: this.y+this.range,
                duration: duration,
                onCompleteScope: this,
                onComplete: function () {
                    laser.destroy();
                }
              });
              const _this = this;
              this.scene.enemies.forEach(function(enemy){
                _this.scene.physics.add.collider(laser, enemy, function (player, spr ){
                    console.log('collide')
                    spr.destroy()
                    player.destroy()
                },);    
              })
    }
    private setShooting(shooting:boolean){
        if(this.shooting == shooting){
            return;
        }
        if(shooting){
            this.play(`${this.ship}-shooting-${this.weapon}`)
            this.doShoot();
        }else{
            this.play(`${this.ship}-idle`)
        }
        this.shooting = shooting;
    }

    private setDirection(direction: string){
        if(this.direction == direction){
            return;
        }
        this.direction = direction;
    }

    update(t, d): void {
        if(this.scene.keys.right.isDown){
            this.setDirection('right');
        } else
        if(this.scene.keys.left.isDown){
            this.setDirection('left');
        } else
        if(this.scene.keys.up.isDown){
            this.setDirection('up');
        } else
        if(this.scene.keys.down.isDown){
            this.setDirection('down');
        } else{
            this.setDirection('none');
        }

        if(this.scene.keys.space.isDown){
            this.setShooting(true);
        }else{
            this.setShooting(false);
        }
        if(this.shooting && t > this.lastShot + this.cooldown){
            this.lastShot = t;
            if(this.weapon == 'laser2' || this.weapon == 'laser3' ){
                this.doShoot();   
            }
        }
        if(this.direction == 'right'){
            this.setVelocityX(this.speed)
        } else if(this.direction == 'left'){
            this.setVelocityX(0-this.speed)
        } else if(this.direction == 'up'){
            this.emitter.frequency=20;
            this.emitter.setSpeedY(50);
            this.emitter.emitParticle(1)
            this.emitter.setAngle({min:90,max:0})
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