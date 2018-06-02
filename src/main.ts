import "phaser";
import WelcomeScene from "./WelcomeScene";

var config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 640,
  height: 480,
  resolution: 1,
  scene: WelcomeScene
};

var game = new Phaser.Game(config);
