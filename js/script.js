// --- VARIABLES GLOBALES ---

const codigoInput = document.getElementById('codigo-input');
const codigoSubmit = document.getElementById('codigo-submit');
const codigoError = document.getElementById('codigo-error');
const alertaOverlay = document.getElementById('alerta-overlay'); // AÑADIDO
const alertaCuadro = document.getElementById('alerta-cuadro'); // AÑADIDO
const alertaMensaje = document.getElementById('alerta-mensaje'); // AÑADIDO
const infoButton = document.getElementById('infoButton');
const infoOverlay = document.getElementById('info-overlay');
const infoMensaje = document.getElementById('info-mensaje');
const infoCerrarButton = document.getElementById('info-cerrar-button');

// Arreglo de códigos y número de invitados (códigos acortados a 8 caracteres)
// Arreglo de códigos y número de invitados (códigos consecutivos)
const codigosInvitados = {
    'XV_0001': 2, // LUIS FLORES MEDINA
    'XV_0002': 5, // ANA MARIA FLORES BARRIOS
    'XV_0003': 6, // JESUS FLORES BARRIOS
    'XV_0004': 4, // GUADALUPE FIGUEROA
    'XV_0005': 2, // GERARDO Y SONIA
    'XV_0006': 3, // MARINA CARRILLO BARRIOS
    'XV_0007': 3, // BERENICE CARRILLO BARRIOS
    'XV_0008': 4, // FANY CARRILLO BARRIOS
    'XV_0009': 5, // ALFREDO Y NORMA
    'XV_0010': 2, // JONATHAN ALFREDO HERRERA
    'XV_0011': 3, // DANIEL HERRERA
    'XV_0012': 5, // KARINA BARRIOS JIMENEZ
    'XV_0013': 4, // PATRICIA BARRIOS
    'XV_0014': 2, // CELIA BARRIOS
    'XV_0015': 2, // REY DAVID BARRIOS
    'XV_0016': 3, // MARIA BARRIOS JIMENEZ
    'XV_0017': 2, // ALBERTO SANCHEZ
    'XV_0018': 3, // ALBERTO SANCHEZ CESAREO
    'XV_0019': 3, // DALIA SANCHEZ CESAREO
    'XV_0020': 3, // ADRIANA SANCHEZ CESAREO
    'XV_0021': 3, // ROCIO SANCHEZ CESAREO
    'XV_0022': 5, // GUADALUPE SANCHEZ CESAREO
    'XV_0023': 4, // RICARDO Y VERONICA
    'XV_0024': 1, // JOSEFINA ARELLANO
    'XV_0025': 2, // JOSEFINA FLORES ARELLANO
    'XV_0026': 5, // SILVIA FLORES ARELLANO
    'XV_0027': 4, // ARNULFO FLORES ARELLANO
    'XV_0028': 3, // JUAN FLORES ARELLANO
    'XV_0029': 4, // FELIPE FLORES ARELLANO
    'XV_0030': 3, // EDUARDO FLORES ARELLANO
    'XV_0031': 2, // SERIGIO FLORES SANCHEZ
    'XV_0032': 5, // ANTONIO FLORES SANCHEZ
    'XV_0033': 6, // ARACELI FLORES SANCHEZ
    'XV_0034': 3, // LETICIA FLORES SANCHEZ
    'XV_0035': 4, // JOSE LUIS FLORES SANCHEZ
    'XV_0036': 1, // GREGORIO FLORES SANCHEZ
    'XV_0037': 2, // ROSA MEDINA FLORES
    'XV_0038': 2, // CARMELA MEDINA FLORES
    'XV_0039': 4, // ELIZABET Y ESPOSO
    'XV_0040': 2, // MONICA FLORES
    'XV_0041': 4, // VICTOR MEDINA Y ESPOSA
    'XV_0042': 10, // OSCAR MEDINA
    //'XV_0043': 3, // CELIA Y ELENA
    'XV_0044': 2, // DANIEL MIRANDA
    //'XV_0045': 4, // DANIEL WITE
    'XV_0046': 3, // Silvia Ruiz
    'XV_0047': 4, // Hugo
    'XV_0048': 3, // Nayeli Nuñez
    'XV_0049': 5, // Sara Nuñez
    'XV_0050': 4, // Arturo Hipolito y esposa
    'XV_0051': 3, // Kendy Rivera
    'XV_0052': 1, // Isabel Ruiz
    'XV_0053': 1, // Miguel Ruvera Romero
    'XV_0054': 3, // Ana Rivera
    'XV_0055': 5, // Agustin Ruiz
    'XV_0056': 4, // Julia Ruiz
    'XV_0057': 2, // Miguel Rivera
    'XV_0058': 3, // Eduardo Mancilla
    'XV_0059': 3, // Yaqelin Mancilla
    'XV_0060': 4, // Carmela Mancilla
    'XV_0061': 4, // Fany Mancilla
    'XV_0062': 2, // Carolina Mancilla
    'XV_0063': 2, // Marta Romero
    'XV_0064': 4, // Semanta Rodriguez
    'XV_0065': 4, // Adriana Guerrero
    'XV_0066': 3, // Noe Guerrero
    'XV_0067': 2, // Diana
    'XV_0068': 3, // Luz Duran
    //'XV_0069': 2, // Guillermina Rodriguez
    'XV_0070': 5, // Isaura Gregorio
    'XV_0071': 4, // Erika Muñoz
    'XV_0072': 6, // Elizabeth chavez
    'XV_0073': 4, // Karla Espinosa y Familia
    'XV_0074': 4, // Mia Lemus y Familia
    'XV_0075': 1, // Dafne Hernández
    'XV_0076': 1, // Camila Arrieta
    'XV_0077': 1, // Iris González
    'XV_0078': 1, // Dubb Carbajal
    //'XV_0079': 1, // Fernanda Canchola
    //'XV_0080': 1, // Selene Magni
    'XV_0081': 1, // Abigail Pérez
    //'XV_0082': 1, // Rubi Álvarez
    'XV_0083': 2, // Carlos Álvarez
    'XV_0084': 1,   // Nahomy Sánchez
    'XV_0085': 4,   // Margarita y familia
    'XV_0086': 2,   // Alexander y Marisol
    'XV_0087': 5,   // Palestina Peña
    'XV_0088': 2,   // Juan Reyes Mendez
    'XV_0089': 3,   // Enrique Reyes Mendez
    //'XV_0090': 2,   // Juan Jose Silva
    'XV_0091': 3,   // Joali Abril Juarez
    'XV_0092': 2,   // Saint Morales
    'XV_0093': 2,   // Gerardo Robles
    //'XV_0094': 1   // Renata
    'XV_0095': 2   // Eustaquio
};



