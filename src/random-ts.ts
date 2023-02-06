
function randomInt(max: number = Number.MAX_SAFE_INTEGER, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(max: number = Number.MAX_SAFE_INTEGER, min: number = 0): number {
  return Math.random() * (max - min) + min;
}

function randomArray(length: number, max: number = Number.MAX_SAFE_INTEGER, min: number = 0): number[] {
  let randomNumbers: number[] = [];
  for (let i = 0; i < length; i++) {
      randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomNumbers;
}

function randomInRange(max: number, min: number = 0): number {
  return Math.random() * (max - min) + min;
}

function randomIntInRange(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
