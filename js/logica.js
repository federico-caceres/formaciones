
function buscarAlumno(){

    codigo = document.getElementById("codigo").value;
    msgOk = document.getElementById("certificadoEncontrado");
    msgError = document.getElementById("certificadoNoEncontrado");
    myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});

    eliminarDatosModal();

    if (validarImput(codigo)) 
    {
        found = data.find(e => e.codigo == codigo);
        if (found != undefined) 
        {
            nombreEstudiante = document.getElementById("alumno");
            div = document.createElement("div");
            // path = '../certificates/' + Number(codigo) + '.pdf'; // local path
            path = 'https://federico-caceres.github.io/formaciones/certificates/' + Number(codigo) + '.pdf';

            div.innerHTML = 
            '<br>' +
            '<strong>Alumno: </strong>' + found.estudiante + '<br>' + 
            '<strong>C.I.: </strong>' + found.ci + '<br>' + 
            '<strong>Curso: </strong>' + found.curso + '<br>' +
            '<a href='+ path +' target=\'blank\'>¡Descargar certificado firmado!</a>';
            nombreEstudiante.appendChild(div);
            msgOk.style.display = "block";
        }else{
            msgError.style.display = "block";
        }
        myModal.show();
    }

}

function validarImput(codigo){
    if (codigo == "") {
        alert("El código no puede ser vacío, favor cargué el código validador del certificado!");
        return false;
    }else{
        return true;
    }
}

function eliminarDatosModal()
{
    nombreEstudiante = document.getElementById("alumno");
    msgOk = document.getElementById("certificadoEncontrado");
    msgError = document.getElementById("certificadoNoEncontrado");
       
    msgOk.style.display = "none";
    msgError.style.display = "none";
    
    child = nombreEstudiante.lastElementChild; 
    while (child) {
        nombreEstudiante.removeChild(child);
        child = nombreEstudiante.lastElementChild;
    }
}


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