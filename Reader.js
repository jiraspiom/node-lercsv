const fs = require("fs")

class Reader{
  Reader(caminho){
        fs.readFile(caminho, {encoding: "utf-8"},(erro, dados)=>{
            if(erro){
                console.log("erro ao ler arquivo")
            }else{
                console.log(dados)
            }
        })
    }
}

module.exports = Reader