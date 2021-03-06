import Phaser from "phaser";

// scenes
import Welcome from "./scenes/Welcome";
import Arcade from "./scenes/Arcade";
import Dungeon from "./scenes/Dungeon";

// config
new Phaser.Game({
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  backgroundColor: 0x87ceeb,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
    },
  },
  scene: [Welcome, Arcade, Dungeon],
});

// character sprite
// https://the-baldur.itch.io/pixelart-hiker
