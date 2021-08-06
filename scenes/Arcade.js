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
    this.load.spritesheet("walking_player", "../assets/images/alienWalk.png", {
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

    this.add.sprite(463, 432, "enviornment", 5);
    this.add.sprite(80, 272, "enviornment", 6);
    this.add.sprite(144, 368, "enviornment", 4);
    this.add.sprite(336, 336, "enviornment", 7);
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();

    // lowest level
    platforms.create(64, 624, "ground_tiles");
    platforms.create(192, 624, "ground_tiles");
    platforms.create(320, 624, "ground_tiles");
    platforms.create(448, 624, "ground_tiles");
    platforms.create(576, 624, "ground_tiles");

    // floating rocks
    platforms.create(176, 528, "enviornment", 12);
    platforms.create(208, 528, "enviornment", 13);
    platforms.create(400, 464, "enviornment", 12);
    platforms.create(432, 464, "enviornment", 13);
    platforms.create(464, 464, "enviornment", 15);
    platforms.create(496, 496, "enviornment", 12);
    platforms.create(336, 368, "enviornment", 15);

    // L shaped platform
    platforms.create(176, 400, "enviornment", 8);
    platforms.create(144, 400, "enviornment", 8);
    platforms.create(112, 400, "enviornment", 9);
    platforms.create(80, 400, "enviornment", 8);
    platforms.create(80, 368, "enviornment", 14);
    platforms.create(80, 336, "enviornment", 15);
    platforms.create(80, 304, "enviornment", 15);

    // highest level blocks
    platforms.create(176, 240, "enviornment", 10);
    platforms.create(304, 240, "enviornment", 11);
    platforms.create(432, 176, "enviornment", 10);
    platforms.create(432, 208, "enviornment", 11);
    platforms.create(560, 80, "enviornment", 11);

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(47, 592, "walking_player");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "walking_player_anim",
      frames: this.anims.generateFrameNames("walking_player", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    });

    // player.play("walking_player_anim", 0, 0);

    return player;
  }

  update() {
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("walking_player_anim", true);
      this.player.flipX = false;
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("walking_player_anim", true);
      this.player.flipX = true;
    } else {
      this.player.setVelocityX(0);
      this.player.anims.stop();
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-550);
    } 
  }
}
