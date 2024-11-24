
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
                showModernToast(
                    {
                        title: 'Logout Successful!',
                        description: 'You have been logged out. Redirecting to Home page...',
                        iconType: 'success'
                    },
                    setTimeout(() => {
                        location.href = '../index.html';
                    }, 3000)
                );
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


    function showModernToast({
            title = '',
            description = '',
            iconType = 'success',
            position = 'bottom-right',
            timer = 4000,
            hasCloseButton = true,
        }) {
            Swal.fire({
                toast: true,
                position: position,
                icon: iconType,
                title: `<p style="color:#222222; margin-bottom:0px;">${title}</p>`,
                html: description
                    ? `<p style="margin: 0; font-size: 11px; color: #a8a8a8;">${description}</p>`
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

        }