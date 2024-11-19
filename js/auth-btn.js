


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
                   alert(json.message)
                   profiles.style.display = 'none';
                   signup.style.display = 'inline'
                   login.style.display = 'inline';
                    location.href = 'http://127.0.0.1:5502/home-page.html'
               } else {
                   alert(json.message);
               }
           })
   }

   
   window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)

})
