import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim()
  .split('\n');

export default transformInput;
