import Phaser from "phaser";
import Welcome from "./scenes/Welcome";
import Arcade from "./scenes/Arcade";

let man;
let cursors;

new Phaser.Game({
  width: 800,
  height: 600,
  backgroundColor: 0x9f9f9f,
  scene: [Welcome, Arcade],
  physics: {
    arcade: {
      debug: false,
    },
  },
});

// https://the-baldur.itch.io/pixelart-hiker
