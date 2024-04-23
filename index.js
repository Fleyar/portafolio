function loadTexts(language, callback) {
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



function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
        }
}
