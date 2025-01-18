
let barra = document.getElementById("hamburguesa");

let menu = document.getElementById("menu-movil");

menuMovil.style.display = "none";

barra.addEventListener("click", function(e) {

    e.preventDefault();

   if(menu.style.display == "none" || menu.style.display == ""){

        menu.style.display = "flex";
   }
   else{
        menu.style.display = "none";
   }
});












