import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (monkeys) => {
  const monkeysItems = monkeys.map(([items]) => items);
  const monkeysViewedItems = new Array(monkeys.length).fill(0);

  for (let i = 0; i < 20; i++) {
    monkeys.forEach(([, operation, test, monkeyTrue, monkeyFalse], idx) => {
      monkeyTrue = +monkeyTrue;
      monkeyFalse = +monkeyFalse;
      monkeysItems[idx].forEach(item => {
        monkeysViewedItems[idx]++;
        const newVal = Math.floor(eval(operation.replace(new RegExp(/old/, 'g'), item)) / 3);

        if (newVal % test === 0) {
          monkeysItems[monkeyTrue].push(newVal);
        } else {
          monkeysItems[monkeyFalse].push(newVal);
        }
      });
      monkeysItems[idx] = [];
    });
  }
  const topMonkeyViews = monkeysViewedItems.sort((a, b) => b - a);

  return topMonkeyViews[0] * topMonkeyViews[1];
}

const rounds = 10000;
export const part2 = (monkeys) => {
  const divider = monkeys.map(([, , test]) => test).reduce((acc, val) => acc * val, 1);
  const monkeysItems = monkeys.map(([items]) => items.map(item => item));
  const monkeysViewedItems = new Array(monkeys.length).fill(0);

  for (let i = 0; i < rounds; i++) {
    monkeys.forEach(([, operation, test, monkeyTrue, monkeyFalse], idx) => {
      monkeyTrue = +monkeyTrue;
      monkeyFalse = +monkeyFalse;
      monkeysItems[idx].forEach(item => {
        monkeysViewedItems[idx]++;
        const newVal = eval(operation.replace(new RegExp(/old/, 'g'), item)) % divider;

        if (newVal % test === 0) {
          monkeysItems[monkeyTrue].push(newVal);
        } else {
          monkeysItems[monkeyFalse].push(newVal);
        }
      });
      monkeysItems[idx] = [];
    });
  }
  const topMonkeyViews = monkeysViewedItems.sort((a, b) => b - a);
  return topMonkeyViews[0] * topMonkeyViews[1];
}

// console.log(part1(data));
console.log(part2(data));
