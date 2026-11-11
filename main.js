// Marco Sanico
// i don't remember the date i started this
// CIS223
// Main project file for final project

// import {player} from "player.js";
// once i figure out how importing works for both javascript and phaser i'll uncomment this and move everything
// update: enabling the import breaks the window display? will look into this later

var config = { // config for the game window (not a const because idk, maybe i wanna add gravity for a wind gimmick?)
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: {x: 0, y: 0}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config); // creates a new "game" object with the config listed in the config object


function preload(){ // loads all assets necessary for the game BEFORE it starts
    this.load.image("whitebg", "assets/white.png");
    this.load.image("obama", "assets/obama.jpg");
}

function create(){ // after loading the assets, they are actually used by this function
    this.add.image(300, 400, "whitebg");
    player = this.physics.add.image(50, 50, "obama");
    player.setColliderWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
    
}

function update(){ // this function is ran periodically to update the game state
    // player movement
    if (this.cursors.left.isDown){
        playerMove("left");
    }
    else if(this.cursors.right.isDown){
        playerMove("right");
    }else if(this.cursors.up.isDown){
        playerMove("up");
    }
    else if(this.cursors.down.isDown){
        playerMove("down");
    }else{
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
}


function playerMove(key){
    if(key === "up"){
        player.setVelocityY(160);
    }
    else if(key === "down"){
        player.setVelocityY(-160);
    }
    else if(key === "left"){
        player.setVelocityX(-160);
    }
    else if(key === "right"){
        player.setVelocityX(160);
    }
    else{
        window.alert("Error! playerMove function called without key parameter passed") // fallback error message just in case
    }
}