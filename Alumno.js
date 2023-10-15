export class Alumno 
{
    constructor(nombre, calificacion) 
    {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    esAprobado() 
    {
        return this.calificacion >= 7;
    }
}
