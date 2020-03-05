
const Ler = require("./Reader");

var leitor = new Ler();


async function main(){
    var dados = await leitor.Reader("./arquivo.cvs");
    console.log(dados);
}

main()