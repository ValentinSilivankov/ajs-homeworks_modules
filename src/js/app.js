const element = document.createElement('span')
element.textContent = '☛• app worked! •☚'

document.body.appendChild(element)
console.log('app worked!')

import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game'

const game = new Game()
game.start()
