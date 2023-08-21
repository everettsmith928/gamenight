import { AppState } from "../AppState.js";
import { playerService } from "../services/PlayerService.js";



export class PlayerController {
  constructor() {
    console.log(AppState.players)
    this.draw()
    console.log('Player Controller Running', playerService)
  }

  draw() {
    let content = ''
    AppState.players.forEach(player => {
      content += player.draw
      console.log(player)
    })
    document.getElementById('players').innerHTML = content
    console.log(playerService.increaseScore)
  }
  increaseScore(playerName) {
    playerService.increaseScore(playerName)
    this.draw()
  }
  decreaseScore(playerName) {
    playerService.decreaseScore(playerName)
    this.draw()
  }

  addPlayer(newPlayer) {
    event.preventDefault()
    playerService.addPlayer(newPlayer)
    this.draw()
  }
}