import { readData } from './utils';

const data = readData('day2.txt', ',');

const part1 = () => {
  let sum = 0;
  for (const item of data) {
    const [from, to] = item.split('-');

    for (let num = +from; num <= +to; num++) {
      const numString = num.toString();
      const numLegth = numString.length;
      if (numLegth % 2 !== 0) continue;

      const half = numLegth / 2;
      const left = numString.slice(0, half);
      const right = numString.slice(half);

      if (left === right) sum += num;
    }
  }

  //   console.log(sum);
};

const part2 = () => {
  let sum = 0;
  for (const item of data) {
    const [from, to] = item.split('-');

    for (let num = +from; num <= +to; num++) {
      const numString = num.toString();

      let substring = '';
      const set = new Set();
      for (let i = 0; i < numString.length; i++) {
        substring += numString[i];

        const re = new RegExp(substring, 'g');
        const results = [...(numString.match(re) || [])];
        if (
          !set.has(num) &&
          results.length > 1 &&
          results.join('') === numString
        ) {
          set.add(num);
          sum += num;
        }
      }
    }
  }
  //   console.log(sum);
};
