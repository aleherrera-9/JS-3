let zodiac=(prompt("Ingresa tu signo del horoscopo para saber que elemento sos")).toLowerCase();
let flag=true;

while(flag==true){
    switch(zodiac){
        case 'aries':
            alert('tu elemento es fuego');
        break;
        case 'leo':
            alert('tu elemento es fuego');
        break;
        case 'sagitario':
            alert('tu elemento es fuego');
        break;
        case 'tauro':
            alert('tu elemento es tierra');
        break;
        case 'virgo':
            alert('tu elemento es tierra');
        break;
        case 'capricornio':
            alert('tu elemento es tierra');
        break; 
        case 'geminis':
            alert('tu elemento es aire');
        break;
        case 'libra':
            alert('tu elemento es aire');
        break;
        case 'acuario':
            alert('tu elemento es aire');
        break;
        case 'cancer':
            alert('tu elemento es agua');
        break;
        case 'escorpio':
            alert('tu elemento es agua');
        break;
        case 'piscis':
            alert('tu elemento es agua');
        break;
        default: 
        alert('el signo ingresado no existe');
    }
     zodiac=prompt('Ingresa un nuevo signo o 1 para salir');
    if(zodiac!=1){
        flag=true;
    }else{
        flag=false;
    }
    
}




