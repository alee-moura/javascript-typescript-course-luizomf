/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/


/*
minha versão

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura); // peso / (altura * altura)
const anoNascimento = 1980;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}.
${nome} nasceu em ${anoNascimento}`)
*/

// correção do curso
const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2010 - idade;

console.log(nome + ' ' + sobrenome + ' tem' + idade + ' anos, pesa ' + peso + ' kg');
// template string
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento, '.');