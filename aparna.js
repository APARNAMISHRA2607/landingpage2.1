// Modal logic for Login and Register
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.modal-close-btn');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');

    // Show Login Modal
    if (loginBtn) loginBtn.onclick = () => {
        loginModal.classList.remove('hidden');
        registerModal.classList.add('hidden');
    };
    if (mobileLoginBtn) mobileLoginBtn.onclick = () => {
        loginModal.classList.remove('hidden');
        registerModal.classList.add('hidden');
    };

    // Show Register Modal
    if (registerBtn) registerBtn.onclick = () => {
        registerModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
    };
    if (mobileRegisterBtn) mobileRegisterBtn.onclick = () => {
        registerModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
    };

    // Switch between modals
    if (switchToRegister) switchToRegister.onclick = () => {
        registerModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
    };
    if (switchToLogin) switchToLogin.onclick = () => {
        loginModal.classList.remove('hidden');
        registerModal.classList.add('hidden');
    };

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = () => {
            loginModal.classList.add('hidden');
            registerModal.classList.add('hidden');
        };
    });

    // Optional: Close modal on outside click
    [loginModal, registerModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    });

    // Prevent default form submission and show alert
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function (e) {
            e.preventDefault();
            alert('Login successful! (Demo only)');
            loginModal.classList.add('hidden');
        };
    }
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.onsubmit = function (e) {
            e.preventDefault();
            alert('Registration successful! (Demo only)');
            registerModal.classList.add('hidden');
        };
    }
});