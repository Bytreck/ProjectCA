document.addEventListener('DOMContentLoaded', function () {
    initializeCalendar();
    initializeSidebar();
    initializeColorToggle();
    initializeToggleButtons();
    initializeDropdown();
    initializeStudyPlanActions();
    initializeMassEventActions();
});

function initializeCalendar() {
    var calendarEl = document.getElementById('calendar');
    var selectedEvent;

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        selectable: true,
        editable: true,
        headerToolbar: {
            start: 'title',
            end: 'prevYear,prev,today,next,nextYear'
        },
        events: [],

        // Cuando se hace clic en un día
        dateClick: function (info) {
            $('#eventStart').val(info.dateStr + 'T00:00');
            $('#eventEnd').val(info.dateStr + 'T23:59');
            $('#eventModal').modal('show');
        },

        // Al hacer clic en un evento existente
        eventClick: function (info) {
            selectedEvent = info.event;
            $('#eventTitleView').text(info.event.title);
            $('#eventDescriptionView').text(info.event.extendedProps.description || 'Sin descripción');
            $('#eventStartView').text(info.event.start.toLocaleString('es-ES'));
            $('#eventEndView').text(info.event.end ? info.event.end.toLocaleString('es-ES') : 'No especificado');
            $('#viewEventModal').modal('show');
        }
    });

    calendar.render();

    // Manejo del formulario para agregar un nuevo evento
    $('#eventForm').on('submit', function (e) {
        e.preventDefault();
        var newEvent = {
            title: $('#eventTitle').val(),
            start: $('#eventStart').val(),
            end: $('#eventEnd').val(),
            description: $('#eventDescription').val(),
        };
        calendar.addEvent(newEvent);
        alert("Evento agregado correctamente.");
        $('#eventForm')[0].reset();
        $('#eventModal').modal('hide');
    });

    // Eliminar el evento seleccionado
    $('#delete-event-button').on('click', function () {
        if (selectedEvent) {
            if (confirm("¿Eliminar este evento?")) {
                selectedEvent.remove();
                alert("Evento eliminado correctamente.");
                $('#viewEventModal').modal('hide');
            }
        }
    });
}

// Función para alternar el sidebar
function initializeSidebar() {
    document.getElementById('sidebarToggle').addEventListener('click', function () {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('sidenav-toggled');
    });
}

// Función para cambiar el color de fondo
function initializeColorToggle() {
    const colorToggle = document.getElementById('colorToggle');
    const colors = ['#ffffff', '#5A8F76', '#63cbdf', '#EEE8B2', '#CDB19C', '#DDA0DD', '#C18D52', '#A9A9A9'];

    colorToggle.addEventListener('click', function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
}

function initializeToggleButtons() {
    toggleButtonVisibility('materiaToggle', 'materiaOptions');
    toggleButtonVisibility('horarioToggle', 'horarioOptions');
}

function toggleButtonVisibility(buttonId, targetId) {
    const button = document.getElementById(buttonId);
    const target = document.getElementById(targetId);

    button.addEventListener('click', () => {
        target.style.display = target.style.display === 'none' || target.style.display === '' ? 'block' : 'none';
    });
}

// Función para inicializar el dropdown
function initializeDropdown() {
    const userButton = document.getElementById('userToggle');
    const dropdownMenu = document.getElementById('userDropdown');

    userButton.addEventListener('click', function () {
        // Alterna la clase `show` en el menú
        dropdownMenu.classList.toggle('show');
    });

    // Cierra el dropdown al hacer clic fuera
    document.addEventListener('click', function (event) {
        if (!userButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
}

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

function initializeMassEventActions() {
    const addButton = document.getElementById('addMassEventButton');
    const modifyButton = document.getElementById('modifyMassEventButton');
    const deleteButton = document.getElementById('deleteMassEventButton');

    addButton.addEventListener('click', () => {
        const title = document.getElementById('eventTitle').value;
        const description = document.getElementById('eventDescription').value;
        const date = document.getElementById('eventDate').value;
        const users = document.getElementById('eventUsers').value;

        if (title && date && users) {
            alert(`Evento masivo "${title}" agregado para usuarios: ${users}.`);
        } else {
            alert("Por favor completa todos los campos requeridos.");
        }
    });

    modifyButton.addEventListener('click', () => {
        alert("Funcionalidad para modificar un evento masivo.");
    });

    deleteButton.addEventListener('click', () => {
        alert("Funcionalidad para eliminar un evento masivo.");
    });
}
