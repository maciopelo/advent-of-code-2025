import { readData } from './utils';

const data = readData('day6.txt', '\n').map((item) =>
  item.split(' ').filter(Boolean)
);

const rows = data.length;
const cols = data[0].length;

const part1 = () => {
  const results = [];
  for (let col = 0; col < cols; col++) {
    let sum = 0;
    let operation = '';
    for (let row = rows - 1; row >= 0; row--) {
      const value = Number(data[row][col]);

      if (isNaN(value)) {
        operation = data[row][col];
        sum = operation === '*' ? 1 : 0;
      } else {
        if (operation === '*') {
          sum *= value;
        }
        if (operation === '+') {
          sum += value;
        }
      }
    }
    results.push(sum);
  }
  const sum = results.reduce((acc, value) => (acc += value), 0);
  //   console.log(sum);
};
