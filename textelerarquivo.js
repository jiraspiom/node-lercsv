 const fs = require("fs")

 fs.readFile("./textegilmar.txt",{encoding: "utf-8"},( erro, dadoslido)=>{
     if (erro){
         console.log("erro ao ler o arquivo")
     }else{
         console.log(dadoslido)
     }
 })