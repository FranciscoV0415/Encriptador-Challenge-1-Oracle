
    /* Elementos principales de la página
  *Título de su sitio web
  *Campo para el texto que va a ser encriptado/desencriptado
  *Un botón para encriptar
  *Un botón para desencriptar
  *Área para mostrar el texto encriptado/desencriptado.
  *Extra!
  Un rodapie con los datos de la persona que desarrolló el sitio web!
*/

//DECLARACION DE VARIABLES:

var textoIngresado = document.querySelector("#input-texto");
var resultadoTexto = document.querySelector("#msg");

var botonEncriptar = document.querySelector("btn-encriptar");
botonEncriptar.addEventListener("click", function (event){
  event.preventDefault();
})

var botonDesencriptar = document.querySelector("btn-desencriptar");
botonDesencriptar.addEventListener("click", function (event){
  event.preventDefault();
})

var botonCopiar = document.querySelector("btn-copy");
botonEncriptar.addEventListener("click", function (event){
  event.preventDefault();
})


var validarTexto = true;
//FUNCIONES:
function verificar(texto){
  if (texto.Length == 0){
    alert("por favor introduzca el mensaje");
    validarTexto = false;
  }
  else{
    for(var indice = 0; indice < texto.Length; indice++){
      var textoA = texto.charCodeAt(indice);
      if(textoA < 97 || (textoA > 122 & textoA < 241) || textoA > 241){
        if(textoA != 32){
          alert("por favor, no incluya mayusculas, o caracteres especiales ni numeros");
          validarTexto = false;
        }
      }
    }
  }
  return validarTexto;
}
/**************************************************************************************/

function encriptarTexto(){
  var vocales = ["a", "e", "i", "o", "u"];
  var vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
  var texto = input.value;
  validarTexto(texto);
if(validarTexto == true){
    for(var indice = 0; indice < vocales.Length; indice++){
    var textoEncriptado = texto.replace(vocales[indice] , vocalesEncriptadas[indice]);
    texto = textoEncriptado;
    }
    resultadoTexto.value = texto;
}
  else{
    resultadoTexto.value = "";
  }
}

/**************************************************************************************/

function desencriptarTexto(){
  var vocales = ["a", "e", "i", "o", "u"];
  var vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
  var texto = input.value;
  validarTexto(texto);
if(validarTexto == true){
    for(var indice = 0; indice < vocales.Length; indice++){
    var textoDesencriptado = texto.replace(vocalesEncriptadas[indice] , vocales[indice]);
    texto = textoDesencriptado;
    }
    resultadoTexto.value = texto;
}
  else{
    resultadoTexto.value = "";
  }
}

/**************************************************************************************/

function copiar (){
  var copyT = document.querySelector("btn-copy");
  copyT.select();
  document.execComand("copy");
}

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiar;
