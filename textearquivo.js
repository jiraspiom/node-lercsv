const fs = require("fs")

fs.readFile("./textearquivo.json", {encoding: "utf-8"}, (erro, dados)=>{
    if(erro){
        console.log("erro ao ler o arquivo")
    }else{
        var usuario = JSON.parse(dados)

        usuario.nome = "Gilmar Borges Silva"
        usuario.curso = "programador"
        
        console.log(usuario)

        fs.writeFile("./textearquivo.json",JSON.stringify(usuario), (erro)=>{
            if (erro){
                console.log("erro ao escrever o arquivo")
            }
        })
    }
})