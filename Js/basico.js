

function validar(){

    document.getElementById('parrafo').innerHTML = ''; //limpiar
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;   

    if(user == 'admin' && pass == '123456'){
        console.log("Acceso permitido");
        document.cookie = "MiCookie=ABC123";
        location.href ="http://www.marca.com/";
    }else{
        document.getElementById('parrafo').innerHTML = 'ERROR';
    }
    
}