// --- FUNCIONES ---

function verificarCodigo() {
    const codigoIngresado = codigoInput.value.trim().toUpperCase();

    if (codigosInvitados.hasOwnProperty(codigoIngresado)) {
        const numeroInvitados = codigosInvitados[codigoIngresado];
        mostrarEntradas(numeroInvitados);
    } else {
        mostrarError();
    }
}

function mostrarEntradas(numeroInvitados) {
    alertaMensaje.textContent = `¡Ya casi llega el día! Tu invitación es válida para un total de ${numeroInvitados} personas. Por favor, presenta este mensaje en recepción al momento de tu llegada.`;
    alertaOverlay.style.display = 'flex';
    codigoError.style.display = 'none';

    setTimeout(() => {
        alertaOverlay.style.display = 'none';
    }, 10000);
}

function mostrarError() {
    codigoError.style.display = 'block';
    codigoInput.classList.add('error-input');
    alertaOverlay.style.display = 'none'; // Asegurarse de que esté oculto

    setTimeout(() => {
        codigoError.style.display = 'none';
        codigoInput.classList.remove('error-input');
    }, 3000);
}


// --- EVENTOS Y MANEJADORES ---

codigoSubmit.addEventListener('click', verificarCodigo);

codigoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarCodigo();
    }
});


// --- FUNCIONES (Añade estas nuevas funciones) ---
function mostrarInfoAviso() {
    // ... (El contenido de tu mensaje actual para infoMensaje.innerHTML) ...
    infoMensaje.innerHTML = `
        <p class="text-center">Familiares y amigos:</p>
        <p class="text-justify">Les recordamos que el acceso al evento será estrictamente limitado al número de personas indicado en su invitación.</p>
        <p class="text-justify">Agradecemos su comprensión para celebrar juntos.</p>
        
    `;
    infoOverlay.style.display = 'flex'; // Mostrar el overlay de información

    // --- CÓDIGO AÑADIDO PARA OCULTAR EL BOTÓN DE INTERROGACIÓN ---
    if (infoButton) {
        infoButton.style.display = 'none'; // Oculta el botón
    }
    // -----------------------------------------------------------
}

function cerrarInfoAviso() {
    infoOverlay.style.display = 'none'; // Oculta el overlay de información

    // --- CÓDIGO AÑADIDO PARA MOSTRAR EL BOTÓN DE INTERROGACIÓN ---
    if (infoButton) {
        infoButton.style.display = 'flex'; // Muestra el botón (usamos 'flex' porque su CSS original lo tiene así)
    }
    // -----------------------------------------------------------
}


// --- EVENTOS Y MANEJADORES (Añade estos nuevos event listeners al final de la sección de eventos) ---
if (infoButton) {
    infoButton.addEventListener('click', mostrarInfoAviso);
}

if (infoCerrarButton) {
    infoCerrarButton.addEventListener('click', cerrarInfoAviso);
}

// Opcional: Cerrar el aviso haciendo clic fuera del cuadro
if (infoOverlay) {
    infoOverlay.addEventListener('click', function(event) {
        if (event.target === infoOverlay) { // Solo cierra si se hace clic directamente en el overlay
            cerrarInfoAviso();
        }
    });
}