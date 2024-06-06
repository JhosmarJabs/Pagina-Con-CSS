document.addEventListener('DOMContentLoaded', (event) => {
    function seleccion(checkbox) {
        const checkboxes = document.querySelectorAll('.operador input[type="checkbox"]');
        checkboxes.forEach((cb) => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    }

    function calcular() {
        const val1 = parseFloat(document.getElementById("V1").value);
        const val2 = parseFloat(document.getElementById("V2").value);
        const res = document.getElementById("res");
        let resultado = 0;
        if (isNaN(val1) || isNaN(val2)) {
            res.innerHTML = "Datos nulos o incorrectos";
            if (isNaN(val1)) {
                document.getElementById("V1").focus();
            } else {
                document.getElementById("V2").focus();
            }
            return;
        }
        const operadorSeleccionado = document.querySelector('.operador input[type="checkbox"]:checked');
        if (!operadorSeleccionado) {
            res.innerHTML = "Selecciona un operador";
            return;
        }
        switch (operadorSeleccionado.value) {
            case "Sumar":
                resultado = val1 + val2;
                break;
            case "Resta":
                resultado = val1 - val2;
                break;
            case "Multiplicacion":
                resultado = val1 * val2;
                break;
            case "Division":
                if (val2 !== 0) {
                    resultado = val1 / val2;
                } else {
                    res.innerHTML = "División por cero no permitida";
                    return;
                }
                break;
        }
        res.innerHTML = resultado;
    }
    window.calcular = calcular;
});
