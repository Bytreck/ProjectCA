document.querySelector('.signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validación: Verificar si los campos están vacíos
    if (!email || !password) {
        alert('Por favor, completa todos los campos para iniciar sesión.');
        return;
    }

    // Simular inicio de sesión exitoso
    alert(`Inicio de sesión exitoso para: ${email}`);
    // Redirigir a la página principal
    window.location.href = "index.html";
});
