import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

function includesOther(a, b) {
  return a[0] <= b[0] && a[1] >= b[1]
}

export const part1 = (elvesPairs) => {
  return elvesPairs.filter(([elfA, elfB]) => includesOther(elfA, elfB) || includesOther(elfB, elfA)).length;
}

export const part2 = (elvesPairs) => {
  return elvesPairs.filter(([elfA, elfB]) => elfA[0] <= elfB[1] && elfA[1] >= elfB[0]).length;
}

console.log(part1(data));
console.log(part2(data));
