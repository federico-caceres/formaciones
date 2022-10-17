var data = [
                {
                    estudiante:"Federico Cáceres",
                    ci:3883569,
                    codigoCertificado:1,
                    curso:"Curso Básico de HTML5"
                },
                {
                    estudiante:"Federico Cáceres",
                    ci:3883568,
                    codigoCertificado:2,
                    curso:"Curso Básico de HTML5"
                }
            ];

function buscarAlumno(){

    codigo = document.getElementById("codigo").value;

    var found = data.find(e => e.codigoCertificado == codigo);
    console.log(found);
    if (found != undefined) {
        var nombreEstudiante = document.getElementById("alumno");
        var div = document.createElement("div");
        div.innerHTML = 'Alumno: ' + found.estudiante + '<br>' + 'Curso: ' + found.curso;
        nombreEstudiante.appendChild(div);
    }

}

function eliminarDatosModal(){
    var nombreEstudiante = document.getElementById("alumno");
        
    var child = nombreEstudiante.lastElementChild; 
    while (child) {
        nombreEstudiante.removeChild(child);
        child = nombreEstudiante.lastElementChild;
    }
}



// const modal = document.getElementById("exampleModal");

// document.addEventListener("click", (event) => {
//   const isClickInside = modal.contains(event.target);

//   if (!isClickInside) {
//     eliminarDatosModal();
//   }
// });