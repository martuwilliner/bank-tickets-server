const { v4: uuidv4 } = require('uuid')


class Ticket{

    constructor(numero){
        this.numero = numero;
        this.id = uuidv4();
        this.escritorio = null;
        this.agente = null;
    }


}

module.exports = Ticket;