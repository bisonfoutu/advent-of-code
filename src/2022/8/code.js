import * as path from 'path';
import { fileURLToPath } from 'url';

import transformInput from './transformInput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = transformInput(path.join(__dirname, 'input.txt'));

export const part1 = (treeLines) => {
  let visibleTrees = 0;
  treeLines.forEach((treeLine, yIndex) => {
    if (yIndex === 0 || yIndex === treeLines.length - 1) {
      return visibleTrees += treeLine.length;
    }
    treeLine.forEach((tree, xIndex) => {
      if (xIndex === 0 || xIndex === treeLine.length - 1) {
        return visibleTrees++;
      }
      const leftTrees = treeLine.slice(0, xIndex);
      if (Math.max(...leftTrees) < tree) {
        return visibleTrees++;
      }
      const rightTrees = treeLine.slice(xIndex + 1);
      if (Math.max(...rightTrees) < tree) {
        return visibleTrees++;
      }
      const topTrees = treeLines.slice(0, yIndex).map(line => line[xIndex]);
      if (Math.max(...topTrees) < tree) {
        return visibleTrees++;
      }
      const bottomTrees = treeLines.slice(yIndex + 1).map(line => line[xIndex]);
      if (Math.max(...bottomTrees) < tree) {
        return visibleTrees++;
      }
    })
  });
  return visibleTrees;
}

function getScenicScore(currentTree, trees) {
  let scenicScore = 0;
  for (let tree of trees) {
    scenicScore++;
    if (tree >= currentTree) {
      break;
    }
  }
  return scenicScore;
}
export const part2 = (treeLines) => {
  let bestScenicScore = 0;
  treeLines.forEach((treeLine, yIndex) => {
    if (yIndex === 0 || yIndex === treeLines.length - 1) {
      return;
    }
    treeLine.forEach((tree, xIndex) => {
      if (xIndex === 0 || xIndex === treeLine.length - 1) {
        return;
      }

      let scenicScore = 0;

      const leftTrees = treeLine.slice(0, xIndex);
      const rightTrees = treeLine.slice(xIndex + 1);
      const topTrees = treeLines.slice(0, yIndex).map(line => line[xIndex]);
      const bottomTrees = treeLines.slice(yIndex + 1).map(line => line[xIndex]);

      scenicScore += getScenicScore(tree, leftTrees.reverse());
      scenicScore *= getScenicScore(tree, rightTrees);
      scenicScore *= getScenicScore(tree, topTrees.reverse());
      scenicScore *= getScenicScore(tree, bottomTrees);

      bestScenicScore = Math.max(bestScenicScore, scenicScore);
    })
  });
  return bestScenicScore;
}

console.log(part1(data));
console.log(part2(data));
