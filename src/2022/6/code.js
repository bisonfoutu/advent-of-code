import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (data) => {
  let markerIndex;
  for (let i = 3; i < data.length; i++) {
    if (new Set(data.slice(i - 3, i + 1)).size === 4) {
      markerIndex = i + 1;
      break;
    }
  }
  return markerIndex;
}

export const part2 = (data) => {
  let markerIndex;
  for (let i = 13; i < data.length; i++) {
    if (new Set(data.slice(i - 13, i + 1)).size === 14) {
      markerIndex = i + 1;
      break;
    }
  }
  return markerIndex;
}

console.log(part1(data));
console.log(part2(data));
