import { verificarSerie10, verificarSerie20, verificarSerie50 } from "./series.js";

const form = document.querySelector("#form-serie");
const divResultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const montoInput = document.querySelector('input[name="monto"]:checked');
    const serieInput = document.querySelector("#serie");

    if (!montoInput) {
        alert("Por favor selecciona el monto del billete.");
        return;
    }

    const serieValue = serieInput.value ? serieInput.value.trim() : "";
    if (!serieValue) {
        alert("Por favor ingresa el número de serie.");
        serieInput.focus();
        return;
    }

    const monto = montoInput.value;
    const serie = parseInt(serieValue);

    console.log("monto:", monto);
    console.log("serie:", serie);

    let res = true;

    if(monto == 10) {   
        res = verificarSerie10(serie);
    }

    if(monto == 20) { 
        res = verificarSerie20(serie);  
    }

    if(monto == 50) {   
        res = verificarSerie50(serie);
    }

    if(res == true) {
        divResultado.innerHTML = "<p>El billete es válido, puedes aceptarlo.</p>";
    } else {
        divResultado.innerHTML = "<p>El billete no es válido, no lo aceptes.</p>";
    }
});