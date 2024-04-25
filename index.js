let idiomaActual = 'es';
function actualizarTraducciones() {
    fetch('texts.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica si los datos se imprimen correctamente
            // Procesa y actualiza los elementos traducibles
            actualizarElementosTraducibles(data, idiomaActual);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function actualizarElementosTraducibles(data, idiomaActual) {
    // Selecciona todos los elementos con el atributo 'data-translate'
    const elementosTraducibles = document.querySelectorAll('[data-translate]');
    console.log(elementosTraducibles);

    // Itera sobre cada elemento traducible
    elementosTraducibles.forEach(elemento => {
        // Obtiene la clave de traducción del atributo 'data-translate' del elemento
        const clave = elemento.getAttribute('data-translate');

        // Verifica si la clave de traducción existe en los datos cargados del archivo JSON
        if (data[clave]) {
            // Obtiene la traducción correspondiente
            const traduccion = data[clave][idiomaActual];

            // Actualiza el contenido del elemento con la traducción si existe
            if (traduccion) {
                elemento.textContent = traduccion;
            }
        }
    });

    // Actualiza el texto del botón de idioma si existe
    const currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
        currentLanguageElement.textContent = idiomaActual.toUpperCase();
    }
}

// Agrega un event listener para el clic en el elemento con id 'enOption'
document.getElementById('enOption').addEventListener('click', function() {
    // Llama a la función actualizarTraducciones() cuando se haga clic en el elemento
    actualizarTraducciones();
});


function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
        }
}
