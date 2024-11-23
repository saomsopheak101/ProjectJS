function getdata() {
     // Clear previous error messages
     resetValidationMessages();
    
     let firstName = document.querySelector('#first_name').value.trim();
     let lastName = document.querySelector('#last_name').value.trim();
     let email = document.querySelector('#email').value.trim();
     let password = document.querySelector('#password').value.trim();
     let passwordConfirmation = document.querySelector('#password_confirmation').value.trim();

     let firstNameIsValid = validateName(firstName, 'first_name');
     let lastNameIsValid = validateName(lastName, 'last_name');
     let emailIsValid = validateEmail(email);
     let passwordIsValid = validatePassword(password);
     let passwordMatchIsValid = validatePasswordMatch(password, passwordConfirmation);

     // If any field is invalid, stop form submission
     if (!firstNameIsValid || !lastNameIsValid || !emailIsValid || !passwordIsValid || !passwordMatchIsValid) {
         return; // Prevent signup attempt
     }

     // Show loading spinner and update button text
     let signupButton = document.querySelector('#signupButton');
     let spinner = document.querySelector('#spinner');
     signupButton.classList.add('d-none'); // Hide the Signup button
     spinner.classList.remove('d-none'); // Show the spinner button

     let formData = new FormData();
     formData.append('first_name', firstName);
     formData.append('last_name', lastName);
     formData.append('email', email);
     formData.append('password', password);
     formData.append('password_confirmation',passwordConfirmation)


    fetch('https://mps4.chandalen.dev/api/login', {
        method: 'POST',
        headers: { "Accept": "application/json" },
        body: formData
    })

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
        .then(json => {
            spinner.classList.add('d-none');
            signupButton.classList.remove('d-none');
    
            if (json.result === true) {
                handleSignUpSuccess(json);
            }else {
                alert("Invalid credentials.");
            }
            // Assuming the token is returned as part of the response (modify as needed based on your API structure)
            // if (json.data.token) {
            //     // Store the token in sessionStorage
            //     sessionStorage.setItem('authToken', json.data.token);
            //     // console.log(json.data.token);
            //     alert(json.message + " Token stored.");
            //     location.href = 'http://127.0.0.1:5502/../index.html';
            // } else {
            //     alert(json.message); // Show error message
            // }
        })
        .catch(error => {
            console.error('There was an error!', error);
            spinner.classList.add('d-none');
            signupButton.classList.remove('d-none');
        });

}
function validateName(name, fieldId) {
            const errorId = `${fieldId}-error`;
            const successId = `${fieldId}-success`;
            const input = document.querySelector(`#${fieldId}`);
    
            if (name.length === 0) {
                document.getElementById(errorId).textContent = 'Please enter a valid name.';
                input.classList.add('is-invalid');
                document.getElementById(successId).style.display = 'none';
                document.getElementById(errorId).style.display = 'block';
                return false;
            } else if (!/^[a-zA-Z\s]+$/.test(name)) {
                document.getElementById(errorId).textContent = 'Only letters and spaces are allowed.';
                input.classList.add('is-invalid');
                document.getElementById(successId).style.display = 'none';
                document.getElementById(errorId).style.display = 'block';
                return false;
            }
    
            input.classList.remove('is-invalid');
            document.getElementById(errorId).textContent = '';
            document.getElementById(successId).style.display = 'block';
            return true;
        }
    
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailInput = document.querySelector('#email');
    
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email.';
                emailInput.classList.add('is-invalid');
                document.getElementById('email-success').style.display = 'none';
                document.getElementById('email-error').style.display = 'block';
                return false;
            }
    
            emailInput.classList.remove('is-invalid');
            document.getElementById('email-error').textContent = '';
            document.getElementById('email-success').style.display = 'block';
            return true;
        }
    
        function validatePassword(password) {
            if (password.length < 4) {
                document.getElementById('password-error').textContent = 'Password must be at least 4 characters long.';
                document.querySelector('#password').classList.add('is-invalid');
                document.getElementById('password-success').style.display = 'none';
                document.getElementById('password-error').style.display = 'block';
                return false;
            }
    
            document.querySelector('#password').classList.remove('is-invalid');
            document.getElementById('password-error').textContent = '';
            document.getElementById('password-success').style.display = 'block';
            return true;
        }
    
        function validatePasswordMatch(password, confirmPassword) {
            if (!confirmPassword) {
                document.getElementById('password_confirmation-error').textContent = 'Please confirm your password.';
                document.querySelector('#password_confirmation').classList.add('is-invalid');
                document.getElementById('password_confirmation-success').style.display = 'none';
                document.getElementById('password_confirmation-error').style.display = 'block';
                return false;
            } else if (password !== confirmPassword) {
                document.getElementById('password_confirmation-error').textContent = 'Passwords do not match.';
                document.querySelector('#password_confirmation').classList.add('is-invalid');
                document.getElementById('password_confirmation-success').style.display = 'none';
                document.getElementById('password_confirmation-error').style.display = 'block';
                return false;
            }
    
            document.querySelector('#password_confirmation').classList.remove('is-invalid');
            document.getElementById('password_confirmation-error').textContent = '';
            document.getElementById('password_confirmation-success').style.display = 'block';
            return true;
        }
    
        function resetValidationMessages() {
            const fields = ['first_name', 'last_name', 'email', 'password', 'password_confirmation'];
            fields.forEach(field => {
                document.getElementById(`${field}-error`).textContent = '';
                document.querySelector(`#${field}`).classList.remove('is-invalid');
            });
        }
    
        function handleSignUpSuccess(json) {
            if (json.data && json.data.roles && json.data.roles.length > 0) {
                const roleName = json.data.roles[0].name;
    
                if (roleName === 'Normal User') {
                    sessionStorage.setItem('authToken', json.data.token);
                    alert('Signup successful! Redirecting to homepage...');
                    location.href = '../index.html'; // Update the path if needed
                } else {
                    alert('user role not recognized.');
                }
            } else {
                alert(' no roles assigned to this user.');
            }
        }