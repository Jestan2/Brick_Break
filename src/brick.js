import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.img = document.getElementById("brick");
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.game = game;
    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
