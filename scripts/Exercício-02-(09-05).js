/*Você está gerenciando sua conta do Instagram e quer analisar o desempenho dos seus
stories nos últimos 5 dias. Você anotou o número de visualizações de cada story:

[1200, 850, 1100, 1350, 950] // Segunda a Sexta

No story de quinta-feira você fez uma enquete sobre um novo corte de cabelo, o que
pode explicar o aumento nas visualizações.

Desenvolva um programa que:
1. Encontre o dia com mais visualizações e qual foi esse dia (2 = quarta, 3 = quinta, etc.)
2. Calcule o total de visualizações no período
3. Conte quantos dias tiveram mais de 1000 visualizações (considerados "stories populares")
4. Calcule a média diária de visualizações*/

const instagram = [1200, 850, 1100, 1350, 950]
let maiorViews = instagram[0]
let diaMaisViews = 0
const diaDaSemana = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
  ];

let totalViews = 0
let auge = 0
let media = 0

for (let i = 0; i < instagram.length; i++) {
  if (instagram[i] > maiorViews) {
    maiorViews = instagram[i]
    diaMaisViews = diaDaSemana[i]
  }
totalViews += instagram[i]
if (instagram[i] > 1000) {
  auge++
}
  media = totalViews / instagram.length
}
console.log(`O dia com mais visualizações: ${diaMaisViews} com ${maiorViews}.`)
console.log(`O total de mais visualizações foi: ${totalViews}.`)
console.log(`Dias com mais visualizações foi: ${auge}.`)
console.log(`A média é igual a: ${media}.`)