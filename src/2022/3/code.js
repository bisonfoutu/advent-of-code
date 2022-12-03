import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

function letterToPriority(letter) {
  if (letter === letter.toLowerCase()) {
    return letter.charCodeAt(0) - 96;
  }
  return letter.charCodeAt(0) - 65 + 27;
}

export const part1 = (data) => {
  return data
    .map(sack => [sack.slice(0, sack.length / 2), sack.slice(sack.length / 2)])
    .map(([comp1, comp2]) => comp1.split('').find(obj => comp2.includes(obj)))
    .map(letter => letterToPriority(letter))
    .reduce((prio, acc) => acc + prio, 0);
}


export const part2 = (data) => {
  const groups = [];
  data.forEach((elf, index) => {
    const elfGroupIndex = Math.floor(index / 3);
    groups[elfGroupIndex] = groups[elfGroupIndex] ? [...groups[elfGroupIndex], elf] : [elf];
  });

  return groups
    .map(([elf1, elf2, elf3]) => elf1.split('').find(obj => elf2.includes(obj) && elf3.includes(obj)))
    .map(letter => letterToPriority(letter))
    .reduce((prio, acc) => acc + prio, 0);
}

console.log(part1(data));
console.log(part2(data));
