![banner](https://raw.githubusercontent.com/teixeirazeus/the-random-ts/master/readme_assets/banner.png)

A simple Typescript library for generating random numbers and shuffling arrays.

## Installation

```bash
npm install the-random-ts
```

## Usage

You can use the functions provided by the library in your Typescript project by importing them like this:

```typescript
import { randomInt, randomArray, shuffleArray } from 'randomts';
```

### Main Functions

### randomInt

This function generates a random integer within a specified range. The parameters `max` and `min` represent the maximum and minimum values of the range respectively. The function returns a random integer between `min` and `max` inclusive. If `max` is not provided, the function uses the default value of `Number.MAX_SAFE_INTEGER` and if `min` is not provided, the function uses the default value of `0`.

```typescript
const randomNumber = randomInt(100, 1); // generates a random number between 1 and 100
const randomNumber = randomInt(100); // generates a random number between 0 and 100
const randomNumber = randomInt(); // generates a random number between 0 and Number.MAX_SAFE_INTEGER
```

### randomArray

This function generates an array of random integers with a specified `length`, within a specified range. The parameters `length`, `max` and `min` represent the length of the array, the maximum and minimum values of the range respectively. The function returns an array of `length` random integers between `min` and `max` inclusive. If `max` is not provided, the function uses the default value of `Number.MAX_SAFE_INTEGER` and if `min` is not provided, the function uses the default value of `0`.

```typescript
const randomNumbers = randomArray(10, 100, 1); // generates an array of 10 random numbers between 1 and 100
const randomNumbers = randomArray(10, 100); // generates an array of 10 random numbers between 0 and 100
const randomNumbers = randomArray(10); // generates an array of 10 random numbers between 0 and Number.MAX_SAFE_INTEGER
```

### shuffleArray

This function shuffles the elements of an array in place. The function takes an array of generic type `T` as a parameter and returns the shuffled array.

```typescript
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray); // shuffles the elements of the array in place
```

List of functions: randomInt, randomFloat, randomArray, randomInRange, randomIntInRange, randomFromArray, shuffleArray, randomHex, randomColor, randomGaussian

## License

Released under the MIT License.

Copyright (c) 2023 Thiago da Silva Teixeira
