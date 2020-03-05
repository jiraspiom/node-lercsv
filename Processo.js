class Processo {
    
    //Metodo statico responsavel em processar o arquivo, estatico para nao ter de instanciar a class.
    static Processar(dados){
        var linhas = dados.split("\n")
        var colunas = []

        linhas.forEach(linha => {
            var arry = linha.split(",")
            colunas.push(arry)
        });
        
        return colunas;     
    }
}

module.exports = Processo;