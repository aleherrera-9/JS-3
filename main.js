let number=prompt("Ingrese el valor que falta en la sucesion : 1, 2, 3, 5,__, 13");
let flag=true;

if(number.toLowerCase()=='ocho'||parseInt(number)==8){
   alert("felicitaciones te ganaste un 0km, pasa a buscarlo en av.siempre viva 742");
   flag=false;
}else{
    alert("no ganaste, el numero faltante era 8");
    number=prompt("para volver a intenarlo ingresa 1 o 0 para salir");
}
//segunda oportunidad, solo se activa si se ingresa una respuesta incorrecta en el primer intento.
if(flag&&number==1){
    number=parseInt(prompt("Ingrese el numero que falta en la sucesion :  13,21,__,55"));
    if(number==34){
        alert("felicitaciones,avanzas al siguiente escalon");
    }
    else{
        alert("el numero faltante era 34,mejor suerte para la proxima");
    }
}else{
    flag=false;
}
