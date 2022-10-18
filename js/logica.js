var data = [
            {
                "estudiante":"María Patricia Heimburg Torres",
                "ci":4883039,
                codigo:1,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Matías Nicolás Bao Cassanello",
                "ci":5403489,
                "codigo":2,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Guido Fernando Alcaraz Herebia",
                "ci":2837909,
                "codigo":3,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Laura Cecilia Achón Gómez",
                "ci":3965412,
                "codigo":4,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Mariel Raquel Aquino Villalba",
                "ci":3494074,
                "codigo":5,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Giovanni Arzamendia",
                "ci":2551888,
                "codigo":6,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Roberto Fleitas",
                "ci":3553821,
                "codigo":7,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Nilda Natalia Rigoni Ibañez",
                "ci":3831278,
                "codigo":8,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Jorge Gustavo Flecha Nuñez",
                "ci":2353583,
                "codigo":9,
                "curso":"Curso Básico de HTML5"
            },
            {
                "estudiante":"Alejandro Milciades Flores Vera",
                "ci":5718095,
                "codigo":10,
                "curso":"Curso Básico de HTML5"
            }
            ];

function buscarAlumno(){

    codigo = document.getElementById("codigo").value;

    var found = data.find(e => e.codigo == codigo);
    console.log(found);
    if (found != undefined) {
        var nombreEstudiante = document.getElementById("alumno");
        var div = document.createElement("div");
        div.innerHTML = 
        'Alumno: ' + found.estudiante + '<br>' + 
        'C.I.: ' + found.ci + '<br>' + 
        'Curso: ' + found.curso;
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