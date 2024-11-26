console.log(sessionStorage.getItem('StoreEmail'));
let email = sessionStorage.getItem('StoreEmail');

function subOtp() {
    let otp1 = document.querySelector('#b1').value;
    let otp2 = document.querySelector('#b2').value;
    let otp3 = document.querySelector('#b3').value;
    let otp4 = document.querySelector('#b4').value;
    let otp5 = document.querySelector('#b5').value;
    let otp6 = document.querySelector('#b6').value;

    let otpValue = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log(otpValue);

     // Show loading spinner and update button text
     let nextButton = document.querySelector('#nextButton');
     let spinner = document.querySelector('#spinner');
     nextButton.classList.add('d-none'); // Hide the Next button
     spinner.classList.remove('d-none'); // Show the spinner button
    fetch('https://mps4.chandalen.dev/api/forgot/verify-otp', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            otp: otpValue,
            email: email
        })
    })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
             // Reset spinner and show the Next button
             spinner.classList.add('d-none');
             nextButton.classList.remove('d-none');
            if (json.result === true) {
                sessionStorage.setItem('optCode', otpValue);
                // console.log(json.message);
                showModernToast(
                    {
                       title: 'This OTP is correct!',
                        iconType: 'success'
                    },
                    setTimeout(() => {
                        location.href = 'http://127.0.0.1:5502/../pages/confirm-pass.html';
                    }, 3000))

            } else {
                Inconrrect({
                    title: 'This OTP did not match or is incorrect.',
                    
                })
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
            spinner.classList.add('d-none');
            nextButton.classList.remove('d-none');
            Inconrrect({
                title: 'Error',
                description: 'Something went wrong. Please try again.',
                iconType: 'error'
            });
        });

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
            ? `<p style="margin: -4px; font-size: 13px; color: #101114;">${description}</p>`
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
            ? `<p style="margin: 0px; font-size: 12px; color: #101114;">${description}</p>`
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
