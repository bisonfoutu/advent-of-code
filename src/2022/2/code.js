import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

const LettersMap = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

function getRoundScore(opponent, player) {
  if (opponent === player) {
    return 3;
  }
  if (player === opponent + 1 || player === opponent - 2) {
    return 6;
  }
  return 0;
}

export const part1 = (data) => {
  return data
    .map(([opp, player]) => [LettersMap[opp], LettersMap[player]])
    .map(([opp, player]) => player + getRoundScore(opp, player))
    .reduce((val, acc) => acc + val, 0)
}

function getPlayerChoice(opp, playerLetter) {
  if (playerLetter === 'Y') {
    return opp;
  } else if (playerLetter === 'Z') {
    return opp < 3 ? opp + 1 : 1;
  }
  return opp > 1 ? opp - 1 : 3;
}

export const part2 = (data) => {
  return data
    .map(([opp, player]) => [LettersMap[opp], getPlayerChoice(LettersMap[opp], player)])
    .map(([opp, player]) => player + getRoundScore(opp, player))
    .reduce((val, acc) => acc + val, 0);
}

console.log(part1(data));
console.log(part2(data));
