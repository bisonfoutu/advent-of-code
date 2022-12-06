import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(line => line
    .split(',')
    .map(elf => elf
      .split('-')
      .map(number => +number)))

export default transformInput;
