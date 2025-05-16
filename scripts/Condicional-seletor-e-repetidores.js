/*Você está desenvolvendo um aplicativo de previsão do tempo para o seu bairro.
Durante a última semana, você anotou as temperaturas máximas registradas:

[28, 31, 27, 29, 30, 32, 33] // Domingo a Sábado

Sua mãe está planejando um piquenique e pediu para você analisar como estava o tempo.

Desenvolva um programa que:
1. Calcule a temperatura média da semana 
2. Informe a temperatura máxima e em qual dia ela ocorreu
3. Informe a temperatura mínima e em qual dia ela ocorreu
*/

const temperaturas = [28, 31, 27, 29, 30, 32, 33];

const diaDaSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

let media = 0;

let temperatura = 0;

let temperaturaMaxima = temperaturas[0];

let temperaturaMinima = temperaturas[0];

let diaMaiorTemperatura = "";

let diaMenorTemperatura = "";

for (let i = 0; i < temperaturas.length; i++) {
  temperatura += temperaturas[i];

  if (temperaturas[i] > temperaturaMaxima) {
    temperaturaMaxima = temperaturas[i];
    diaMaiorTemperatura = diaDaSemana[i];
  }

  if (temperaturas[i] < temperaturaMinima) {
    temperaturaMinima = temperaturas[i];
    diaMenorTemperatura = diaDaSemana[i];
  }
}
media = temperatura / temperaturas.length;
console.log(`a temperatura media foi de:${media}°`);
console.log(
  `a temperatura maxima do dia foi ${temperaturaMaxima} C e acontceu no dia ${diaMaiorTemperatura}`
);
console.log(
  `a temperatura minima do dia foi ${temperaturaMinima} C e acontceu no dia ${diaMenorTemperatura}`
);