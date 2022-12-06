import fs from 'fs';

const transformInput = input => fs
  .readFileSync( input, 'utf8')
  .toString()
  .trim();

export default transformInput;
