class Tabela{

    constructor(arr){
        this.cabecalho = arr[0]; //salva a primeira linha do arrei
        arr.shift(); //retiro a primeira linha
        this.linhas = arr;
    }

    //criando campo virtual para atualizar sempre a quantidade de coluna atual
    get contaLinha(){
        return this.linhas.length
    }
    
    //campo virtual
    get contaColuna(){
        return this.cabecalho.length
    }
}

module.exports = Tabela