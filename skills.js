// function to covert Fahrenheit
// to Celsius
function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
  console.log(message);
}
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  console.log(message);
}
// Driver code
// const celsius = 60;
// cToF(celsius);

// Driver code
const fahrenheit = 100;
fToC(fahrenheit);

