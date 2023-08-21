import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    console.log('This is the Player Controller')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}