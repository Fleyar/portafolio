/* function loadTexts(language, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', language + '.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // Cambiado "200" a 200 (sin comillas)
            texts = JSON.parse(xhr.responseText);
            callback();
        }
    };
    xhr.send(null);
}

function translate(language) {
    loadTexts(language, function() {
        Object.keys(texts).forEach(function(key) {
            var element = document.getElementById(key);
            if (element) {
                element.innerText = texts[key];
            }
        });
    });
}

// Cargar los textos al cargar la página
window.onload = function () {
    // Por defecto, mostrar textos en inglés
    translate('texts');
};
 */

// Agrega un manejador de eventos al cargar el documento
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene la opción de idioma
    const enOption = document.getElementById('enOption');
    
    // Agrega un manejador de eventos al hacer clic en la opción de idioma
    enOption.addEventListener('click', function() {
        translate('en');
    });
});

// Función para cambiar el idioma y actualizar el contenido de la página
function translate(lang) {
    idiomaActual = lang;
    actualizarTraducciones();
}

// Función para mostrar/ocultar la lista de opciones de idioma
function toggleDropdown() {
    const dropdownList = document.getElementById('dropdownList');
    dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
}



// Función para actualizar el contenido de la página con las traducciones correspondientes
function actualizarTraducciones() {
    // Obtiene todos los elementos con la clase 'traducible'
    const elementosTraducibles = document.querySelectorAll('.traducible');

    // Itera sobre cada elemento traducible
    elementosTraducibles.forEach(elemento => {
        // Obtiene la clave de traducción del atributo 'data-translate' del elemento
        const clave = elemento.getAttribute('data-translate');

        // Verifica si la clave de traducción existe en el objeto de traducciones
        if (traducciones[clave]) {
            // Itera sobre cada nodo de texto hijo del elemento
            elemento.childNodes.forEach(nodo => {
                // Verifica si el nodo es de tipo texto
                if (nodo.nodeType === Node.TEXT_NODE) {
                    // Obtiene el idioma correspondiente del objeto de traducciones
                    const traduccion = traducciones[clave][idiomaActual];
                    // Reemplaza el contenido del nodo de texto con la traducción
                    nodo.textContent = traduccion ? traduccion : nodo.textContent;
                }
            });
        }
    });

    // Actualiza el texto del botón de idioma
    document.getElementById('currentLanguage').textContent = idiomaActual.toUpperCase();
}




function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
        }
}
