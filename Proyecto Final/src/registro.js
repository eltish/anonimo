const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault(   ) 
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";
    
    if(nombre.value.length <10 ){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
  
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es válido <br>'
        entrar = true
    }
    if(password.value.length <8){
        warnings += 'Porfavor, ingresa una contraseña con minimo 8 carácteres <br>'
        entrar = true
    }
    

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
        parrafo.innerHTML = "¡Enviado!"
        window.location="index.html";
    }


})
