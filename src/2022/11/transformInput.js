import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim()
  .split('\n\n')
  .map(monkey => monkey.split('\n').map((line, index) => {
    if (index === 1) {
      return line.trim()
        .replace('Starting items: ', '')
        .split(', ')
        .map(nb => +nb);
    } else if (index === 2) {
      return line.trim().replace('Operation: new = ', '');
    } else if (index === 3) {
      return +line.trim().replace('Test: divisible by ', '');
    } else if (index === 4) {
      return line.trim().replace('If true: throw to monkey ', '');
    } else if (index === 5) {
      return line.trim().replace('If false: throw to monkey ', '');
    }
  }).filter(line => !!line));

export default transformInput;
