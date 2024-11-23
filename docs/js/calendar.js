document.addEventListener('DOMContentLoaded', function () {
    initializeCalendar();
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
