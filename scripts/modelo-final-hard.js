/* Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]

Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativos no Top 10

Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.
*/

const nomesAplicativos = ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
const downloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
const avaliacao = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
const categorias = ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]

let maiorNumeroDownload = downloads[0]
let categoriaMaiorDownloads = categorias[0]
let aplicativoMaiorDownloads = nomesAplicativos[0]

let maiorAvaliacao = avaliacao[0]
let categoriaMaiorAvaliacao = categorias[0]
let aplicativoMaiorAvaliacao = nomesAplicativos[0]

let somaTotalDownloads = 0
let mediaDownloads = 0

let novoArray = []
let contadorNovoArray = 0

let totalDownloadsSocial = 0

let categoriaMaisAplicativos = ""
let maiorContagem = 0
let contadorCategoria = {}

for (let i = 0; i < nomesAplicativos.length; i++) {
    if (downloads [i] > maiorNumeroDownload) {
        maiorNumeroDownload = downloads[i]
        categoriaMaiorDownloads = categorias[i]
        aplicativoMaiorDownloads = nomesAplicativos[i]
    }
    if (avaliacao[i] > maiorAvaliacao) {
        maiorAvaliacao = avaliacao[i]
        categoriaMaiorAvaliacao = categorias[i]
        aplicativoMaiorAvaliacao = nomesAplicativos[i]
    }

    somaTotalDownloads += downloads[i]

    if (avaliacao[i] > 4.5) {
        novoArray[contadorNovoArray] = nomesAplicativos[i]
        contadorNovoArray++
    }

    if(categorias[i] === "Social") {
        totalDownloadsSocial += downloads[i]

        for (let categoria in contadorCategoria)
        maiorContagem = contadorCategorias[categoria]
    categoriaMaisAplicativos = categoria
    }
}

mediaDownloads = somaTotalDownloads / downloads.length

console.table(nomesAplicativos)
console.table(downloads)
console.table(avaliacao)
console.table(categorias)

console.log(`O aplicativo com maior número de downloads é: ${aplicativoMaiorDownloads} da categoria: ${categoriaMaiorDownloads}. `)
console.log(`O aplicativo com maior avaliação é ${aplicativoMaiorAvaliacao} da categoria ${categoriaMaiorAvaliacao}.`)

console.log(`A média de downloads dos aplicativos é ${mediaDownloads} Bilhões.`)

console.log(`Os aplicativos com mais de 4.5 milhões de avalições são ${novoArray}.`)
console.log(`O total de downloads da categoria Social é: ${totalDownloadsSocial}M.`)
