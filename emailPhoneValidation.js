function validateEmailPhone(event) {
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";

    const emailInput = document.getElementById("email").value.trim();
    const phoneInput = document.getElementById("phone").value.trim();

    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === "") {
        document.getElementById("emailError").innerText = "Email cannot be blank";
        isValid = false;
    } else if (!emailRegex.test(emailInput)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address (name@domain.com)";
        isValid = false;
    }

    // Phone validation (10 digits only)
    const phoneRegex = /^\d{10}$/;
    if (phoneInput === "") {
        document.getElementById("phoneError").innerText = "Phone number cannot be blank";
        isValid = false;
    } else if (!phoneRegex.test(phoneInput)) {
        document.getElementById("phoneError").innerText = "Phone number must contain 10 digits only";
        isValid = false;
    }

    if (!isValid) {
        return false;
    }

    return true;
}