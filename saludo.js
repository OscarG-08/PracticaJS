saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarInt("txtEstatura");
}


recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
};
recuperarInt = function(idComponente){
    let valorIngresado = recuperarTexto(idComponente);;
    let valorEntero = parseInt(valorIngresado); 
    return valorEntero;
};
recuperarFloat = function(idComponente){
    let valorIngresado = recuperarTexto(idComponente);;
    let valorFlotante = parseFloat(valorIngresado); 
    return valorFlotante;
};