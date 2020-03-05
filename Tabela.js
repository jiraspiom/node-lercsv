class Tabela{

    constructor(arr){
        this.cabecalho = arr[0]; //salva a primeira linha do arrei
        arr.shift(); //retiro a primeira linha
        this.linhas = arr;
    }
}

module.exports = Tabela