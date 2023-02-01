const ingresotexto = document.querySelector(".ingresotexto");
const textoresultado = document.querySelector(".textoresultado");
const copia = document.querySelector(".copiar");

function validarTexto(){
    let textoEscrito = document.querySelector(".ingresotexto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function botonEncriptar(){

    if(!validarTexto()) {

        const textoEncriptado = encriptar(ingresotexto.value);
        textoresultado.value = textoEncriptado;
        textoresultado.style.backgroundImage = "none";
        ingresotexto.value = "";
        copiar.style.display = "block";

    }

}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++){

        if (stringEncriptado.includes(matrizCodigo[i][0])){

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    
    return stringEncriptado;

}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(ingresotexto.value);
    textoresultado.value = textoEncriptado;
    ingresotexto.value = "";

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado;
}

function copiar(){
    textoresultado.select();
    navigator.clipboard.writeText(textoresultado.value);
    textoresultado.value = "";
    alert("Texto Copiado"); 
}


