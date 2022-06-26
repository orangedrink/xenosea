import Enemy from './Enemy'

export default class DeepCrab extends Enemy {
    constructor(config:any) {
        config.key = 'deep-crab';
        super(config);
        this.play({key:'deep-crab-crawl-up', repeat: -1});
    }
    private lastChanged = 0;
    private timeInterval = 300
    public direction = 'up'
    public damage = 40;
    private health = 3
    public hit(player): void {
        this.clearTint();
        this.setScale(1.5)
        if(this.health>0){
            this.health--;
        }else{
            this.destroy();
            console.log('hit', this.health)
        }
        player.health += 10;        
        if(Math.random()*100>90){
                player.createPowerUp(this.x, this.y, 'powerup-torpedo1', function(powerup, player){
                console.log('powerup collider')
                player.ship ='player-l2'
                player.speed = 60;
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })                               
        }




    }
    update(t,d){
        let vel;
        if(Math.abs(this.scene.player.x-this.x)<100){
            vel = 150
        }else{
            vel = 50            
        }
        this.scene.physics.accelerateToObject(this, this.scene.player, vel, 300, 300);
    }
}