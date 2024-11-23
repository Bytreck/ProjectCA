document.addEventListener('DOMContentLoaded', function () {
    initializeSidebar();
    initializeColorToggle();
    initializeDropdown();
    initializeToggleButtons();
});

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