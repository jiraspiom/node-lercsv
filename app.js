
const Ler = require("./Reader");
const processo = require("./Processo")
const Tabela = require("./Tabela")

var leitor = new Ler();

async function main(){
    var dados = await leitor.Reader("./arquivo.cvs");
    var dadosprocessados = processo.Processar(dados)

    var usuarios = new Tabela(dadosprocessados)
  
    //testando
    console.log(usuarios.cabecalho)
    console.log("---------------------------")
    console.log(usuarios.linhas)
    //final do teste

}

main()