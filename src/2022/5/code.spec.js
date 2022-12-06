import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';
import { part1, part2 } from './code';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const given = transformInput(path.join(__dirname, 'sample.txt'));

const expectedP1 = 'CMZ';
const expectedP2 = 'MCD';

test(`Part 1 > expects ${expectedP1}`, () => {
  expect(part1(given)).toBe(expectedP1);
});

test(`Part 2 > expects ${expectedP2}`, () => {
  expect(part2(given)).toBe(expectedP2);
});
