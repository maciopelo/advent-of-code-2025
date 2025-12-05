import { readData } from './utils';

const data = readData('day3.txt', '\n');

const part1 = () => {
  let sum = 0;
  for (const bank of data) {
    const batteries = bank.split('').map(Number);

    const max = Math.max(...batteries);
    const indexOfMax = batteries.indexOf(max);

    const left = batteries.slice(0, indexOfMax);
    const right = batteries.slice(indexOfMax + 1);

    const leftMax = left.length ? Math.max(...left) : '';
    const rightMax = right.length ? Math.max(...right) : '';

    const option1 = Number(`${leftMax}${max}`);
    const option2 = Number(`${max}${rightMax}`);

    sum += Math.max(option1, option2);
  }
  //   console.log(sum);
};

const part2 = () => {
  let sum = 0;
  for (const bank of data) {
    const batteries = bank.split('').map(Number);
  }
  console.log(sum);
};

part2();
