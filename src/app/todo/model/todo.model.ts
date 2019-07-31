
//
export class Todo {
// inicializar información

    public id: number;
    public texto: string;
    public completado: boolean;

    constructor( texto: string ) {

        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1); // con mayuscula la primera letra
        this.completado = false;

        this.id = Math.random();
    }

}
