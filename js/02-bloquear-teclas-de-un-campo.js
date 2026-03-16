const keysLocked = ["a, A, b, B"];

// Se selecciona los campos de la clase 

document.querySelectorAll(".contact-form__input").forEach( field => {

    field.addEventListener("keydown", function(e) {
        if (keysLocked.includes(e.key)){
            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`);
        }
    }) 
});