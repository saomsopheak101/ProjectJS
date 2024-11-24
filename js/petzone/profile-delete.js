console.log(sessionStorage.getItem('authToken'))
let authToken = sessionStorage.getItem('authToken')


if (!authToken) {
    location.href = 'http://127.0.0.1:5502/../index.html';
}
 document.querySelectorAll('.logout').forEach((logout)=>{
    logout.addEventListener('click', () => {
            logOut();
    })
 })


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
                sessionStorage.removeItem('authToken');
                console.log(json.message);
                alert(json.message)
                location.href = 'http://127.0.0.1:5502/../index.html';
            } else {
                alert(json.message);
            }
        })
}

// =========== change avarta ========= 
function changeAvarta() {

    let profile = document.querySelector('#profile').files[0];

    // Display the image preview



    const reader = new FileReader();
    reader.onload = (event) => {
        let avatar = document.querySelector('#profile-pic');
        let profileDrop = document.querySelectorAll('.changeImg');
        avatar.setAttribute('src', event.target.result);
        // cuz i want all image work 
        profileDrop.forEach(img => img.setAttribute('src', event.target.result));

        // Store base64 image data in sessionStorage
        sessionStorage.setItem('avatar', event.target.result);
    }
    reader.readAsDataURL(profile)




    let formdata = new FormData();
    formdata.append('avatar', profile);


    fetch('https://mps4.chandalen.dev/api/profile/avatar', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: formdata

    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.result === true) {
                console.log(json.message);
                alert(json.message)
                location.reload();
            } else {
                alert(json.message)
            }
        })

}
// let storedAvatar = sessionStorage.getItem('avatar');
// if (storedAvatar) {
//     document.querySelector('#profile-pic').src = storedAvatar;
//     document.querySelectorAll('.changeImg').forEach(img => img.src = storedAvatar);
// }
document.querySelector('#profile').addEventListener('change', changeAvarta);

   // not yet test it 
   function deleteAvatar() {
    fetch('https://mps4.chandalen.dev/api/profile/avatar', {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(json => {
            if (json.result === true) {
                console.log(json.message)
                alert(json.message);
                location.reload();

            } else {
                alert(json.message)
            }
        })

}

