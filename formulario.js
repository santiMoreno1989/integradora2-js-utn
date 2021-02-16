 var nombre=document.getElementById('nombre');
var email=document.getElementById('correo');
var asunto=document.getElementById('asunto');
function validacion(){
    nombre.addEventListener('input',validacionNombre);
    email.addEventListener('input',validacionEmail);
    asunto.addEventListener('input',validacionAsunto);
    validacionNombre();
    validacionEmail();
    validacionAsunto();
}
function validacionNombre(){
    if(nombre.value==''){
        nombre.style.border='2px solid red';
        nombre.setCustomValidity('Debe ingresar al menos un nombre')
    }else{
        nombre.style.border='2px solid green';
        nombre.setCustomValidity('');
    }
}
function validacionEmail(){
    if(email.value==''){
        email.style.border='solid 2px red';
        email.setCustomValidity('Debe ingresar al menos un correo electronico');
    }else{
        email.style.border='solid 2px green';
        email.setCustomValidity('');
    }
}
function validacionAsunto(){
    if(asunto.value==''){
        asunto.style.border='2px solid red';
        asunto.setCustomValidity('Ingrese el motivo de su consulta');
    }else{
        asunto.style.border='2px solid green';
        asunto.setCustomValidity('');
    }
}

window.addEventListener('load', validacion); 