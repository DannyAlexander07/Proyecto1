
let hamburguesa = document.getElementById("hamburguesa");

let menuMovil = document.getElementById("menu-movil");

menuMovil.style.display = "none";

hamburguesa.addEventListener("click", function(e) {

    e.preventDefault();

   if(menuMovil.style.display == "none" || menuMovil.style.display == ""){

        menuMovil.style.display = "flex";
   }
   else{
        menuMovil.style.display = "none";
   }
});












