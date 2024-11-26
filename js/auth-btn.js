
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)

})


// my script api 
console.log(sessionStorage.getItem('authToken'))
let authToken = sessionStorage.getItem('authToken')
let profiles = document.querySelector('#profiles');
let login = document.querySelector('#login');
let signup = document.querySelector('#signupForm')

if (!authToken) {
    profiles.style.display = 'none';
    login.style.display = 'inline'
    signup.style.display = 'inline'
} else {
    profiles.style.display = 'inline';
    login.style.display = 'none'
    signup.style.display = 'none'
}

// ===== change avatar 
let storedAvatar = sessionStorage.getItem('avatar');
if (storedAvatar) {
    document.querySelectorAll('.changeImg').forEach(img => img.src = storedAvatar);
}


document.querySelector('#logout').addEventListener('click', () => {
    logOut()
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
                sessionStorage.removeItem('adminToken');
                console.log(json.message);
                //    alert(json.message)
                profiles.style.display = 'none';
                signup.style.display = 'inline'
                login.style.display = 'inline';
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


function showModernToast({
    title = '',
    description = '',
    iconType = 'success',
    position = 'top-right',
    timer = 3000,
    hasCloseButton = true,
}) {
    Swal.fire({
        toast: true,
        position: position,
        icon: iconType,
        title: `<p style="color:#222222; margin-bottom:0px;">${title}</p>`,
        html: description
            ? `<p style="margin: -4px; font-size: 12px; color: #101114;">${description}</p>`
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

function Inconrrect({
    title = '',
    description = '',
    iconType = 'error',
    position = 'top-right',
    timer = 3000,
    hasCloseButton = true,
}) {
    Swal.fire({
        toast: true,
        position: position,
        icon: iconType,
        title: `<p style="color:#222222; margin-bottom:0px;">${title}</p>`,
        html: description
            ? `<p style="margin: -4px; font-size: 12px; color: #101114;">${description}</p>`
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






