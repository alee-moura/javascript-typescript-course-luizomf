const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada de ${numero} é: <strong> ${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro: <strong> ${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>${numero} é NaN: <strong> ${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>${numero} arredondado para baixo: <strong> ${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>${numero} arredondado para cima: <strong> ${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>${numero} com duas casas decimais: <strong> ${numero.toFixed(2)}</strong></p>`