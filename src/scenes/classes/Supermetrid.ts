import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-supermetrid';
        super(config);
        this.health = 20 - (this.scene.player.health / 10);
        this.setScale(1.5)

    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 50;
    private health;
    public hit(player): void {
        this.clearTint();
        this.setScale(1.5)
        if(this.health>0){
            this.health--;
        }else{
            this.destroy();
            if(Math.random()*100>90){
                player.createPowerUp(this.x, this.y, 'powerup-torpedo1', function(powerup, player){
                console.log('powerup collider')
                player.ship ='player-l2'
                player.speed = 90;
                player.play('player-l2-idle')
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })  
        }
        player.health += 10;

                                               
    }

    }
    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-70);
                this.play({key:'ocean-supermetrid-idle', repeat: -1});
                if(this.scene.player.x<this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
            }else{
                this.direction = 'right'
                this.setVelocityX(70);
                if(this.scene.player.x>this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
                this.play({key:'ocean-supermetrid-idle', repeat: -1});
            }
        }
        this.setVelocityY(-30);
        if(this.direction == 'right'){
            //this.setVelocityX(20);
        }else{
            //this.setVelocityX(-20);
        }
    }
}