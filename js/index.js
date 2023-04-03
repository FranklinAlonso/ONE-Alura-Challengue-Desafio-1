function encriptar(){
    var texto = document.getElementById("texto").textContent;
    if(texto !== 'Digite su texto...'){
        if(/^[a-z ]+$/.test(texto)){
            var frame5 = document.getElementById("frame5");
            var picture = document.getElementById("picture");
            var copiar = document.getElementById("copiar");
            var resultado = document.getElementById("result");
            var result = "";
            for (var i = 0; i < texto.length; i++) {
                switch(texto[i]){
                    case 'a':
                        result = result + "ai"; 
                        break;
                    case 'e':
                        result = result + "enter"; 
                        break;
                    case 'i':
                        result = result + "imes"; 
                        break;
                    case 'o':
                        result = result + "ober"; 
                        break;
                    case 'u':
                        result = result + "ufat"; 
                        break;
                    default:
                        result = result + texto[i]; 
                        break;

                }
            }
            copiar.style.display = "flex";
            frame5.style.display = "none";
            picture.style.display = "none";
            resultado.style.display = "flex";
            resultado.textContent = result;
        }else{
            alert("El texto debe ser en minuscula y no debe contener acentos ni caracteres especiales");
			return false;
        }
        
    } 

}

function showPlaceholder(element) { //mostrar la peticion
    if (element.innerHTML.trim() === '') {
        element.innerHTML = 'Digite su texto...';
    }
}

function hidePlaceholder(element) { //ocultar la peticion
    if (element.innerHTML.trim() === 'Digite su texto...') {
        element.innerHTML = '';
    }
}

function desencriptar(){
    var texto = document.getElementById("texto").textContent;
    if(texto !== 'Digite su texto...'){
        if(/^[a-z ]+$/.test(texto)){
            var frame5 = document.getElementById("frame5");
            var picture = document.getElementById("picture");
            var copiar = document.getElementById("copiar");
            var resultado = document.getElementById("result");
            var result = "";
            for (var i = 0; i < texto.length; i++) {
                switch(texto[i]){
                    case 'a':
                        if(texto[i,i+2] = "ai"){
                            i++;
                        }
                        result = result + "a";
                        break;
                    case 'e':
                        if(texto[i,i+5] = "enter"){
                            i = i+4;
                        }
                        result = result + "e";
                        break;
                    case 'i':
                        if(texto[i,i+4] = "imes"){
                            i = i+3;
                        }
                        result = result + "i";
                        break;
                    case 'o':
                        if(texto[i,i+4] = "ober"){
                            i = i+3;
                        }
                        result = result + "o";
                        break;
                    case 'u':
                        if(texto[i,i+4] = "ufat"){
                            i = i+3;
                        }
                        result = result + "u";
                        break;
                    default:
                        result = result + texto[i]; 
                        break;

                }
            }
            copiar.style.display = "flex";
            frame5.style.display = "none";
            picture.style.display = "none";
            resultado.style.display = "flex";
            resultado.textContent = result;
        }else{
            alert("El texto debe ser en minuscula y no debe contener acentos ni caracteres especiales");
			return false;
        }
        
    } 
}

function copiarTexto() {
    var texto = document.getElementById("result").innerText;

    // Crea un elemento de texto temporal para copiar el texto
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;

    // Añade el elemento temporal al documento
    document.body.appendChild(elementoTemporal);

    // Selecciona y copia el texto
    elementoTemporal.select();
    document.execCommand("copy");

    // Elimina el elemento temporal
    document.body.removeChild(elementoTemporal);

    alert("El texto ha sido copiado al portapapeles.");
}