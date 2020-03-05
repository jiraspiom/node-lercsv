const fs = require("fs");
const util = require("util");


class Reader {
    constructor() {
        this.leitor = util.promisify(fs.readFile);
    }

    async Reader(caminho) {
        try {
            return await this.leitor(caminho, "utf-8");
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = Reader