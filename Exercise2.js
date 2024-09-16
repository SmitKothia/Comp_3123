const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar'));  // Output: Foobar
console.log(capitalize('nodeJs'));  // Output: Nodejs
