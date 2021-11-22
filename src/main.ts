import './style.css'

// Import the thing we exported from the file `./randomInteger.ts`
import randomInteger from './randomInteger'

const roll = randomInteger(1, 6) + 1
console.log(`You just rolled a ${roll}!`)
