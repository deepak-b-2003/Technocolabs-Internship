const kelvin = 293; // today's forcast 

const celcius = kelvin - 273; //celcius is 273 degrees less than kelvin so, saving temperatue in terms if celcius

let fahrenheit = (9/5)*celcius + 32; //finding temperatue in terms of fahrenheit

fahrenheit = Math.floor(fahrenheit);//rounding to integer

console.log(`\nThe Temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celcius*(33/100);
newton = Math.floor(newton);

console.log(`The Temperature is ${newton} newton \n`);

