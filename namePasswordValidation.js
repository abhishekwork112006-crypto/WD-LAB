
function validateForm(event) {

    document.getElementById("nameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Get input values
    const nameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value;

    let isValid = true;

    // 1. Name Validation: Must contain only alphabets and be >= 6 characters
    const alphabetRegex = /^[a-zA-Z]+$/;

    if (nameInput.length < 6) {
        document.getElementById("nameError").innerText =
            "Name must be at least 6 characters";
        isValid = false;
    } else if (!alphabetRegex.test(nameInput)) {
        document.getElementById("nameError").innerText =
            "Name must contain only alphabets";
        isValid = false;
    }

    // 2. Password Validation: Must be >= 6 characters
    if (passwordInput.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 6 characters";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
        return false;
    }

    alert("Registration successful!");

    // Prevent submission because this is a demonstration form
    event.preventDefault();
    return false;
}
