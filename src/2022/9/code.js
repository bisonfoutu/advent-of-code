import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (movements) => {
  const visitedPositions = new Set(['0,0']);
  const headPos = [0,0];
  const tailPos = [0,0];

  movements.forEach(movement => {
    const [direction, distance] = movement.split(' ').map((e, i) => i === 0 ? e : +e);

    for (let i = 0; i < distance; i++) {
      if (direction === 'U') {
        headPos[1]--;
      } else if (direction === 'D') {
        headPos[1]++;
      } else if (direction === 'L') {
        headPos[0]--;
      } else if (direction === 'R') {
        headPos[0]++;
      }

      if ((headPos[0] >= tailPos[0] - 1 && headPos[0] <= tailPos[0] + 1) && (headPos[1] >= tailPos[1] - 1 && headPos[1] <= tailPos[1] + 1)) {
        continue;
      }

      if (headPos[1] > tailPos[1]) {
        tailPos[1]++
      } else if (headPos[1] < tailPos[1]) {
        tailPos[1]--;
      }
      if (headPos[0] > tailPos[0]) {
        tailPos[0]++
      } else if (headPos[0] < tailPos[0]) {
        tailPos[0]--;
      }

      visitedPositions.add(tailPos.join(','))
    }
  });
  return visitedPositions.size;
}

function getNewKnotPos(prevKnotPos, knotPos) {
  if ((prevKnotPos[0] >= knotPos[0] - 1 && prevKnotPos[0] <= knotPos[0] + 1) && (prevKnotPos[1] >= knotPos[1] - 1 && prevKnotPos[1] <= knotPos[1] + 1)) {
    return knotPos;
  }

  if (prevKnotPos[1] > knotPos[1]) {
    knotPos[1]++
  } else if (prevKnotPos[1] < knotPos[1]) {
    knotPos[1]--;
  }
  if (prevKnotPos[0] > knotPos[0]) {
    knotPos[0]++
  } else if (prevKnotPos[0] < knotPos[0]) {
    knotPos[0]--;
  }

  return knotPos;
}

export const part2 = (movements) => {
  const visitedPositions = new Set(['0,0']);
  const headPos = [0,0];
  const knotsPos = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
  ];

  movements.forEach(movement => {
    const [direction, distance] = movement.split(' ').map((e, i) => i === 0 ? e : +e);

    for (let i = 0; i < distance; i++) {
      if (direction === 'U') {
        headPos[1]--;
      } else if (direction === 'D') {
        headPos[1]++;
      } else if (direction === 'L') {
        headPos[0]--;
      } else if (direction === 'R') {
        headPos[0]++;
      }

      knotsPos.forEach((currKnotPos, idx) => {
        const prevKnotPos = idx === 0 ? headPos : knotsPos[idx - 1];
        knotsPos[idx] = getNewKnotPos(prevKnotPos, currKnotPos);
      });

      visitedPositions.add(knotsPos[8].join(','))
    }
  });
  return visitedPositions.size;
}

console.log(part1(data));
console.log(part2(data));
