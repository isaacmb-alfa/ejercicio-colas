class Cola {
    constructor() {
        this.elementos = [];
    }
    encolar(elemento) {
        this.elementos = [...this.elementos, elemento];
    }
    desencolar() {
        return this.elementos.shift();
    }
    estaVacia() {
        return this.elementos.length === 0;
    }
    mostrar() {
        return this.elementos;
    }
}
class Vigilante {
    constructor(cola) {
        this.cola = cola;
        this.retirados = [];

    }
    verificarTickets() {
        let tamanoInicial = this.cola.elementos.length;
        for (let i = 0; i < tamanoInicial; i++) {
            let usuario = this.cola.desencolar();
            if (usuario.ticket) {
                this.cola.encolar(usuario);
            } else {
                this.retirados.push(usuario);
            }

        }
    }
    mostrarRetirados() {
        return this.retirados;
    }

}

const fila = [
    { user: "User1", ticket: true },
    { user: "User2", ticket: true },
    { user: "User3", ticket: false },
    { user: "User4", ticket: true },
    { user: "User5", ticket: false },
    { user: "User6", ticket: false },
    { user: "User7", ticket: true },
    { user: "User8", ticket: true },
    { user: "User9", ticket: true },
    { user: "User10", ticket: false },
    { user: "User11", ticket: true },
];
const cola = new Cola();
fila.forEach(usuario => cola.encolar(usuario));
console.log("Cola inicial: " , cola.elementos);

const vigilante = new Vigilante(cola);
vigilante.verificarTickets();

console.log('Elementos retirados: ', vigilante.mostrarRetirados());
console.log('Cola final: ', cola.mostrar());



