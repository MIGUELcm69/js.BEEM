// Se bloquea las letras y solo permiten numeros 

const tel = document.querySelector(".contact-form__field--user-phone");

tel.addEventListener("keydown", function(e){

    // permitir teclas de control, backspace, tab, enter, etc 

    if (
        e.key === "Backspace" ||
        e.key === "Enter" ||
        e.key === "Tab" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" 
    ){
        return;
    }

    // Bloquear cualquier tecla que no sea numero 

    if (e.key <"0" || e.key > "9") {
        e.preventDefault();
        console.log("Solo se permiten numeros");
    }

})