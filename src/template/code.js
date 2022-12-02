import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (data) => {

}

export const part2 = (data) => {

}

console.log(part1(data));
console.log(part2(data));
