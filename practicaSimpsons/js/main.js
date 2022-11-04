// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover", function() {
        let nombre = prompt("¿Cuál es tu nombre?")
         
        let saludo = document.querySelector("#saludo");
        console.log(saludo)
        if (nombre == ""){
            saludo.innerText = "BIENVENID@"
        }
        else{
            saludo.innerText = "BIENVENIDO@ " + nombre
            saludo.style.textTransform = "upperCase"
        }

        titulo.style.display = "none"

        let span = document.querySelector("span");
        span.style.display = "flex"
        span.addEventListener("click", function() {
            document.querySelector(".bienvenida").style.display = "none"
            document.querySelector(".personajes").style.display = "flex"
        })
        
        
    });



         
 
    

 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    /* let boton = ; */
 
 
 }) 