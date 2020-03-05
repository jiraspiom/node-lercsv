
const Ler = require("./Reader");
const processo = require("./Processo")

var leitor = new Ler();

async function main(){
    var dados = await leitor.Reader("./arquivo.cvs");
    console.log(dados);

    processo.Processar(dados)

}

main()