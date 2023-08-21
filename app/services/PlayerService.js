import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";

class PlayerService {
  increaseScore(playerName) {
    let player = AppState.players.find(player => player.name == playerName)
    player.score++
    console.log(player.score)
  }
  decreaseScore(playerName) {
    let player = AppState.players.find(player => player.name == playerName)
    player.score--
    console.log(player.score)
  }
  addPlayer(newPlayer) {
    new Player(newPlayer, 0)
  }
}

export const playerService = new PlayerService()

