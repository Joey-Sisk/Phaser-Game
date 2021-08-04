export default class Scene2 extends Phaser.Scene {
  constructor() {
    super("arcade");
  }

  preload() {
    this.load.spritesheet("idle_man", "../assets/images/Idle.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.man = this.add.sprite(100, 200, "idle_man");
    this.anims.create({
      key: "idle_man_anim",
      frames: this.anims.generateFrameNames("idle_man", { start: 0, end: 5 }),
      frameRate: 6,
      repeat: -1,
    });
    this.man.play("idle_man_anim");
  }

  update() {
    if (this.cursors.right.isDown) {
      this.man.x += 2;
      this.man.flipX = false;
    }
    if (this.cursors.left.isDown) {
      this.man.x -= 2;
      this.man.flipX = true;
    }
    if (this.cursors.up.isDown) {
      this.man.y -= 2;
    }
    if (this.cursors.down.isDown) {
      this.man.y += 2;
    }
  }
}
