const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        //Crear instancia de ticketlist
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('New client connected');

            socket.on('solicitar-ticket', (data, callback) => {
                console.log('Solicitud de ticket recibida BACKEND');

                const nuevoTicket = this.ticketList.crearTicket();
                console.log(nuevoTicket);
                callback(nuevoTicket);
                
                // El callback refiere al front: pages-crearticket.js- const nuevoTicket

            });

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            });
            
        
        });
    }


}


module.exports = Sockets;