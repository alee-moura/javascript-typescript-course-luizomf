const numero = prompt('Digite um número:')

document.body.innerHTML = `Raiz quadrada de ${numero} é: <strong> ${numero ** 0.5}</strong> <br>`;
document.body.innerHTML += `${numero} é inteiro: <strong> ${Number.isInteger(numero)}</strong> <br>`;
document.body.innerHTML += `${numero} é NaN: <strong> ${Number.isNaN(numero)}</strong> <br>`;
document.body.innerHTML += `${numero} arredondado para baixo: <strong> ${Math.floor(numero)}</strong> <br>`;
document.body.innerHTML += `${numero} arredondado para cima: <strong> ${Math.ceil(numero)}</strong> <br>`;
document.body.innerHTML += `${numero} com duas casas decimais: <strong> ${numero.toFixed(2)}</strong>`;