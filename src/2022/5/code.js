import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

function getStacksFromArrangementLines(arrangementLines) {
  const stacks = [];
  arrangementLines.forEach(
    line => [...line.matchAll(/[A-Z]/g)]
      .forEach(match => stacks[(match.index - 1) / 4] = [match[0], ...(stacks[(match.index - 1) / 4] ?? [])]));

  return stacks;
}

export const part1 = ([arrangementLines, instructions]) => {
  const stacks = getStacksFromArrangementLines(arrangementLines);

  instructions
    .map(instruction => instruction.match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/))
    .forEach(([, qty, from, to]) => {
      stacks[to - 1] = [...stacks[to - 1], ...stacks[from - 1].slice(-qty).reverse()];
      stacks[from - 1] = stacks[from - 1].slice(0, stacks[from - 1].length - qty);
    })

  return stacks.map(stack => stack.slice(-1)).reduce((acc, letter) => acc + letter, '');
}

export const part2 = ([arrangementLines, instructions]) => {
  const stacks = getStacksFromArrangementLines(arrangementLines);

  instructions
    .map(instruction => instruction.match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/))
    .forEach(([, qty, from, to]) => {
      stacks[to - 1] = [...stacks[to - 1], ...stacks[from - 1].slice(-qty)];
      stacks[from - 1] = stacks[from - 1].slice(0, stacks[from - 1].length - qty);
    })

  return stacks.map(stack => stack.slice(-1)).reduce((acc, letter) => acc + letter, '');
}

console.log(part1(data));
console.log(part2(data));
