import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';
import { part1, part2 } from './code.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const given = transformInput(path.join(__dirname, 'sample.txt'));

const expectedP1 = 7;

test(`Part 1 > expects ${expectedP1}`, () => {
  expect(part1(given)).toBe(expectedP1);
  expect(part1('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
  expect(part1('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
  expect(part1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
  expect(part1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
});

test(`Part 2`, () => {
  expect(part2('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19);
  expect(part2('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23);
  expect(part2('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23);
  expect(part2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29);
  expect(part2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26);
});
