import { generateId } from "../utils/generateId.js"

export class Player {

  name
  score
  constructor(newName, newScore) {
    this.name = newName;
    this.score = 0;
  }

  get draw() {
    return `<div class="col-4 rounded border fs-3"><p>${this.name}</p><p>${this.score}</p><button class="btn rounded" onclick="app.PlayerController.increaseScore('${this.name}')">+</button><button class="btn rounded" onclick="app.PlayerController.decreaseScore('${this.name}')">-</button></div>`
  }
}
