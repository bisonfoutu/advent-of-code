import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' '));

export default transformInput;
