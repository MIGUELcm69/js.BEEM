// Bloqueo tecal enter 

document.querySelector(".contact-form__button").addEventListener("keydown", function(e) {
    if(e.key  === "Enter") {
        e.preventDefault();
        console.log("Enter Bloqueado");
    }else {
        console.log("No estoy bloqueado");
    }
});

//=================================================

document.querySelector(".contact-form").addEventListener("keydown", function(e) {
    if(e.key  === "Tab") {
        e.preventDefault();
        console.log("Tab Bloqueado");
    }else {
        console.log("No estoy bloqueado");
    }
});