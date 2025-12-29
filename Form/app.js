const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    const form = document.getElementById("myForm");
    const successMsg = document.getElementById("successMsg");

    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            return false;
        }
        nameError.style.display = "none";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block";
            return false;
        }
        emailError.style.display = "none";
        return true;
    }

    function validatePhone() {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.style.display = "block";
            return false;
        }
        phoneError.style.display = "none";
        return true;
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*\d).{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.style.display = "block";
            return false;
        }
        passwordError.style.display = "none";
        return true;
    }

    // Real-time validation (blur events)
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    phoneInput.addEventListener("blur", validatePhone);
    passwordInput.addEventListener("blur", validatePassword);

    // Form submission
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const isValid =
            validateName() &
            validateEmail() &
            validatePhone() &
            validatePassword();

        if (isValid) {
            successMsg.style.display = "block";
            form.reset();
        } else {
            successMsg.style.display = "none";
        }
    });
