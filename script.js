/*======menu icon navbar=====*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*======scroll sections active link=====*/
let sections  = document.querySelectorAll('section');
let navlinks  = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    

    if(top >= offset && top < offset + height)
    {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
    };
});

    /*======Sticky Navbar=====*/
    let header = document.querySelector('.header');

    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }


    /*======remove menu icon navbar when click navbar link (scroll)=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkmode-icon')
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*======Contact Form=====*/
// const form = document.querySelector("form");
// const fullname = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");

// function sendEmail() {
//     const bodyMessage = `
//         FullName: ${fullname.value} <br>
//         Email: ${email.value} <br>
//         Phone Number: ${phone.value} <br>
//         Message: ${message.value} <br>
//     `;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "sufyanbawany@gmail.com",
//         Password: "CE583CBAC3710358304B0356D54359B12605",
//         To: "sufyanbawany@gmail.com",
//         From: "sufyan2301b@aptechgdn.net",
//         Subject: subject.value,
//         Body: bodyMessage,
//     }).then((response) => {
//         if (response === "OK") {
//             Swal.fire({
//                 title: "Success",
//                 text: "Message Sent Successfully!",
//                 icon: "success",
//             });
//         } else {
//             Swal.fire({
//                 title: "Error",
//                 text: "Something went wrong. Please try again.",
//                 icon: "error",
//             });
//         }
//     }).catch((error) => {
//         Swal.fire({
//             title: "Error",
//             text: "Failed to send the email. " + error.message,
//             icon: "error",
//         });
//     });
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (!fullname.value || !email.value || !phone.value || !subject.value || !message.value) {
//         Swal.fire({
//             title: "Error",
//             text: "Please fill out all fields.",
//             icon: "error",
//         });
//         return;
//     }

//     sendEmail();
// });


/*======Scroll Reveal=====*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img , .services-container, .project-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.about-img img', { origin: 'right' });

ScrollReveal().reveal('.home-content h1', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });