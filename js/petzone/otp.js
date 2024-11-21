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
                    console.log(json)
                    if (json.result === true) {
                        sessionStorage.setItem('optCode', otpValue);
                        console.log(json.message);
                        alert(json.message);
                        location.href = 'http://127.0.0.1:5502/../pages/confirm-pass.html';
                    } else {
                        alert(json.message);
                    }
                })

        }