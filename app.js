const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedorM");
const h3 = document.querySelector(".contenedorH3");
const parrafo = document.querySelector(".contenedorParrafo");
const textoEncriptado = document.querySelector(".texto-encriptado");
const botonCopiar = document.querySelector(".btn-copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar() {
  ocultarAdelante();
  textoEncriptado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar() {
  ocultarAdelante();
  textoEncriptado.textContent = desencriptarTexto(recuperarTexto());
}

function copiar(){
    navigator.clipboard.writeText(textoEncriptado.innerHTML);
    alert("Texto copiado");
    mostrarAdelante();
}


function recuperarTexto() {
  let area = document.querySelector(".area");
  return area.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function mostrarAdelante(){
    munieco.classList.remove("ocultar");
  h3.classList.remove("ocultar");
  parrafo.classList.remove("ocultar");
}

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    // La funcion se fija si la letra pasada es una vocal, si la contiene, cambia esa letra
    // por su encriptado y la agrega al texto final
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    }
    // Si no es una vocal, el texto final es igual a la letra anterior más la letra actual
    else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      //El incrementador para que se salte la i de ai
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      //El incrementador para que se salte nter
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      //El incrementador para que se salte mes
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      //El incrementador para que se salte ber
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      //El incrementador para que se salte fat
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}
