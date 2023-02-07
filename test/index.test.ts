import * as RandomTs from '../src/index'

describe('Rand int', () => {
  it('randomInt', () => {
    expect(RandomTs.randomInt).toBeTruthy()
    expect(RandomTs.randomInt()).toBeGreaterThanOrEqual(0)
    expect(RandomTs.randomInt(10)).toBeLessThanOrEqual(10)
    expect(RandomTs.randomInt(10, 5)).toBeGreaterThanOrEqual(5)
    expect(RandomTs.randomInt(10, 5)).toBeLessThanOrEqual(10)
  })
  it('randomFloat', () => {
    expect(RandomTs.randomFloat).toBeTruthy()
    expect(RandomTs.randomFloat()).toBeGreaterThanOrEqual(0)
    expect(RandomTs.randomFloat(10)).toBeLessThanOrEqual(10)
    expect(RandomTs.randomFloat(10, 5)).toBeGreaterThanOrEqual(5)
    expect(RandomTs.randomFloat(10, 5)).toBeLessThanOrEqual(10)
  })
  it('randomArray', () => {
    expect(RandomTs.randomArray).toBeTruthy()
    expect(RandomTs.randomArray(10)).toHaveLength(10)
    expect(RandomTs.randomArray(10, 10)).toHaveLength(10)
    expect(RandomTs.randomArray(10, 10, 5)).toHaveLength(10)
    expect(RandomTs.randomArray(10, 10, 5)).toEqual(expect.arrayContaining([5, 10]))
  })
  it('randomInRange', () => {
    expect(RandomTs.randomInRange).toBeTruthy()
    expect(RandomTs.randomInRange(10)).toBeLessThanOrEqual(10)
    expect(RandomTs.randomInRange(10, 5)).toBeGreaterThanOrEqual(5)
    expect(RandomTs.randomInRange(10, 5)).toBeLessThanOrEqual(10)
  })
  it('randomIntInRange', () => {
    expect(RandomTs.randomIntInRange).toBeTruthy()
    expect(RandomTs.randomIntInRange(10)).toBeLessThanOrEqual(10)
    expect(RandomTs.randomIntInRange(10, 5)).toBeGreaterThanOrEqual(5)
    expect(RandomTs.randomIntInRange(10, 5)).toBeLessThanOrEqual(10)
  })
  it('randomFromArray', () => {
    expect(RandomTs.randomFromArray).toBeTruthy()
    expect(RandomTs.randomFromArray([1, 2, 3])).toBeGreaterThanOrEqual(1)
    expect(RandomTs.randomFromArray([1, 2, 3])).toBeLessThanOrEqual(3)
    expect(RandomTs.randomFromArray([5, 5, 5])).toEqual(5)
    expect(RandomTs.randomFromArray([2, 2, 2])).toEqual(2)
  })
  describe('shuffleArray', () => {
    it('should shuffle the elements of an array', () => {
      let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const shuffledArray = RandomTs.shuffleArray(originalArray)
      originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(shuffledArray).not.toEqual(originalArray)
      expect(shuffledArray).toHaveLength(originalArray.length)
      expect(shuffledArray.sort()).toEqual(originalArray.sort())
    })
  })
  describe('randomHex', () => {
    it('should generate a hexadecimal string of the specified length', () => {
      const hex1 = RandomTs.randomHex(8)
      const hex2 = RandomTs.randomHex(4)
      const hex3 = RandomTs.randomHex()
      expect(hex1).toMatch(/^[0-9A-F]{8}$/)
      expect(hex2).toMatch(/^[0-9A-F]{4}$/)
      expect(hex3).toMatch(/^[0-9A-F]{6}$/)
    })
  })
  describe('randomColor', () => {
    it('should generate a color string in the format "#RRGGBB"', () => {
      const color1 = RandomTs.randomColor()
      const color2 = RandomTs.randomColor()
      const color3 = RandomTs.randomColor()
      expect(color1).toMatch(/^#[0-9A-F]{6}$/)
      expect(color2).toMatch(/^#[0-9A-F]{6}$/)
      expect(color3).toMatch(/^#[0-9A-F]{6}$/)
    })
  })
  describe('randomGaussian', () => {
    it('should generate random numbers with a normal distribution', () => {
      const mean = 0
      const standardDeviation = 1
      const samples: Array<number> = []
      for (let i = 0; i < 1000; i++) {
        samples.push(RandomTs.randomGaussian(mean, standardDeviation))
      }
      const sampleMean = samples.reduce((sum, x) => sum + x, 0) / samples.length
      const sampleStandardDeviation = Math.sqrt(
        samples.map(x => (x - sampleMean) ** 2).reduce((sum, x) => sum + x, 0) / samples.length
      )
      expect(sampleMean).toBeCloseTo(mean, 0.1)
      expect(sampleStandardDeviation).toBeCloseTo(standardDeviation, 0.1)
    })
  })
})
