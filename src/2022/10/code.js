import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (instructions) => {
  let totalScore = 0;
  let cycleNb = 1;
  let X = 1;
  instructions.forEach(instruction => {
    cycleNb++;

    console.log(cycleNb, X);
    if ((cycleNb - 20) % 40 === 0) {
      totalScore += cycleNb * X;
    }

    if (instruction.includes('addx')) {
      cycleNb++;
      X += +instruction.replace('addx ', '');

      if ((cycleNb - 20) % 40 === 0) {
        totalScore += cycleNb * X;
      }
    }
  });
  return totalScore;
};

export const part2 = (instructions) => {
  const CRT = [
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
    ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',],
  ];
  let currentLine = 0;
  let cycleNb = 0;
  let X = 1;
  let valueToAdd = 0;

  instructions.forEach(instruction => {
    X += valueToAdd;
    if (cycleNb >= X - 1 && cycleNb <= X + 1) {
      CRT[currentLine][cycleNb] = '#';
    }
    cycleNb++;

    if (cycleNb === 40) {
      currentLine++;
      cycleNb = 0;
    }

    if (cycleNb >= X - 1 && cycleNb <= X + 1) {
      CRT[currentLine][cycleNb] = '#';
    }
    if (instruction.includes('addx')) {
      cycleNb++;

      if (cycleNb === 40) {
        currentLine++;
        cycleNb = 0;
      }
      valueToAdd = +instruction.replace('addx ', '');
    } else {
      valueToAdd = 0;
    }
  });

  return CRT.map(line => line.join(''));
}

// console.log(part1(data));
console.log(part2(data));
