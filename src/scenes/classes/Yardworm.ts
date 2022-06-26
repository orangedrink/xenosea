import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-yardworm';
        super(config);
        this.play({key:'ocean-yardworm-crawl', repeat: -1});
    }
    private lastChanged = 0;
    private timeInterval = 300
    public direction = 'up'
    public damage = 5;
    update(t,d){
        let vel;
        if(Math.abs(this.scene.player.x-this.x)<100){
            vel = 150
        }else{
            vel = 20            
        }
        this.scene.physics.accelerateToObject(this, this.scene.player, vel, 300, 300);
    }
}