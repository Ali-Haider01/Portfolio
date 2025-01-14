// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Sending Email To Ali Haider

// function sendEmail() {
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   if (name && email && message) {
//     const subject = encodeURIComponent(`Contact from ${name}`);
//     const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
//     const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=msalihaider21@gmail.com&su=${subject}&body=${body}`;
//     window.open(gmailLink, '_blank'); // Opens Gmail in a new tab
//   } else {
//     alert('Please fill in all fields before sending.');
//   }
// }

function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Check if it's a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Use mailto for mobile devices
      const mailtoLink = `mailto:msalihaider21@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } else {
      // Use Gmail web interface for desktop systems
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=msalihaider21@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailLink, '_blank'); // Opens Gmail in a new tab
    }
  } else {
    alert('Please fill in all fields before sending.');
  }
}

