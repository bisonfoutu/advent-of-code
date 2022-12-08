import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(treeLine => treeLine.split('').map(tree => +tree));

export default transformInput;
