
function loguear(){
    let user=document.getElementById("name").value;
    let pass=document.getElementById("password").value;

    if(user=="Sachanys" && pass=="12345"){
        window.location="index.html";
    }
    else{
        alert("Datos Incorrectos")
    }

}