function ValidateAndSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password_confirmation').value;

    // Define regex patterns
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Clear previous error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Validate inputs
    const errors = [];

    if (!first_name || !nameRegex.test(first_name)) {
        errors.push('First name is required and should contain only letters.');
    }
    if (!last_name || !nameRegex.test(last_name)) {
        errors.push('Last name is required and should contain only letters.');
    }
    if (!email || !emailRegex.test(email)) {
        errors.push('Email address is required and should be in the correct format.');
    }
    if (!password || !passwordRegex.test(password)) {
        errors.push('Password is required and should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Display error messages if any
    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = errors.join('<br>');
        return;
    }

    submitForm();
}

function submitForm() {
    const formData = new FormData(document.getElementById('signupForm'));
    fetch('https://mps4.chandalen.dev/api/register', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful!');

            } else {
                document.getElementById('errorMessages').innerHTML = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('errorMessages').innerHTML = 'An error occurred. Please try again.';
        });
}