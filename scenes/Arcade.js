import Phaser from "phaser";

export default class Scene2 extends Phaser.Scene {
  constructor() {
    super("arcade");
  }

  preload() {
    this.load.spritesheet(
      "ground_tiles",
      "../assets/images/backgroundTiles.png",
      { frameHeight: 32, frameWidth: 128 }
    );
    this.load.spritesheet(
      "enviornment",
      "../assets/images/backgroundTiles.png",
      { frameHeight: 32, frameWidth: 32 }
    );
    this.load.spritesheet("walking_player", "../assets/images/Walk.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    // establish the player controlls
    this.cursors = this.input.keyboard.createCursorKeys();

    this.createEnviornment();

    const platforms = this.createPlatforms();

    this.player = this.createPlayer();

    this.physics.add.collider(this.player, platforms);
  }

  createEnviornment() {
    this.add.sprite(16, 592, "enviornment", 4);
    this.add.sprite(144, 592, "enviornment", 5);
    this.add.sprite(208, 592, "enviornment", 4);
    this.add.sprite(368, 592, "enviornment", 4);
    this.add.sprite(432, 592, "enviornment", 6);
    this.add.sprite(464, 592, "enviornment", 7);
    this.add.sprite(560, 592, "enviornment", 5);
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();

    platforms.create(64, 624, "ground_tiles");
    platforms.create(192, 624, "ground_tiles");
    platforms.create(320, 624, "ground_tiles");
    platforms.create(448, 624, "ground_tiles");
    platforms.create(576, 624, "ground_tiles");

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(42, 560, "walking_player");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "walking_player_anim",
      frames: this.anims.generateFrameNames("walking_player", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    player.play("walking_player_anim");

    return player;
  }

  update() {
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.flipX = false;
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.flipX = true;
    } else {
      this.player.setVelocityX(0);
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-160);
    }
    // if (this.cursors.up.isDown) {
    //   this.player.y -= 2;
    // }
    // if (this.cursors.down.isDown) {
    //   this.player.y += 2;
    // }
  }
}
