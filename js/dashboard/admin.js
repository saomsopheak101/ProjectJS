
console.log(sessionStorage.getItem('adminToken'))
let authToken = sessionStorage.getItem('adminToken')


if (!authToken) {
    location.href = 'http://127.0.0.1:5502/../index.html';
}

function logOut() {
    fetch('https://mps4.chandalen.dev/api/logout', {
        method: 'DELETE',
        headers: {
            'Accept': "application/json",
            'Authorization': `Bearer ${authToken}`
        }


    })
        .then(res => res.json())
        .then(json => {
            if (json.result === true) {
                sessionStorage.removeItem('adminToken');
                console.log(json.message);
                alert(json.message)
                location.href = 'http://127.0.0.1:5502/../index.html';
            } else {
                alert(json.message);
            }
        })
}
document.querySelector('#logout').addEventListener('click', () => {
    logOut()
})
avatarProfile();
function avatarProfile() {
    fetch('https://mps4.chandalen.dev/api/me', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(json => {

            let fullname = `${json.data.last_name} ${json.data.first_name}`;
            let Email = json.data.email;
            let avatar = json.data.avatar;
            
            let role = json.data.roles[0].name;
            console.log(role);
            console.log(fullname);
            console.log(Email);
            document.querySelectorAll('.fullname').forEach((name)=>{
                name.innerHTML = fullname;
            });
            document.querySelectorAll('.profile-admin').forEach((image)=>{
                image.src = avatar;
            })

            document.querySelector('.fgmail').innerHTML = Email;
            document.querySelector('#admin').innerHTML = role;
        })
}
