// Bloqueo de teclas numero en input del nombre 

document.querySelector(".contact-form__field--user-name").addEventListener("keydown", function(e){
    if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        console.log("Los numeros estan bloqueads");
    }
});