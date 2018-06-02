class WelcomeScene extends Phaser.Scene {
  image: Phaser.GameObjects.Sprite;
  rotationSpeed: number = 0.01;

  constructor() {
    super({
      key: "WelcomeScene"
    });
  }

  preload() {
    this.load.image("Phaser", "assets/Phaser.png");
  }
  create() {
    this.image = this.add.sprite(200, 200, "Phaser");
  }
  update() {
    this.image.rotation += this.rotationSpeed;
  }
}

export default WelcomeScene;
