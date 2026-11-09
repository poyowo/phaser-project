var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); // creates a new "game" object with the config listed in the config object

function preload(){ // loads all assets necessary for the game BEFORE it starts
    this.load.image('obama', 'assets/obama.jpg');
}

function create(){ // after loading the assets, they are actually used by this function
    this.add.image(600, 800, 'obama');
}

function update(){ // this function is ran periodically to update the game state

}