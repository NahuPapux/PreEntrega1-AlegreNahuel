alert(" Bienvenido a la Casa de Cambio!")

function convertir() {
    let valor = parseInt(document.getElementById("monto").value);
    /* let monto = prompt("Ingrese la cantidad de Pesos Argentinos.") */
    let result = 0;
    let usd = 308;
    let eur = 329;
    let brl = 32.20;

    if (document.getElementById("usd").checked){
        result = valor / usd; 
        alert("El cambio de Pesos Argentinos a Dolares es: $" + result.toFixed(2));
    }
    else if (document.getElementById("eur").checked){
        result = valor / eur;
        alert("El cambio de Pesos Argentinos a Euros es: €" + result.toFixed(2));
    }
    else if (document.getElementById("brl").checked){
        result = valor / brl;
        alert("El cambio de Pesos Argentinos a Real Brasileño es: R$" + result.toFixed(2));
    }
    else {
        alert("Por favor complete los campos requeridos");
    }


/*     
    let mxn = 0;
    let tl = 0;
    let clp = 0;
    let gbp = 0;
    let aud = 0;
    let cad = 0;
 */
}

