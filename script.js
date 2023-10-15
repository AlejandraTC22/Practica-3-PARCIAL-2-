import { agregarAlumno, obtenerAlumnosAprobados, obtenerAlumnosReprobados } from './Registro.js';

function actualizarListas() 
{
    const approvedList = document.getElementById("approvedList");
    const failedList = document.getElementById("failedList");

    approvedList.innerHTML = "";
    failedList.innerHTML = "";

    const alumnosAprobados = obtenerAlumnosAprobados();
    const alumnosReprobados = obtenerAlumnosReprobados();

    for (const alumno of alumnosAprobados) 
    {
        const li = document.createElement("li");
        li.textContent = `Alumno: ${alumno.nombre} - Calificacion: ${alumno.calificacion}`;
        approvedList.appendChild(li);
    }

    for (const alumno of alumnosReprobados) 
    {
        const li = document.createElement("li");
        li.textContent = `Alumno: ${alumno.nombre} -  Calificacion: ${alumno.calificacion}`;
        failedList.appendChild(li);
    }

    if (alumnosAprobados.length > 0 || alumnosReprobados.length > 0) 
    {
        document.getElementById("result-container").style.display = "block";
    }
}

document.getElementById("addButton").addEventListener("click", () => 
{
    const nombre = document.getElementById("nameInput").value;
    const calificacion = parseFloat(document.getElementById("gradeInput").value);

    if (nombre && !isNaN(calificacion)) 
    {
        agregarAlumno(nombre, calificacion);

        document.getElementById("nameInput").value = "";
        document.getElementById("gradeInput").value = "";

        actualizarListas();
    }
});
