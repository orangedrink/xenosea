import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'deep-fish2';
        super(config);
    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 30;
    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-70);
                this.play({key:'deep-fish2-swim-left', repeat: -1});
                if(this.scene.player.x<this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
            }else{
                this.direction = 'right'
                this.setVelocityX(70);
                if(this.scene.player.x>this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
                this.play({key:'deep-fish2-swim-right', repeat: -1});
            }
        }
        this.setVelocityY(0);
        if(this.direction == 'right'){
            //this.setVelocityX(20);
        }else{
            //this.setVelocityX(-20);
        }
    }
}