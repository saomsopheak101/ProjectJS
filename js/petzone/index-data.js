getData();
function getData() {
    fetch('https://mps4.chandalen.dev/api/me', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(json => {
            // Assuming the first name is in json.firstName or a similar field
            let firstName = json.data.first_name;
            let email = json.data.email;
            let avatar = json.data.avatar;
            // console.log(firstName)
            console.log(avatar)
          
            document.querySelectorAll('.changeImg').forEach(element => {
                element.src = avatar;
            });
       
            document.querySelector('.firstname').innerHTML = firstName;
            document.querySelector('.Gemail').innerHTML = email;
        
            
        })
}