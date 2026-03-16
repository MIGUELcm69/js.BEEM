//  Seleccionar elementos

// Con queryselector puedo solicitar etiquetas o clases, de esta forma podemos traer la primera etiqueta o y elemento no existe el navegador me devuevlve un  NULL 


// clase que encuentre en el DOM.solo retorna 0 o un elemento

// Se realizo la solicitud 

// Con queryselectorall me trae todas las etiquetas o clases que se encuentran en el DOM

// const heading = document.querySelectorAll(".no-margin");
// const heading = document.querySelector(".header__texto h2");
// console.log(heading);

// heading.textContent = "new-heading"

// // Agregar una clase

// heading.classList.add("New-class")

// // Remover una clase 

// heading.classList.remove("no-marrgin");

// // =================
// const link = document.querySelector("a");
// console.log(link);

// Si realizo inxexasion me trae el ultimo elemento 

const buscador = document.querySelectorAll(".navegacion a");
// console.log(buscador[0,1,2]);

buscador[1].textContent = ("New text of the link")

buscador[1].href = "https://ricoprogramar.com/";

buscador[1].classList.add("New-class2");
buscador[1].classList.remove("navegacion__enlace");


// Generar HTML desde JavaScript
// Se crea un elemento
const newBuscador = document.createElement("A");
// A este elemento se le agrega un contenido
newBuscador.textContent = ("A new Buscador")
// Se agrega una clase existente 
newBuscador.classList.add("navegacion__enlace")
// se agrega al documento

const navigation = document.querySelector(".navegacion__enlace")

navigation.appendChild(newBuscador)



console.log(newBuscador);







// Eventos  

// Nada especial en consola simplemente 1,2,5.
// console.log(1)
// console.log(2)
// console.log(5)

// Ussar el evento load
console.log("Yo soy una parte del DOM",1)

window.addEventListener("load", function(){
   console.log(2)
    console.log("Ya se cargo el window 2");
})

// Otra froma de hacer lo mismo
window.onload = function(){
    console.log(3);
    console.log("Ya se cargo wl window 3")
}



console.log(5)


console.log("Ya hace parte del dom", 5);
document.querySelector('.btn-print').addEventListener('click', pressBtn)
function pressBtn(){
    console.log("Esta es una funcion externa");
    add = 3 * 8;
    console.log(add);
    // window.print();
}

// Evento scroll
window.onscroll = function (){
    console.log("Estoy haciendo scroll...");
}
// =========================================
// Seleccionar elementos y asociar eventos

const sendBtn = document.querySelector('.boton--primario');
if(sendBtn) {
  sendBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log("Formulario enviado sin recarga");
    console.log("Enviando formulario...");
  })

} else {
 console.log("El boton no existe en el DOM");
}


    //     e.preventDefault();
//     console.log(e);
//     console.log("Enviando formulario");
// })