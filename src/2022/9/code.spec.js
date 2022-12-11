import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';
import { part1, part2 } from './code';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const given1 = transformInput(path.join(__dirname, 'sample.txt'));
const given2 = transformInput(path.join(__dirname, 'sample2.txt'));

const expectedP1 = 13;
const expectedP2 = 36;

test(`Part 1 > expects ${expectedP1}`, () => {
  expect(part1(given1)).toBe(expectedP1);
});

test(`Part 2 > expects ${expectedP2}`, () => {
  expect(part2(given2)).toBe(expectedP2);
});
