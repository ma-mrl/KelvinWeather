// Create a constant variable for today's forecast
const kelvin = 283;

// Create a variable to convert Kelvin to Celsius
let celsius = kelvin - 273;

// Create a variable to convert Celsius to Farenheit
let farenheit = celsius * (9 / 5) + 32;

// Round down the Farenheit temperature
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Farenheit.`)

// Convert Celsius to Newton and round down value
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);