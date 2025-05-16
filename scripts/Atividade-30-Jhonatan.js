//1-Calculo de troco
Let = "Valor";
Let = "Cliente";
Let = "Troco";
Valor = 100;
Cliente = 150;
Troco = Cliente - Valor;
console.log(`O resultado do troco do cliente é de ${Troco}$.`)

//2-Conversão de Temperatura
let = "Celsius"
let = "Fahrenheit"
let = "Conversão"
Celsius = 27
Conversão = (Celsius * 1.8 + 32);
console.log(`A conversão de ${Celsius} °C para °F, é de ${Conversão}.`);

//3-Variação do ano Bissexto
let = "Ano"
let = "Verificação"
let = "Divisão"
ano = 1946
divisão = ano /4
if (Number.isInteger(divisão)) {console.log(`O ano de ${ano} é bissexto`)

} else {console.log(`O ano de ${ano} não é bissexto`)
}

//4-Calcular Média Escolar e Situação do Aluno
let = "Nota1"
let = "Nota2"
let = "Nota3"
let = "Nota4"
let = "Nota5"
let = "Média"
let = "Soma"
Nota1 = 10
Nota2 = 7
Nota3 = 7
Nota4 = 9
Nota5 = 8
Soma = Nota1 + Nota2 + Nota3 + Nota4 + Nota5
Média = Soma /5

if (Média >=5) {console.log(`O aluno atingiu a média estimada ${Média}`)

} else {console.log(`O aluno não atingiu a média estimada ${Média}`) 
}

//5-Conversão de Minutos para Horas e Minutos
let = "Minutos"
let = "Horas"
let = "Conversão"
Minutos = 30
Conversão = Minutos /60
console.log(`O valor de ${Minutos} minutos em horas é de ${Conversão}.`)

//15-Contagem de Números Ímpares
let = "número1"

num1 = 10
if (num1 % 2 === 0) {
    console.log(`${num1} é par`)
} else {
    console.log(`${num1} é impar`)
}

num2 = 5
if (num2 % 2 === 0) {
    console.log(`${num2} é par`)
} else {
    console.log(`${num2} é impar`)
}

num3 = 7
if (num3 % 2 === 0) {
    console.log(`${num3} é par`)
} else {
    console.log(`${num3} é impar`)
}

//16-Cálculo do Tempo Estimado de Viagem
let precoProdutoA = 5.00;
let quantidadeProdutoA =  500

let precoProdutoB = 4.50
let quantidadeProdutoB = 400

let precoPorUnidadeA = precoProdutoA / quantidadeProdutoA
let precoPorUnidadeB = precoProdutoB / quantidadeProdutoB

console.log("Preco por grama do Produto A: R$" + precoPorUnidadeA)
console.log("Preco por grama do Produto B: R$" + precoPorUnidadeB)

if (precoPorUnidadeA < precoPorUnidadeB) {
    console.log("Produto A em o melho custo-benefício.")
} else if (precoPorUnidadeA > precoPorUnidadeB) {
    console.log("Produto B tem o melhor custo-benefício.")
} else {
    console.log("Ambos os produtos tem o mesmo custo-beneficío.")
}

//17-Cálculo do Perímetro de um Retângulo
let = "lado1"
let = "lado2"
let = "lado3"
let = "lado4"
lado1 = 5
lado2 = 5
lado3 = 5
lado4 = 5
perímetro = ( lado1 + lado2 + lado3 + lado4)
console.log(`O perímetro do retangulo é ${perímetro}`)

//18-Cálculo do Tempo Estimado de Viagem
let = "distância"
let = "velocidade"
let = "tempo"
distância = 500
velocidade = 100
tempo = distância / velocidade
console.log(`Com uma velocidade de ${100} km/h, com uma distância de ${distância} km. O tempo da viagem será de ${tempo} horas.`)

//19-Simulação de Sorteio Aleatório (Cancelado)

//20-Conversão de Notas para Conceitos
let nota6 = 7
if (nota6 < 2)
    console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conceito F.`)
else if (nota6 < 4)
    console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conseito E.`)
else if (nota6 < 6)
    console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conseito D.`)
else if (nota6 < 8)
    console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conseito C.`)
else if (nota6 < 9)
    console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conseito B.`)
else console.log(`Você tirou a nota ${nota6}, essa nota é igual ao conseito A.`)

//21-Cálculo de Fatorial
let número = 5
let fatorial = 1

fatorial *= número
fatorial *= número - 1
fatorial *= número - 2
fatorial *= número - 3
fatorial *= número - 4

console.log(`O fatorial de ${número} é ${fatorial}`)

//22-Separação de Pares e Ímpares
let num10 = 43
divisão = num10 %2
if (divisão % 2==0) {console.log(console.log(`O número ${num10} é impar`))
} else (console.log(`O número ${num10} é par`))

//23-Soma de Dígitos de um Número
let inteiro1 = 35
let inteiro2 = 93
let inteiro3 = 12
somadosinteiros = inteiro1 + inteiro2 + inteiro3
console.log(`O resultado da soma dos números inteiro foi de ${somadosinteiros}.`)

//24-Verificação de Palíndromo (Cancelado)

//25-Cálculo da Média Ponderada
let numero1 = 5
let numero2 = 6
let peso1 = numero1 *3
let peso2 = numero2 *9
let med = (peso1 + peso2) /12
console.log(`A média ponderada de ${numero1} e ${numero2}, é de ${med}.`)

//26-Cálculo de Horas Trabalhadas
let hs1 = 7
let hs2 = 15
horastrabalhadas = hs2 - hs1
console.log(`As horas trabalhadas das ${hs1}h as ${hs2}h, o tempo de trabalho será de ${horastrabalhadas}.`)

//27-Divisão de Conta de Restaurante
let part = 100
let contas = 1400
valor = contas /100
console.log(`O valor pago foi de ${valor} reais.`)

//28-Conversão de Moeda
let Real = 20
let Dolar = 5.77
let conv = Real / Dolar
console.log(`O valor de ${Real}R$ para o dolar - valendo ${Dolar}$. O valor em dolar será de ${conv}.`)