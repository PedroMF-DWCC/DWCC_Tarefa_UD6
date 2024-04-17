document.addEventListener("DOMContentLoaded", function() {

    const coloresPaleta = document.querySelectorAll("#paleta tr:first-child td");

    const divDibujo = document.querySelector("#zonadibujo");
    const tdEstadoPincel = document.querySelector("#pincel");
    const tablero = document.createElement("table");
    tablero.id = "tablero";
    crearTablero();
    divDibujo.append(tablero);
    let celdasTablero = document.querySelectorAll("#tablero td");

    let classColorSeleccionado = "color1";

    let pincelActivado = false;

    coloresPaleta.forEach(color => {

        color.addEventListener("click", () => {

            if(document.querySelector(".seleccionado")){document.querySelector(".seleccionado").classList.remove("seleccionado");}
            color.classList.add("seleccionado");
            classColorSeleccionado = color.className.substring(0, 6);
        });
    });

    celdasTablero.forEach(celda => {

        celda.addEventListener("click", () => {

            pincelActivado = !pincelActivado;
            celda.className = classColorSeleccionado;
            tdEstadoPincel.innerHTML = pincelActivado ? "Pincel ACTIVADO" : "Pincel DESACTIVADO";
        });

    });

    celdasTablero.forEach(celda => {

        celda.addEventListener("mousemove", () => {

            if(pincelActivado === true){

                celda.className = classColorSeleccionado;
            }
        });
    });

    function crearTablero(){

        tablero.border = 1;
        tablero.classList = "tablerodibujo";

        let codigo = "<tbody><caption>Haga click en cualquier celdar para activar/desactivar el Pincel</caption>";
    
        for(let i = 0; i < 30; i++){

            codigo += "<tr>";
    
            for(let ii = 0; ii < 30; ii++){

                codigo += "<td></td>";
            }

            codigo += "</tr>";
        }
        codigo += "</tbody>";
        tablero.innerHTML = codigo;
    }
});
