import Phaser from "phaser";

// scenes
import Welcome from "./scenes/Welcome";
import Arcade from "./scenes/Arcade";

// config
new Phaser.Game({
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  backgroundColor: 0x87ceeb,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Welcome, Arcade],
});

// character sprite
// https://the-baldur.itch.io/pixelart-hiker
