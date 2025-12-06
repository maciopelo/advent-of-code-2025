import { readData } from './utils';

const data = readData('day5.txt', '\n\n');
const ranges = data[0].split('\n').map((range) => range.split('-').map(Number));
const ids = data[1].split('\n').map(Number);

const part1 = () => {
  const set = new Set();
  for (const id of ids) {
    for (const range of ranges) {
      if (range[0] <= id && id <= range[1]) {
        set.add(id);
      }
    }
  }
  //   console.log(set.size);
};

const part2 = () => {
  let sum = 0;

  const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);

  const rangesUnion = sortedRanges.reduce<number[][]>(
    (acc, range, index) => {
      if (index === 0) return acc;

      const last = acc[acc.length - 1];

      if (last[1] >= range[0]) {
        last[1] = Math.max(last[1], range[1]);
      } else {
        acc.push(range);
      }

      return acc;
    },
    [sortedRanges[0]]
  );

  for (const range of rangesUnion) {
    const rangeLength = range[1] - range[0] + 1;
    sum += rangeLength;
  }

  //   console.log(sum);
};
