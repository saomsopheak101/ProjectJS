function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(document.getElementById('signupForm'));
    fetch('https://mps4.chandalen.dev/api/register', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.token); // Set token in local storage
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