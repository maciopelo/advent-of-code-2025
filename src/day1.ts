import { readData } from './utils';

const data = readData('day1.txt', '\n');

const part1 = () => {
  let currentPosition = 50;
  let zerosCount = 0;

  for (const rotation of data) {
    const move = rotation.charAt(0);
    const value = parseInt(rotation.slice(1), 10) % 100;

    currentPosition += move === 'L' ? -value : value;

    if (currentPosition < 0) {
      currentPosition = 100 + currentPosition;
    }

    if (currentPosition > 99) {
      currentPosition = currentPosition - 100;
    }

    if (currentPosition === 0) {
      zerosCount += 1;
    }
  }

  // console.log(zerosCount);
};
part1();

const part2 = () => {
  let currentPosition = 50;
  let previousPosition = 50;
  let zerosCount = 0;

  for (const rotation of data) {
    const move = rotation.charAt(0);
    const rotationValue = parseInt(rotation.slice(1), 10);
    const value = rotationValue % 100;
    const fullRotations = Math.floor(rotationValue / 100);

    zerosCount += fullRotations;

    previousPosition = currentPosition;
    currentPosition += move === 'L' ? -value : value;

    if (currentPosition < 0) {
      currentPosition = 100 + currentPosition;
    }

    if (currentPosition > 99) {
      currentPosition = currentPosition - 100;
    }

    if (currentPosition === 0) {
      zerosCount += 1;
    }

    if (
      previousPosition !== 0 &&
      currentPosition !== 0 &&
      move === 'L' &&
      currentPosition > previousPosition
    ) {
      zerosCount += 1;
    }

    if (
      previousPosition !== 0 &&
      currentPosition !== 0 &&
      move === 'R' &&
      currentPosition < previousPosition
    ) {
      zerosCount += 1;
    }
  }

  // console.log(zerosCount);
};
part2();
