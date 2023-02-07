function randomInt(max: number = Number.MAX_SAFE_INTEGER, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomFloat(max: number = Number.MAX_SAFE_INTEGER, min: number = 0): number {
  return Math.random() * (max - min) + min
}

function randomArray(
  length: number,
  max: number = Number.MAX_SAFE_INTEGER,
  min: number = 0
): number[] {
  let randomNumbers: number[] = []
  for (let i = 0; i < length; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return randomNumbers
}

function randomInRange(max: number, min: number = 0): number {
  return Math.random() * (max - min) + min
}

function randomIntInRange(max: number, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function shuffleArray<T>(array: T[]): T[] {
  if (array.length === 0) {
    return []
  }

  const indices = Array.from({ length: array.length }, (_, i) => i)

  for (let i = 0; i < randomInt(array.length / 2, array.length); i++) {
    const randomIndex1 = randomFromArray(indices)
    const randomIndex2 = randomFromArray(indices)

    let tmp = array[randomIndex1]
    array[randomIndex1] = array[randomIndex2]
    array[randomIndex2] = tmp
  }

  return array
}

function randomHex(length: number = 6): string {
  let result = ''
  const characters = '0123456789ABCDEF'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function randomColor(): string {
  return '#' + randomHex(6)
}

function randomGaussian(mean: number = 0, standardDeviation: number = 1): number {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  num = mean + num * standardDeviation
  return num
}

export {
  randomInt,
  randomFloat,
  randomArray,
  randomInRange,
  randomIntInRange,
  randomFromArray,
  shuffleArray,
  randomHex,
  randomColor,
  randomGaussian
}
