
const Ticket = require('./ticket');

class TicketList {

    constructor() {
        this.ultimoNumero = 0;

        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNumero() {
        this.ultimoNumero ++;
        return this.ultimoNumero;
    }
    
    get ultimos13() {
        return this.asignados.slice(0,13);
    }

    crearTicket() {
        const nuevoTicket = new Ticket( this.siguienteNumero );
        this.pendientes.push( nuevoTicket );
        return nuevoTicket;
    }

    asignarTicket(agente, escritorio) {
        if (this.pendientes.length === 0) {
            return null;
        }

        const siguienteTicket = this.pendientes.shift(); // Elimina el primer elemento del arreglo y lo retorna

        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        this.asignados.unshift(siguienteTicket); // Agrega el elemento al inicio del arreglo

        return siguienteTicket;
    }

}

module.exports = TicketList;