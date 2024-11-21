function getdata() {
    let gmail = document.querySelector('#email').value;
    let password = document.querySelector('#password').value


    console.log(gmail);
    console.log(password);
    let formData = new FormData();
    formData.append('email', gmail);
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
            return response.json(); // Parse the response as JSON
        })
        .then(json => {
            console.log(json); // Log the response data

            // Assuming the token is returned as part of the response (modify as needed based on your API structure)
            if (json.data.token) {
                // Store the token in sessionStorage
                sessionStorage.setItem('authToken', json.data.token);
                // console.log(json.data.token);
                alert(json.message + " Token stored.");
                location.href = 'http://127.0.0.1:5502/../index.html';
            } else {
                alert(json.message); // Show error message
            }
        })

}