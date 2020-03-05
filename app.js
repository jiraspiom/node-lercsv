
const Ler = require("./Reader");
const processo = require("./Processo")

var leitor = new Ler();

async function main(){
    var dados = await leitor.Reader("./arquivo.cvs");
    var dadosprocessados = processo.Processar(dados)
    console.log(dadosprocessados)

}

main()