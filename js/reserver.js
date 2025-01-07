// Liste des horaires pour activités
const horaires = {
    coaching: ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30"],
    relation: ["19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00"]
};

// Références aux éléments HTML
const selectHour = document.getElementById('selectHour');

// Fonction pour mettre à jour les options horaires
function updateHours(service) {
    // Vider les options existantes
    selectHour.innerHTML = "";

    // Ajouter les nouvelles options
    horaires[service].forEach(hour => {
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = hour;
        selectHour.appendChild(option);
    });
}

// Écouter les changements des boutons radio
midiRadio.addEventListener('change', () => {
    if (midiRadio.checked) {
        updateHours('midi');
    }
});

soirRadio.addEventListener('change', () => {
    if (soirRadio.checked) {
        updateHours('soir');
    }
});

// Initialiser avec les horaires du soir par défaut
updateHours('soir');