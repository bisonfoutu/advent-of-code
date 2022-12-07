import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

function getDirectory(currentDir, command) {
  const accessedDir = command.replace('$ cd ', '');
  if (accessedDir === '/') {
    return [];
  } else if (accessedDir === '..') {
    return currentDir.slice(0, currentDir.length - 1);
  }
  return [...currentDir, accessedDir];
}

export const part1 = (data) => {
  const directorySizes = {};
  let currentDir = [];
  data.forEach(line => {
    if (line.startsWith('$ cd')) {
      currentDir = getDirectory(currentDir, line);
    } else if (line.match(/(\d+)/)) {
      const size = +line.match(/(\d+)/)[0];
      currentDir.forEach((dir, index) => {
        const path = currentDir.slice(0, index + 1).join('/');
        directorySizes[path] = (directorySizes[path] ?? 0) + size;
      });
    }
  });

  return Object
    .values(directorySizes)
    .filter((size) => size <= 100000)
    .reduce((acc, size) => acc + size, 0)
}

export const part2 = (data) => {
  const totalSpace = 70000000;
  const neededSpace = 30000000;

  const rootDirectorySizes = {};
  const directorySizes = {};
  let currentDir = [];
  data.forEach(line => {
    if (line.startsWith('$ cd')) {
      currentDir = getDirectory(currentDir, line);
    } else if (line.match(/(\d+)/)) {
      const size = +line.match(/(\d+)/)[0];
      rootDirectorySizes[currentDir[0]] = (rootDirectorySizes[currentDir[0]] ?? 0) + size;
      currentDir.forEach((dir, index) => {
        const path = currentDir.slice(0, index + 1).join('/');
        directorySizes[path] = (directorySizes[path] ?? 0) + size;
      });
    }
  });

  const usedSpace = Object
    .values(rootDirectorySizes)
    .reduce((acc, size) => acc + size, 0);

  const remainingSpace = totalSpace - usedSpace;
  const spaceToFree = neededSpace - remainingSpace;

  return Object
    .values(directorySizes)
    .filter(size => size >= spaceToFree && size <= neededSpace)
    .sort((a, b) => a - b)[0]
}

console.log(part1(data));
console.log(part2(data));
