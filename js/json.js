// console.log('json.js');
const user = {id: 32, name: "Zakr", university: "UEF"};
console.log(user);

const stringiFied = JSON.stringify(user);
console.log("Strigigied object ", stringiFied);

// Parsed
const userParsed = JSON.parse(stringiFied);
console.log("Parsed object: ", userParsed);