document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginLink = document.getElementById('loginLink');

    // Manejar envío del formulario
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores de los campos
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const termsAccepted = document.getElementById('terms').checked;

        // Validaciones
        if (!email || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, intenta de nuevo.');
            return;
        }

        if (!termsAccepted) {
            alert('Debes aceptar los términos y condiciones para registrarte.');
            return;
        }

        // Simulación de registro exitoso
        alert(`Cuenta creada para: ${email}`);

        // Redirigir al inicio de sesión
        window.location.href = 'singin.html';
    });

    // Manejar el clic en el enlace "Iniciar sesión"
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'singin.html';
    });
});
