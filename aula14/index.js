//              01234567
let umaString = "Um texto";
let outraString = "O rato roeu a roupa do Rei de Roma.";

console.log(umaString[4]);
console.log(umaString.charAt(6));

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf("texto"));
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3));

console.log(umaString.match(/[a-z])/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/Um/, "Outro"));

console.log(umaString.length);
console.log(outraString.slice(-3));
console.log(outraString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase);
console.log(umaString.toLowerCase);