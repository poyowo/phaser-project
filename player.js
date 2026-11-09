class player{
    constructor(){
        this.name = "player";
        this.player = this.physics.add.sprite(50, 50, "obama");
        player.setCollideWorldBounds(true);
    }
}