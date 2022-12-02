import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (data) => {
  return Math.max(...data.map(elf => elf.reduce((acc, cal) => acc + cal, 0)));
}

export const part2 = (data) => {
  return data
    .map(elf => elf.reduce((acc, cal) => acc + cal, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cal) => acc + cal, 0)
    ;
}

console.log(part1(data));
console.log(part2(data));
