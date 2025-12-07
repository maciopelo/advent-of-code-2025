import { readData } from './utils';

const data = readData('day6.txt', '\n');

const part1 = () => {
  const input = data.map((item) => item.split(' ').filter(Boolean));

  const rows = input.length;
  const cols = input[0].length;

  const results = [];
  for (let col = 0; col < cols; col++) {
    let sum = 0;
    let operation = '';
    for (let row = rows - 1; row >= 0; row--) {
      const value = Number(input[row][col]);

      if (isNaN(value)) {
        operation = input[row][col];
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

const part2 = () => {
  const numbers = data
    .filter((_, idx) => idx !== data.length - 1)
    .map((row) => row.split(''));

  const operations = data
    .filter((_, idx) => idx == data.length - 1)
    .flatMap((row) => row.replaceAll(/\s+/g, '').split(''));
  const numbersWithOperations = [];
  const element = {
    operation: '',
    numbers: [] as number[],
  };
  for (let col = numbers[0].length - 1; col >= 0; col--) {
    let number = '';

    for (let row = 0; row < numbers.length; row++) {
      number += numbers[row][col];
    }

    if (Number(number)) {
      element.numbers.push(Number(number));
    } else {
      element.operation = operations.pop()!;
      numbersWithOperations.push(structuredClone(element));
      element.numbers = [];
    }

    if (col === 0) {
      element.operation = operations.pop()!;
      numbersWithOperations.push(structuredClone(element));
    }
  }

  let finalSum = 0;

  for (const element of numbersWithOperations) {
    let result = element.operation === '*' ? 1 : 0;
    if (element.operation === '*') {
      element.numbers.forEach((number) => {
        result *= number;
      });
    } else {
      element.numbers.forEach((number) => {
        result += number;
      });
    }

    finalSum += result;
  }

  console.log(finalSum);
};
