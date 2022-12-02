import fs from 'fs';

const transformInput = input => fs
  .readFileSync(input, 'utf8')
  .toString()
  .trim()
  .split('\n\n')
  .map(line => line
    .split('\n')
    .map(val => +val));

export default transformInput;
