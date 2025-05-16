//1
let valorCompra = 250
let ehDiaPromocao = true
let temCartaoFidelidade = true

let percentualDesconto = 0
if (valorCompra > 200) {
    {percentualDesconto += 10
} console.log("Desconto de 10% aplicado na compra por ser maior de R$200!")
} if (ehDiaPromocao) {percentualDesconto += 15
console.log("Desconto de 15% aplicado na compra por ser dia de promoção!")
}

if (temCartaoFidelidade) {percentualDesconto += 5
    console.log("Desconto adicional de 5% aplicado na compra por ter o cartão fidelidade da loja!")


} let valorDesconto = valorCompra * (percentualDesconto / 100)
let valorFinal = valorCompra - valorDesconto
console.log(`Valor original: R$ ${valorFinal.toFixed(2)}`)
console.log(`Total de desconto: ${percentualDesconto} % (R$${valorDesconto.toFixed(2)})`)
console.log(`Valor final: R$${valorFinal.toFixed(2)}`)

//2
let idade1 = 17
let passouExameTeorico = true
let passouExamePratico = true
if (idade1 >= 18) {console.log(`Você tem a idade ${idade1}. Portantanto, pode tirar sua carteira de motorista.`)} 
else {console.log(`Você não atingiu a idade estima. Portanto, não pode tirar sua carteira de motorista.`)}
if (passouExameTeorico) {console.log(`Você passou no exame teorico. Portanto, pode tirar sua carteira de motorista.`)}
else {console.log(`Você não passou no exame teorico, tente novamente.`)}
if (passouExamePratico) {console.log(`Você passou do exame prático, agora você pode tirar sua carteira de motorista.`)}
else {console.log(`Você não passou do exame prático, tente novamente.`)}

//3
let idade2 = 20
let ehFeriado = true
let temCartaoDesconto = true
let precoIngresso

if (idade2 <= 10) {
    precoIngresso = 20
    console.log(`Categoria: Criança - Preço base: R$20,00.`)
} else if (idade2 >= 60) {
    precoIngresso = 25
    console.log(`Categoria: Idoso - Preço base: R$25,00.`)
} else {
    precoIngresso = 40
    console.log(`Categoria: Adulto - Preço base: R$40,00.`)
} 
if (ehFeriado) {
    let acrescimo = precoIngresso * 0.2
    precoIngresso += acrescimo
    console.log(`Acrescimo de 20% por ser feriado: +R$${acrescimo.toFixed(2)}`)
} if (temCartaoDesconto) {
    let desconto = precoIngresso * 0.15
    precoIngresso -= desconto
    console.log(`Desconto de 15% por ter cartão: -R$${desconto.toFixed(2)}`)
} console.log(`Preco final do ingresso: R$${precoIngresso.toFixed(2)}`)

//4
let idade3 = 17
let classificacaoFilme
let acompanhadaPorResponsavel = true
let temIngresso = true
if (idade3 <= 10){
    classificacaoFilme = "Classificação Livre."
    console.log(`Você tem a permisão de assistir esse filme, pois sua classificação é de ${classificacaoFilme}.`)}
    else if (idade3 < 14 ) {
        classificacaoFilme = "14"
        console.log(`Você tem a permisão de assistir esse filem, pois sua classificação é de ${classificacaoFilme}.`)
    
    }