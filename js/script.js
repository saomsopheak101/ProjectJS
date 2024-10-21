var className = "inverted";
var scrollTrigger = 40;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};

// Get the <html> element

/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark
    ? `<i class="fa-solid fa-moon"></i>`
    : `<i class="fa-solid fa-sun"></i>`;
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerHTML = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });
/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

// script toast
// toast cart
var buttons = document.querySelectorAll("#toast-cart");

// Loop through each button and attach the click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var toast = new bootstrap.Toast(document.getElementById("liveToast-cart"));
    toast.show();
  });
});
// toast compare
var buttons = document.querySelectorAll("#toast-wish");

// Loop through each button and attach the click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var toast = new bootstrap.Toast(document.getElementById("liveToast-wish"));
    toast.show();
  });
});
// toast wishlist
var buttons = document.querySelectorAll("#toast-compare");

// Loop through each button and attach the click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var toast = new bootstrap.Toast(
      document.getElementById("liveToast-compare")
    );
    toast.show();
  });
});

//btn close

//validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", (event) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  console.log(params);

  if (params.has("l")) {
    console.log("Parameter exists!");
    const parameterValue1 = url.searchParams.get("l");
    if (parameterValue1) {
      button.previousElementSibling.remove();
      button.nextElementSibling.classList.remove(
        "dropdown-center",
        "dropdown-account"
      );

      button.nextElementSibling.classList.add("d-flex", "flex-nowrap");
      button.previousElementSibling.classList.add("fs-7");
      if (button.previousElementSibling.firstElementChild) {
        button.previousElementSibling.firstElementChild.href =
          "reservation.html?l=true";
      }

      document
        .querySelector(".navbar-nav")
        .classList.add("mx-xxl-5", "mx-xl-1");
      if (document.querySelector(".btn-home-page-responsive")) {
        document.querySelector(".btn-home-page-responsive").remove();
      }

      document.querySelectorAll(".navbar-brand").forEach((btn) => {
        btn.href = "index.html";
      });

      document.querySelector(
        ".navbar-nav"
      ).innerHTML = `<li class="nav-item mx-lg-2">
                                <a class="nav-link" href="index.html">ទំព័រដើម</a>
                            </li>

                            <li class="nav-item mx-lg-2 dropdown megamenu">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ម៉ីនុយ
                                </a>
                                <ul class="dropdown-menu border-0 ">
                                    <div class="container-xxl">
                                        <div class="row w-100 gy-4 pb-3">
                                            <div class="col-xl-3">
                                                <ul>
                                                    <li>
                                                        <a href="menu-khmer.html?l=true">
                                                            <h5 class="dropdown-item">ម្ហូបខ្មែរ</h5>
                                                        </a>
                                                    </li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-khmer-detail.html?l=true&u=true">អាម៉ុកត្រី</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-khmer-detail.html?l=true&u=true">បុកមាន់ហឹរ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-khmer-detail.html?l=true&u=true">ត្រីបំពង</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-khmer-detail.html?l=true&u=true">សម្លម្ជូរខ្ទិះ</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-3">
                                                <ul>
                                                    <li>
                                                        <a href="menu-chinese.html?l=true">
                                                            <h5 class="dropdown-item">ម្ហូបចិន</h5>
                                                        </a>
                                                    </li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-chinese-detail.html?l=true&u=true">ហាកាវចំហុយ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-chinese-detail.html?l=true&u=true">មាន់កុងប៉ាវ</a></li>
                                                    <li><a class="dropdown-item"

                                                        href="menu-chinese-detail.html?l=true&u=true">មីជូរហឹរ</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-chinese-detail.html?l=true&u=true">ស៊ុបគាវ</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-xl-3">
                                                    <ul>
                                                        <li>
                                                            <a href="menu-thai.html?l=true">
                                                                <h5 class="dropdown-item">ម្ហូបថៃ</h5>
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="menu-thai-detail.html?l=true&u=true">ផាត់ថៃ</a>
                                                        </li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-thai-detail.html?l=true&u=true">ឡាបសាច់ជ្រូក</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-thai-detail.html?l=true&u=true">គុយទាវទូក</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-thai-detail.html?l=true&u=true">គុយទាវទឹកខ្មៅ</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-xl-3">
                                                    <ul>
                                                        <li>
                                                            <a href="menu-vietname.html?l=true">
                                                                <h5 class="dropdown-item">ម្ហូបវៀតណាម</h5>
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-vietname-detail.html?l=true&u=true">ហ្វឺសាច់គោ</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-vietname-detail.html?l=true&u=true">បុងបរវេរ</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-vietname-detail.html?l=true&u=true">នំបញ្ចុកដុះផ្សិត</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-vietname-detail.html?l=true&u=true">គួងចំហុយ</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-xl-3">
                                                    <ul>
                                                        <li>
                                                            <a href="menu-europe.html?l=true">
                                                                <h5 class="dropdown-item">ម្ហូបអ៊ឺរ៉ុប</h5>
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-europe-detail.html?l=true&u=true">ផាស្តាប៉េងប៉ោះ</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-europe-detail.html?l=true&u=true">ភីហ្សាបេខន់</a></li>
                                                        <li><a class="dropdown-item"

                                                            href="menu-europe-detail.html?l=true&u=true">មាន់ស្ពីណាច</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-europe-detail.html?l=true&u=true">ស្តេកសាច់គោ</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-3">
                                                <ul>
                                                    <li>
                                                        <a href="menu-healthy.html?l=true">
                                                            <h5 class="dropdown-item">អាហារសុខភាព</h5>
                                                        </a>
                                                    </li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-healthy-detail.html?l=true&u=true">ស្តេកទ្រូងមាន់</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-healthy-detail.html?l=true&u=true">សាល់ម៉ុនសាឡាដ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-healthy-detail.html?l=true&u=true">ផាស្តាបង្គារ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-healthy-detail.html?l=true&u=true">សាឡាដក្រូចថ្លុង</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-3">
                                                <ul>
                                                    <li>
                                                        <a href="menu-dessert.html?l=true?l=true">
                                                            <h5 class="dropdown-item">បង្អែម</h5>
                                                        </a>
                                                    </li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-dessert-detail.html?l=true&u=true">សង់ខ្យាល្ពៅ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-dessert-detail.html?l=true&u=true">បាយដំណើបស្វាយទុំ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-dessert-detail.html?l=true&u=true">ការ៉េមសូកូឡា</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-dessert-detail.html?l=true&u=true">ថាតរសជាតិក្រូច</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-3">
                                                <ul>
                                                    <li>
                                                        <a href="menu-drink.html?l=true">
                                                            <h5 class="dropdown-item">ភេសជ្ជះ</h5>
                                                        </a>
                                                    </li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-drink-detail.html?l=true&u=true">កាហ្វេទឹកដោះគោ</a></li>
                                                    <li><a class="dropdown-item"
                                                            href="menu-drink-detail.html?l=true&u=true">ម៉ាឆាឡាតេ</a></li>

                                                            <li><a class="dropdown-item"
                                                                href="menu-drink-detail.html?l=true&u=true">ស្រ្តបឺរីក្រឡុក</a></li>
                                                        <li><a class="dropdown-item"
                                                                href="menu-drink-detail.html?l=true&u=true">តែផាសិន</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    
                                    </ul>
                                </li>
                                <li class="nav-item mx-lg-2 dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        សេវាកម្ម
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="service-page.html?l=true">សេវាកម្ម</a></li>
                                        <li><a class="dropdown-item" href="customer-review.html?l=true">ការវាយតម្លៃ</a></li>
                                        <li><a class="dropdown-item" href="gallery-page.html?l=true">រូបភាព</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item mx-lg-2">
                                    <a class="nav-link" href="career-page.html?l=true">អាជីព</a>
                                </li>
                                <li class="nav-item mx-lg-2">
                                    <a class="nav-link" href="blog-page.html?l=true">ព័ត៌មាន</a>
                                </li>
                                <li class="nav-item mx-lg-2 dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        អំពី
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="about-us.html?l=true">អំពីយើង</a></li>
                                        <li><a class="dropdown-item" href="about-restaurant.html?l=true">អំពីភោជនីយដ្ឋាន</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item mx-lg-2 dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        ទំនាក់ទំនង
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="contact.html?l=true">ទំនាក់ទំនងយើង</a></li>
                                        <li><a class="dropdown-item" href="faq-page.html?l=true">សំណួរ​
                                                និងចម្លើយ</a></li>
                                    </ul>
                                </li>`;

      if (document.querySelectorAll('.hero-banner a[href="home-page.html"]')) {
        console.log(true);
        
      }

      let element1 = document.querySelector(
        'a[href="home-page.html"]'
      );

      if (element1) {
        element1.href="index.html"
      }
       
      console.log(element1);

      // console.log(button.nextElementSibling.classList);
      button.nextElementSibling.innerHTML = `<a href="login.html" class="btn btn-brand ms-lg-2 me-3 fs-6 text-nowrap fw-medium" role="button">
                                      ចូលគណនី
                                  </a>
                                  <a href="sing-up.html">
                                      <button class="btn btn-brand fs-6 text-nowrap fw-medium" role="button">
                                          ចុះឈ្មោះ
                                      </button>
                                  </a>`;

      document.getElementsByTagName("footer")[0].innerHTML = `
            <section class="top-footer-sm bg-transparent py-5">
                <div class="container-fluid ">
                    <div class="content-top">
                        <div class="logo-lg-img">
                            <img class="w-100 h-100 object-fit-cover pb-4" src="assets/img/logo-2-png.png" alt="">
                        </div>
                        <div>
                            <p class="fs-5 text-white">ទទួលយកបទពិសោធន៍នៃរសជាតិដ៏ប្រណិតនៅ WokStar -
                                កន្លែងដែលពោរពេញដោយម្ហូបអាស៊ី!</p>
                            <div class="app position-relative d-flex gap-3 py-2">
                                <a href="https://www.facebook.com/profile"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/"> <i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
                                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion accordion-flush bg-transparent border-top pt-3 mt-3 border-opacity-10"
                        id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent fs-5" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    ភោជនីយដ្ឋាន
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body accordion-body-1">
                                    <ul class="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <a href="about-restaurant.html?l=true">អំពីយើង</a>
                                        </li>
                                        <li>
                                            <a href="menu-khmer.html?l=true">ម៉ីនុយ</a>
                                        </li>
                                        <li>
                                            <a href="service-page.html?l=true">សេវាកម្ម</a>
                                        </li>
                                        <li>
                                            <a href="gallery-page.html?l=true">រូបភាពហាង</a>
                                        </li>
                                        <li>
                                            <a href="reservation.html?l=true">ការកក់តុ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent fs-5" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    ព័ត៌មានផ្សេងៗ
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body accordion-body-1">
                                    <ul class="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <a href="customer-review.html?l=true">ការវាយតម្លៃ</a>
                                        </li>
                                        <li>
                                            <a href="faq-page.html?l=true">សំណួរ & ចម្លើយ</a>
                                        </li>
                                        <li>
                                            <a href="sing-up.html">ការជូនដំណឹង</a>
                                        </li>
                                        <li>
                                            <a href="career-page.html?l=true">ជ្រើសរើសបុគ្គលិក</a>
                                        </li>
                                        <li>
                                            <a href="contact.html?l=true">ជំនួយ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent fs-5" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    ទំនាក់ទំនងមកកាន់យើង
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="list-unstyled d-flex flex-column gap-2">
                                        <li>
                                            <i class="fa-solid fa-location-dot"></i>
                                            <a href="https://maps.app.goo.gl/dKVGsxwrahm67dL2A">ផ្ទះលេខ 54 ផ្លូវលេខ 606,
                                                ភ្នំពេញ</a>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-phone-volume"></i>
                                            <a href="tel:+88517631845">+885 17 631 845</a>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-envelope"></i>
                                            <a href="https://mail.google.com/mail/u/0/#inbox">Wokstar@gmail.com</a>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-clock"></i>
                                            <span class="text-white">ចន្ទ- អាទិត្យ ( 9:00 - 22:00 )</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="top-footer py-5 ">
                <div class="container-fluid px-5">
                    <div class="row text-white justify-content-center">
                        <div class="col-12 col-md-12 col-xl-4 ">
                            <div class="content-left">
                                <div class="logo-lg-img">
                                    <img class="w-100 h-100 object-fit-cover pb-4" src="assets/img/logo-2-png.png" alt="">
                                </div>
                                <div>
                                    <p class="fs-5 text-white">ទទួលយកបទពិសោធន៍នៃរសជាតិដ៏ប្រណិតនៅ WokStar -
                                        កន្លែងដែលពោរពេញដោយម្ហូបអាស៊ី!</p>
                                    <div class="app position-relative d-flex gap-3 py-2">
                                        <a href="https://www.facebook.com/profile"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/"> <i class="fa-brands fa-instagram"></i></a>
                                        <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
                                        <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xl-2 pt-3 pt-xl-5 flex-lg-grow-1">
                            <div class="content-center">
                                <h2 class="pb-2">ភោជនីយដ្ឋាន</h2>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li>
                                        <a href="about-restaurant.html?l=true">អំពីយើង</a>
                                    </li>
                                    <li>
                                        <a href="menu-khmer.html?l=true">ម៉ីនុយ</a>
                                    </li>
                                    <li>
                                        <a href="service-page.html?l=true">សេវាកម្ម</a>
                                    </li>
                                    <li>
                                        <a href="gallery-page.html?l=true">រូបភាពហាង</a>
                                    </li>
                                    <li>
                                        <a href="reservation.html?l=true">ការកក់តុ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-xl-2 pt-3 pt-xl-5 flex-lg-grow-1">
                            <div class="content-center">
                                <h2 class="pb-2">ព័ត៌មានផ្សេងៗ</h2>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li>
                                        <a href="customer-review.html?l=true">ការវាយតម្លៃ</a>
                                    </li>
                                    <li>
                                        <a href="faq-page.html?l=true">សំណួរ & ចម្លើយ</a>
                                    </li>
                                    <li>
                                        <a href="notification-page.html?l=true">ការជូនដំណឹង</a>
                                    </li>
                                    <li>
                                        <a href="career-page.html?l=true">ជ្រើសរើសបុគ្គលិក</a>
                                    </li>
                                    <li>
                                        <a href="contact.html?l=true">ជំនួយ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-3 pt-3 pt-xl-5 flex-lg-grow-0">
                            <div class="content-right">
                                <h2 class="pb-2">ទំនាក់ទំនងមកកាន់យើង</h2>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li>
                                        <i class="fa-solid fa-location-dot"></i>
                                        <a href="https://maps.app.goo.gl/dKVGsxwrahm67dL2A">ផ្ទះលេខ 54 ផ្លូវលេខ 606,
                                            ភ្នំពេញ</a>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-phone-volume"></i>
                                        <a href="tel:+88517631845">+885 17 631 845</a>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i>
                                        <a href="https://mail.google.com/mail/u/0/#inbox">Wokstar@gmail.com</a>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-clock"></i>
                                        <span>ចន្ទ- អាទិត្យ ( 9:00 - 22:00 )</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
            <section class="copyright py-3 border-top">
                <div class="container-fluid px-5">
                    <div class="d-sm-flex text-center text-sm-start justify-content-between text-white">
                        <p class="m-0 p-0">រក្សាសិទ្ធិដោយWokStar<span>©</span>2024</p>
                        <p class="m-0 p-0">
                            <a href="public-term-of-use-page.html" class="border-end pe-2">គោលការណ៍ឯកជនភាព</a>
                            <a href="public-term-of-use-page.html" class="ps-1">លក្ខខណ្ឌ</a>
                        </p>
                    </div>
                </div>
            </section>
        `;
      if (document.querySelectorAll(".mproduct-hover")) {
        let currHref = url.pathname.slice(1);

        let newHref = currHref.slice(0, -5) + "-detail.html?l=true&u=true";
        console.log(newHref);

        document.querySelectorAll(`.mproduct-hover`).forEach((con) => {
          con.innerHTML = `<ul class="p-0">
                                                  <li class="mproduct-icon i-cart">
                                                      <a href="sing-up.html" role="button" class="btn" title="ដាក់ចូលកន្ត្រក">
                                                          <i class="bi bi-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-wishlist">
                                                      <a href="sing-up.html" role="button" class="btn" title="រក្សាទុក">
                                                          <i class="bi bi-heart"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-compare">
                                                      <a href="sing-up.html" role="button" class="btn" title="ប្រៀបធៀបទំនិញ">
                                                          <i class="bi bi-bar-chart-line-fill"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-check">
                                                      <a href="${newHref}" role="button" title="លម្អិត">
                                                          <i class="bi bi-eye"></i>
                                                      </a>
                                                  </li>
      
                                              </ul>`;
        });
      }

      //chef
      if (document.querySelectorAll('a[href="detail-chef.html"]')) {
        document.querySelectorAll('a[href="detail-chef.html"]').forEach((a) => {
          a.href = "detail-chef.html?l=true&u=true";
        });
      }

      //blog

      if (document.querySelectorAll('a[href="blog-detail-page.html"]')) {
        document
          .querySelectorAll('a[href="blog-detail-page.html"]')
          .forEach((a) => {
            a.href = "blog-detail-page.html?l=true&u=true";
          });
      }

      if (document.querySelectorAll('a[href="career-detail-page.html"]')) {
        document
          .querySelectorAll('a[href="career-detail-page.html"]')
          .forEach((a) => {
            a.href = "career-detail-page.html?l=true&u=true";
          });
      }

      if (document.querySelector('a[href="menu-khmer.html"]')) {
        document.querySelector('a[href="menu-khmer.html"]').href =
          "menu-khmer.html?l=true";
      }

      if (document.querySelectorAll('a[href="menu-khmer-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-khmer-detail.html"]')
          .forEach((a) => {
            a.href = "menu-khmer-detail.html?l=true&u=true";
          });
      }

      if (document.querySelectorAll('a[href="menu-thai-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-thai-detail.html"]')
          .forEach((a) => {
            a.href = "menu-thai-detail.html?l=true&u=true";
          });
      }

      if (document.querySelectorAll('a[href="menu-vietname-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-vietname-detail.html"]')
          .forEach((a) => {
            a.href = "menu-vietname-detail.html?l=true&u=true";
          });
      }
      if (document.querySelectorAll('a[href="menu-drink-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-drink-detail.html"]')
          .forEach((a) => {
            a.href = "menu-drink-detail.html?l=true&u=true";
          });
      }
      if (document.querySelectorAll('a[href="menu-healthy-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-healthy-detail.html"]')
          .forEach((a) => {
            a.href = "menu-healthy-detail.html?l=true&u=true";
          });
      }
      if (document.querySelectorAll('a[href="menu-europe-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-europe-detail.html"]')
          .forEach((a) => {
            a.href = "menu-europe-detail.html?l=true&u=true";
          });
      }
      if (document.querySelectorAll('a[href="menu-dessert-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-dessert-detail.html"]')
          .forEach((a) => {
            a.href = "menu-dessert-detail.html?l=true&u=true";
          });
      }
      if (document.querySelectorAll('a[href="menu-chinese-detail.html"]')) {
        document
          .querySelectorAll('a[href="menu-chinese-detail.html"]')
          .forEach((a) => {
            a.href = "menu-chinese-detail.html?l=true&u=true";
          });
      }

      if (document.querySelector('a[href="reservation.html"]')) {
        document.querySelector('a[href="reservation.html"]').href =
          "reservation.html?l=true";
      }
      console.log(url.pathname === "/menu-vietname.html");

      if (
        url.pathname === "/menu-khmer-detail.html" ||
        url.pathname === "/menu-thai-detail.html" ||
        url.pathname === "/menu-vietname-detail.html" ||
        url.pathname === "/menu-healthy-detail.html" ||
        url.pathname === "/menu-europe-detail.html" ||
        url.pathname === "/menu-drink-detail.html" ||
        url.pathname === "/menu-desert-detail.html" ||
        url.pathname === "/menu-chinese-detail.html"
      ) {
        console.log(url.pathname);

        document
          .querySelectorAll(`a[href="${url.pathname.slice(1)}"]`)
          .forEach((a) => {
            a.href = `${url.pathname.slice(1)}` + "?l=true&u=true";
          });
      }

      if (params.has("u")) {
        const parameterValue2 = url.searchParams.get("u");
        let currHref = url.pathname.slice(1);
        let newHref = currHref.slice(0, -12) + ".html?l=true";

        let element2 = element1[0].nextElementSibling.nextElementSibling;
        element2.href = `${newHref}`;

        // Menu detail
        if (document.querySelector(".section-menudetail .dproduct-detail")) {
          document.querySelector(
            ".section-menudetail .dproduct-detail"
          ).lastElementChild.innerHTML = `<div class="border-end border-brand px-3 ps-0">
                                    <a href="sing-up.html" role="button">
                                        <i class="bi bi-heart text-brand"></i>
                                        <span class="ps-2">ចំណង់ចំណូលចិត្ត</span>
                                    </a>
                                </div>
                                <div class="px-3">
                                    <a role="button" href="sing-up.html">
                                        <i class="bi bi-bar-chart-line-fill text-brand"></i>
                                        <span class="ps-2">ប្រៀបធៀបទំនិញ</span>
                                    </a>
                                </div>`;
        }

        if (
          document.querySelector(
            ".section-menudetail .dproduct-detail .btn-cart"
          )
        ) {
          let parent = document.querySelector(
            ".section-menudetail .dproduct-detail .btn-cart"
          ).parentElement;
          document
            .querySelector(".section-menudetail .dproduct-detail .btn-cart")
            .remove();

          const buttonCart = document.createElement("a");

          buttonCart.setAttribute("role", "button");
          buttonCart.setAttribute("class", "btn btn-cart px-3 py-2 ms-3 fs-5");
          buttonCart.setAttribute("href", "sing-up.html");

          buttonCart.innerHTML =
            'ដាក់ចូលកន្ត្រក<i class="fa-solid fa-cart-shopping ps-2"></i>';

          parent.appendChild(buttonCart);
          console.log(parent);
        }

        if (document.querySelectorAll(`.mproduct-hover`)) {
          document.querySelectorAll(`.mproduct-hover`).forEach((con) => {
            console.log(currHref);

            con.innerHTML = `<ul class="p-0">
                                                  <li class="mproduct-icon i-cart">
                                                      <a href="sing-up.html" role="button" class="btn" title="ដាក់ចូលកន្ត្រក">
                                                          <i class="bi bi-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-wishlist">
                                                      <a href="sing-up.html" role="button" class="btn" title="រក្សាទុក">
                                                          <i class="bi bi-heart"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-compare">
                                                      <a href="sing-up.html" role="button" class="btn" title="ប្រៀបធៀបទំនិញ">
                                                          <i class="bi bi-bar-chart-line-fill"></i>
                                                      </a>
                                                  </li>
                                                  <li class="mproduct-icon i-check">
                                                      <a href="${
                                                        currHref +
                                                        "?l=true&u=true"
                                                      }" role="button" title="លម្អិត">
                                                          <i class="bi bi-eye"></i>
                                                      </a>
                                                  </li>
      
                                              </ul>`;
          });
        }

        if (url.pathname === "/detail-chef.html") {
          console.log(`about-restaurant.html?l=true`);
          element2.href = "about-restaurant.html?l=true";
        }
        if (url.pathname === "/blog-detail-page.html") {
          element2.href = "blog-page.html?l=true";
        }
        if (url.pathname === "/career-detail-page.html") {
          element2.href = "career-page.html?l=true";
        }
      }
    }
  } else {
    console.log("Parameter does not exist.");
  }
});

//cart script
if (
  document.querySelector(".plus") ||
  document.querySelector(".minus") ||
  document.querySelector(".num")
) {
  const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
  let a = 1;

  plus.addEventListener("click", () => {
    a++;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  });
  minus.addEventListener("click", () => {
    if (a >= 1) {
      a--;
      a = a < 10 ? "0" + a : a;
      num.innerText = a;
    }
  });
}
