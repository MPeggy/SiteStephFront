function generateTimeSlots(start, end, interval) {
    const slots = [];
    let current = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);

    while (current < endTime) {
        slots.push(current.toTimeString().substring(0, 5));
        current = new Date(current.getTime() + interval * 60000);
    }
    return slots;
}

const horaires = {
    coaching: generateTimeSlots("09:00", "19:00", 60), // Créneaux Coaching
    relation: generateTimeSlots("09:00", "19:00", 60), // Créneaux Relation d'aide
};

const joursActivite = {
    coaching: [1, 2], 
    relation: [3, 4], 
};

// Références aux éléments HTML
const activitySelect = document.getElementById('ActivitySelect');
const dateInput = document.getElementById('DateInput');
const selectHour = document.getElementById('selectHour');
const alertInfo = document.getElementById('AlertInfo');

function updateForm() {
    const selectedActivity = activitySelect.value;

    // Réinitialiser les options horaires
    selectHour.innerHTML = "";

    if (!selectedActivity) {
        alertInfo.textContent = 'Veuillez sélectionner une activité.';
        dateInput.disabled = true;
        return;
    }

    // Activer le champ date
    dateInput.disabled = false;

    // Limiter les jours disponibles dans le sélecteur de date
    dateInput.addEventListener('input', () => {
        const selectedDate = new Date(dateInput.value);
        const day = selectedDate.getDay();

        // Vérifier si le jour est valide pour l'activité
        if (!joursActivite[selectedActivity].includes(day)) {
            alertInfo.textContent = `Les jours disponibles pour ${selectedActivity === 'coaching' ? 'le coaching' : 'la relation d\'aide'} sont ${
                joursActivite[selectedActivity].map(j => ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][j]).join(', ')
            }.`;
            selectHour.innerHTML = '';
        } else {
            alertInfo.textContent = '';
            // Ajouter les créneaux horaires correspondants
            horaires[selectedActivity].forEach(hour => {
                const option = document.createElement('option');
                option.value = hour;
                option.textContent = hour;
                selectHour.appendChild(option);
            });
        }
    });
}

// Écouter les changements sur la sélection de l'activité
activitySelect.addEventListener('change', updateForm);


updateForm();