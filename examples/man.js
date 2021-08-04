import Phaser from "phaser";

let man;
let cursors;

function preload() {
  this.load.spritesheet("idle_man", "./assets/images/Idle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  this.load.spritesheet("walking_man", "./assets/images/Walk.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();

  man = this.add.sprite(100, 200, "idle_man");
  this.anims.create({
    key: "idle_man_anim",
    frames: this.anims.generateFrameNames("idle_man", { start: 0, end: 5 }),
    frameRate: 6,
    repeat: -1,
  });
  // man = this.add.sprite(100, 200, "man");
  // this.anims.create({
  //   key: "walking_man_anim",
  //   frames: this.anims.generateFrameNames("walking_man", { start: 0, end: 5 }),
  //   frameRate: 6,
  //   repeat: -1,
  // });
  man.play("idle_man_anim");
}

function update() {
  if (cursors.right.isDown) {
    man.x += 2;
    man.flipX = false;
  }
  if (cursors.left.isDown) {
    man.x -= 2;
    man.flipX = true;
  }
  if (cursors.up.isDown) {
    man.y -= 2;
  }
  if (cursors.down.isDown) {
    man.y += 2;
  }
}

new Phaser.Game({
  width: 450,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
});

// https://the-baldur.itch.io/pixelart-hiker
