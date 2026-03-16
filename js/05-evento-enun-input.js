// Capturar los datos que ingresa un usuario 

const userName = document.querySelector(".contact-form__field--user-name");
const userEmail = document.querySelector(".contact-form__field--user-email");
const userPhone = document.querySelector(".contact-form__field--user-tel");
const userMesagge = document.querySelector(".contact-form__field--user-mesagge");

userName.addEventListener("input", function(e){
    console.log(e.target.value);
});
userEmail.addEventListener("input", function(e){
    console.log(e.target.value);
});
userPhone.addEventListener("input", function(e){
    console.log(e.target.value);
});
userMesagge.addEventListener("input", function(e){
    console.log(e.target.value);
});

// userName.addEventListener("input", readText);
// userEmail.addEventListener("input", readText);
// userPhone.addEventListener("input", readText);
// userMesagge.addEventListener("input", readText);

// function readText(e){
//     console.log(e.target.value);
// };