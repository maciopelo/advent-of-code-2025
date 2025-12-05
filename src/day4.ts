import { readData } from './utils';

const data = readData('day4.txt', '\n').map((row) => row.split(''));

const checkSurrounding = (
  data: string[][],
  x: number,
  y: number,
  char: string
) => {
  const directions = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1], // right
    [-1, -1], // top left
    [-1, 1], // top right
    [1, -1], // bottom left
    [1, 1], // bottom right
  ];

  let count = 0;

  for (const [dx, dy] of directions) {
    const nextX = x + dx;
    const nextY = y + dy;

    const out =
      nextX < 0 ||
      nextY < 0 ||
      nextX >= data.length ||
      nextY >= data[nextX].length;

    if (out) continue;

    if (data[nextX][nextY] === char) {
      count++;
    }
  }
  return count;
};

const part1 = () => {
  const rows = data.length;
  const cols = data[0].length;
  let sum = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (data[row][col] === '@') {
        const count = checkSurrounding(data, row, col, '@');
        if (count < 4) sum += 1;
      }
    }
  }
  console.log(sum);
};
part1();
