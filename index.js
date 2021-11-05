//boolean operates are not just true or false, the value of the operend is also returned

// Falsy (false)
// 0
// ''
// null
// undefined
// NaN

//Boolean that provides default values

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
