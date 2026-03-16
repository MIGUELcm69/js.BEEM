// Enviar un formulario con FormData API
const contactForm = document.querySelector(".contact-form");

// Buscamos donde lo queremos colocar "antes del footer"
const footer = document.querySelector(".footer")

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const data = new FormData(contactForm);
    const contactData = Object.fromEntries(data.entries());

    // console.log("El nombre del usuario es", contactData.userName);
    // console.log("El nombre del usuario es", contactData.userEmail);
    // console.log("El nombre del usuario es", contactData.userPhone);
    // console.log("El nombre del usuario es", contactData.userMessage);

    const { userName, userEmail, userPhone, userMessage } = contactData;
    console.log(`Este es el nombre de usuario ${userName}`);
    console.log(`Este es el correo de usuario ${userEmail}`);
    console.log(`Este es el numero de usuario ${userPhone}`);
    console.log(`Este es el mensaje de usuario ${userMessage}`);

    const result = document.createElement('P');

    // Creamos una clase
    result.classList.add('result');
    // Agregamos contenido
    result.textContent = `Hola ${userName}, tu correo electronico es ${userEmail} y tu numero de telefono es ${userPhone}, el mensaje que nos dejaste es ${userMessage}`

// Insertamos result antes del footer o insertamos los datos antes de un elemento 
    document.body.insertBefore(result, footer)

    // Aqui insertamos los datos depues de un elemento
    footer.insertAdjacentElement("afterend", result);

// Validacion basica

if (userName === '' || userEmail === '' || userPhone === '' || userMessage === '') {
   showAlert('Todos los datos son obligatorios', 'error')
} else {
    showAlert('formulario enviado correctamente', 'correcto')
}

// Aqui creamos una funcion 

// function showError(message){
// // Creamos una etiqueta "p" que es un parrafo y se agrega un contenido 
//     const error = document.createElement('P');
// //    Aqui se sgrega el contenido
//     error.textContent = message;
//     // Aqui se agrega la clase
//     error.classList.add('error')
// // Ete sirve para que un tiempo despues de 1500 milisegundos se renueve la clase
// contactForm.appendChild(error);
// setTimeout(() => {
//     error.remove();
// }, 3000);
// }


function showAlert(message, type){
    const alertBox = document.createElement('P');
    alertBox.textContent = message;
    alertBox.classList.add(type)

contactForm.appendChild(alertBox);


setTimeout(() => {
    alertBox.remove();

    if (type ==='correcto'){
contactForm.reset();
    }
}, 1500);
}
})