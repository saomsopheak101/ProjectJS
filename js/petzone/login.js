function getdata() {
    // Clear previous error messages
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('checkbox-error').textContent = '';

    let email = document.querySelector('#email').value.trim();
    let password = document.querySelector('#password').value.trim();
    
    let emailIsValid = validateEmail(email);
    let passwordIsValid = validatePassword(password);
    
    // If either field is invalid, stop form submission
    if (!emailIsValid || !passwordIsValid) {
        return; // Prevent login attempt
    }

    // Show loading spinner and update button text
    let loginButton = document.querySelector('#loginButton');
    let spinner = document.querySelector('#spinner');
    loginButton.classList.add('d-none'); // Hide the Login button
    spinner.classList.remove('d-none'); // Show the spinner button

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('https://mps4.chandalen.dev/api/login', {
        method: 'POST',
        headers: { "Accept": "application/json" },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => {

            // Reset spinner and show login button
            spinner.classList.add('d-none');
            loginButton.classList.remove('d-none');

            if (json.result === true) {
                handleLoginSuccess(json);
            } else {
                alert("Invalid credentials.");

            }
        })
        .catch(error => {
            console.error('There was an error!', error);

            spinner.classList.add('d-none');
            loginButton.classList.remove('d-none');

        });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {

        document.getElementById('email-error').textContent = 'Please enter a valid email.';
        document.querySelector('#email').classList.add('is-invalid');
        document.getElementById('email-success').style.display = 'none';
        document.getElementById('email-error').style.display = 'block';
        return false;
    }
    document.querySelector('#email').classList.remove('is-invalid');
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


function handleLoginSuccess(json) {
    if (json.data.roles && json.data.roles.length > 0) {
        const roleName = json.data.roles[0].name;
        if (roleName === 'Normal User') {
            sessionStorage.setItem('authToken', json.data.token);
            // alert(json.message + " Token stored.");
            // location.href = '../index.html';
            showModernToast({ title: 'login Succesfully !', description: 'Your profile has been updated.', iconType: 'success' })
        } else if (roleName === 'System Admin') {
            sessionStorage.setItem('adminToken', json.data.token);
            alert(json.message + " Token stored.");
            location.href = '../pages/employee.html';
        } else {
            alert("User role not recognized.");
        }
    } else {
        alert("No roles assigned to this user.");
    }
}

function showModernToast({
    title = '',
    description = '',
    iconType = 'success',
    position = 'top-right',
    timer = 4000,
    hasCloseButton = true,
}) {
    Swal.fire({
        toast: true,
        position: position,
        icon: iconType,
        title: `<strong style="color:#222222">${title}</strong>`,
        html: description
            ? `<p style="margin: 0; font-size: 12px; color: #ccc;">${description}</p>`
            : '',
        customClass: {
            popup: 'modern-toast',
            closeButton: hasCloseButton ? 'swal-close-btn' : '',
        },
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        showCloseButton: hasCloseButton,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });
    setTimeout(() => {
        location.href = '../index.html';
    }, 4000); // 10 seconds delay
}

