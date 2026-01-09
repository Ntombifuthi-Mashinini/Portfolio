// AOS
AOS.init({
  duration: 800,
  once: true
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// EmailJS Init
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- replace
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // <-- replace
    "YOUR_TEMPLATE_ID",  // <-- replace
    this
  ).then(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "#38bdf8";
    form.reset();
  }, () => {
    status.textContent = "Something went wrong. Please try again.";
    status.style.color = "red";
  });
});
