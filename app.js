/* 
* 1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

class Colores{
    constructor(){
        this.colores = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
        this.pilaColores = [];
    }

    agregarColor(color){
        this.colores.push(color);
    }

    quitatarColor(){
        return this.colores.pop();
    }

    vacio(){
        return this.colores.length === 0;
    }

}

class Colas {
    constructor(){
        this.nones = new Colores();
        this.pares = new Colores();
    }

    separarColores(){

        this.pares.colores.forEach((color, index) => {
            if (index % 2 === 0 || index === 0) {
                this.pares.pilaColores.push(color);
            }else {
                this.nones.pilaColores.push(color);
                
            }
        })

    }
    mostrarColores(){
        console.log(`Lista de colores sin separar ${this.nones.colores}`);
        
    }
    colaPares(){
        let coloresPares = [...this.pares.pilaColores];
        console.log(`Lista colores pares ${coloresPares.join(' - ') }`);
    }
    colaNones(){
        let coloresImpares = [...this.nones.pilaColores];
        console.log(`Lista colores nones ${coloresImpares.join(' - ')}`);
    }

}

const colas = new Colas();

colas.separarColores();
colas.mostrarColores();

colas.colaNones();
colas.colaPares();