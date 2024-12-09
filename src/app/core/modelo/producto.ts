//Archivo que contendra los atributos de nuestro archivo json. ng g class core/modelo/producto
export class Producto {
    id!: number;
    nombre!: string;
    precio!: number;
    imagen!: string;
}

//Cuando creamos la estructura de la clase producto, hay que crear el servicio ng g s core/servicio/producto

