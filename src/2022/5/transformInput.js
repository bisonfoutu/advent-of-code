import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .split('\n\n')
  .map(string => string.split('\n').filter(line => line.length));

export default transformInput;
