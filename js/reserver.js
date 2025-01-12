function generateTimeSlots(start, end, interval) {
    const buffer = args[0] || 0;
    const slots = [];
    let current = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);

    while (current < endTime) {
        slots.push(current.toTimeString().substring(0, 5));
        current = new Date(current.getTime() + (interval + buffer) * 60000);
    }
    return slots;
}

const horaires = {
    coaching: generateTimeSlots("09:00", "19:00", 60, 10), // Créneaux Coaching
    relation: generateTimeSlots("09:00", "19:00", 60, 10), // Créneaux Relation d'aide
};

const joursActivite = {
    coaching: [1, 2], // Lundi, Mardi
    relation: [3, 4], // Mercredi, Jeudi
};

const activitySelect = document.getElementById('ActivitySelect');
const dateInput = document.getElementById('DateInput');
const selectHour = document.getElementById('selectHour');
const alertInfo = document.getElementById('AlertInfo');

function updateForm() {
    const selectedActivity = activitySelect.value;

    alertInfo.textContent = "";
    dateInput.disabled = true;
    dateInput.value = "";
    selectHour.disabled = true;
    selectHour.innerHTML = `<option value="" selected>Veuillez d'abord choisir une date</option>`;

if (selectedActivity) {
    dateInput.disabled = false;
    alertInfo.textContent = "Veuillez choisir une date pour voir les horaires disponibles.";
} else {
    alertInfo.textContent = "Veuillez sélectionner une activité pour voir les jours et horaires disponibles.";
}
}

function handleDateChange(selectedActivity) {
    const selectedDate = new Date(dateInput.value);
    const day = selectedDate.getDay(); // Jour de la semaine (0=dimanche, 1=lundi, ...)

    selectHour.innerHTML = "";
    if (!joursActivite[selectedActivity].includes(day)) {
    // Afficher un message si le jour n'est pas disponible
    alertInfo.textContent = `Les jours disponibles pour ${
        selectedActivity === "coaching" ? "le coaching" : "la relation d'aide"
    } sont ${
        joursActivite[selectedActivity]
            .map(j => ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][j])
            .join(", ")
    }.`;
    selectHour.disabled = true;
} else {
    alertInfo.textContent = "";
    selectHour.disabled = false;
    horaires[selectedActivity].forEach(hour => {
        const option = document.createElement("option");
        option.value = hour;
        option.textContent = hour;
        selectHour.appendChild(option);
    });
}
}

activitySelect.addEventListener("change", updateForm);
dateInput.addEventListener("input", () => handleDateChange(activitySelect.value));

updateForm();