import './style.css'

// Import the thing we exported from the file `./randomInteger.ts`
import randomInteger from './randomInteger'

// Named exports get named imports
//imports the named export 'diagonalLength'
//imports the named export 'square'
import { diagonalLength as pythagoreanLength, square } from './util'

const roll = randomInteger(1, 6) + 1
console.log(`You just rolled a ${roll}!`)

console.log(pythagoreanLength(4, 3)) // -> 5

console.log(`The square of 12 is ${square(12)}`)
