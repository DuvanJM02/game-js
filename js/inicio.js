document.addEventListener('DOMContentLoaded', function(){
    inicio.iniciarJuego();
}, false);

var inicio = {
    iniciarJuego: function () {  
        console.log('funciona');
        dimensiones.iniciar();
        buclePrincipal.iterar();
    }
};