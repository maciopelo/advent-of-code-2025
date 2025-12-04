import { readFileSync } from 'fs';

export const readData = (file: string, splitBy: string) => {
  const data = readFileSync(`data/${file}`, {
    encoding: 'utf8',
    flag: 'r',
  });

  return data.split(splitBy);
};
