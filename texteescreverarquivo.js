const fs = require("fs")

fs.writeFile("./textegilmar.txt", "Contudo novo que sera adicionado", (erro)=>{
    if(erro){
        console.log("erro ao escrever o arquivo")
    }
})