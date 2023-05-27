const textearea_entrada =  document.querySelector(".textarea_entrada");
const textearea_salida = document.querySelector(".textarea_salida");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function boton_encriptar(){
    const textoEncriptado = encriptar(textearea_entrada.value)
    textearea_salida.value = textoEncriptado
    textearea_entrada.value = ""
}

function encriptar(stringEncriptada) {
    let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matriz_codigo);
    stringEncriptada = stringEncriptada.toLowerCase();
  
    for (let i = 0; i < matriz_codigo.length; i++) {
      if (stringEncriptada.includes(matriz_codigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
      }
    }
    return stringEncriptada;
  }

function boton_desencriptar(){
  const textoDesencriptado = desencriptar(textearea_entrada.value)
  textearea_salida.value = textoDesencriptado
  textearea_entrada.value = ""
}
  
function desencriptar(stringDesencriptada) {
  let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  console.table(matriz_codigo);
  stringDesencriptada = stringDesencriptada.toLowerCase();
  
  for (let i = 0; i < matriz_codigo.length; i++) {
    if (stringDesencriptada.includes(matriz_codigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
    }
  }
  return stringDesencriptada;
}

var copyButton = document.querySelector(".copiar");
var textToCopy = document.querySelector(".textarea_salida");

copyButton.addEventListener("click", function() {
  
  textToCopy.select();
  textToCopy.setSelectionRange(0, 99999);

  document.execCommand("copy");

  copyButton.innerHTML = "¡Copiado!";
});