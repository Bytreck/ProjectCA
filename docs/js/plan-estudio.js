// plan-estudio.js - Funciones específicas para plan de estudio
document.addEventListener('DOMContentLoaded', function () {
    initializeStudyPlanActions();
});

function initializeStudyPlanActions() {
    const addButton = document.getElementById('addPlanButton');
    const modifyButton = document.getElementById('modifyPlanButton');
    const deleteButton = document.getElementById('deletePlanButton');

    addButton.addEventListener('click', () => {
        const title = document.getElementById('planTitle').value;
        const description = document.getElementById('planDescription').value;
        const subject = document.getElementById('planSubject').value;
        const sessionType = document.getElementById('sessionType').value;
        const date = document.getElementById('planDate').value;

        if (title && subject && sessionType && date) {
            alert(`Plan de estudio "${title}" agregado exitosamente.`);
        } else {
            alert("Por favor completa todos los campos requeridos.");
        }
    });

    modifyButton.addEventListener('click', () => {
        alert("Funcionalidad para modificar un plan de estudio.");
    });

    deleteButton.addEventListener('click', () => {
        alert("Funcionalidad para eliminar un plan de estudio.");
    });
}
