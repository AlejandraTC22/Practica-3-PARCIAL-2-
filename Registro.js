import { Alumno } from './Alumno.js';

const alumnosAprobados = [];
const alumnosReprobados = [];

export function agregarAlumno(nombre, calificacion) 
{
    const alumno = new Alumno(nombre, calificacion);

    if (alumno.esAprobado()) 
    {
        alumnosAprobados.push(alumno);
    } 
    
    else 
    {
        alumnosReprobados.push(alumno);
    }

    return alumno;
}

export function obtenerAlumnosAprobados() 
{
    return alumnosAprobados;
}

export function obtenerAlumnosReprobados() 
{
    return alumnosReprobados;
}
