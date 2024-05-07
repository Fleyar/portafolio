document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON
    fetch('texts.json')
        .then(response => response.json())
        .then(data => {
              // Función para reemplazar los marcadores de posición con HTML
              function replaceHTML(text) {
                return text.replace(/\{(.*?)\}/g, function(match, p1) {
                    switch (p1) {
                        case 'desarrollador':
                            return '<span>desarrollador</span>';
                        case 'and':
                            return '<span style="color: var(--primary);">&</span>';
                        case 'ready':
                            return '<br>';
                        case 'listo para dejar huella desde' :
                            return '<span style="color: var(--primary);">listo para dejar huella desde</span>'
                        case 'Colombia':
                            return '<span style="color: var(--white);">Colombia</span>';
                        default:
                            return match;
                    }
                });
            }
            // Insertar los textos en el HTML
            document.getElementById('titulo-header').innerText = data.header.title;
            document.getElementById('home').innerText = data.header.home;
            document.getElementById('projects').innerText = data.header.projects;
            document.getElementById('about-me').innerText = data.header['about-me'];
            document.getElementById('contact').innerText = data.header.contacts;

            document.getElementById('titulo-hero').innerHTML = replaceHTML(data.hero.title);
            document.getElementById('descripcion-hero').innerText = data.hero.description;
            document.getElementById('boton-hero').innerText = data.hero.button;
            document.getElementById('estado-hero').innerText = data.hero.status;

            document.getElementById('descripcion-footer').innerText = data.footer.description;

            // Insertar los textos en el resto de los elementos HTML
            // Añade aquí más líneas según sea necesario para los demás elementos
            document.getElementById('header-proyectos').innerText = data.projects.header;
            document.getElementById('link-proyectos').innerText = data.projects['view-more'];
         

            document.getElementById('nombre-proyecto').innerText = data.projects['project-1'].name;
            document.getElementById('descripcion-proyecto').innerText = data.projects['project-1'].description;
            document.getElementById('boton-live').innerText = data.projects['project-1']['live-button'];
            
            document.getElementById('nombre-proyecto-2').innerText = data.projects['project-2'].name;
            document.getElementById('descripcion-proyecto-2').innerText = data.projects['project-2'].description;
            document.getElementById('boton-live-2').innerText = data.projects['project-2']['live-button'];
            document.getElementById('boton-figma-2').innerText = data.projects['project-2']['figma-button'];

            document.getElementById('nombre-proyecto-3').innerText = data.projects['project-3'].name;
            document.getElementById('descripcion-proyecto-3').innerText = data.projects['project-3'].description;
            document.getElementById('boton-live-3').innerText = data.projects['project-3']['live-button'];
            document.getElementById('boton-gitgub-3').innerText = data.projects['project-3']['github-button'];


            document.getElementById('autor-cita').innerText = data.quote.author;
            document.getElementById('texto-cita').innerText = data.quote.text;

            document.getElementById('header-skills').innerText = data.skills.header;

            document.getElementById('nombre-skill').innerText = data.skills.name;
            document.getElementById('lenguajes').innerText = data.skills.languages.join(' ');

            document.getElementById('db-nombre').innerText = data.skills.name2;
            document.getElementById('db').innerText = data.skills.databases.join(' ');

            document.getElementById('otros-nombre').innerText = data.skills.name3;
            document.getElementById('otros').innerText = data.skills.other.join(' ');

            document.getElementById('frameworks-nombre').innerText = data.skills.name4;
            document.getElementById('fm').innerText = data.skills.frameworks.join(' ');

            document.getElementById('header-about').innerText = data.about.header;
            document.getElementById('descripcion-about').innerText = data.about.description;
            document.getElementById('boton-about').innerText = data.about.button;

            document.getElementById('header-contacto').innerText = data.contacts.header;
            document.getElementById('descripcion-contacto').innerText = data.contacts.description;
            document.getElementById('titulo-contacto').innerText = data.contacts.header;

            document.getElementById('titulo-footer').innerText = data.footer.title;

            // Se ha cargado correctamente
            console.log('JSON cargado exitosamente.');
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});


function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
        }
}
