const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");
const eventSelect = document.getElementById("event");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

function selectEvent(eventName) {
  eventSelect.value = eventName;
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = eventSelect.value;

  if (!name || !roll || !email || !event) {
    formMessage.textContent = "Please fill all required fields.";
    return;
  }

  formMessage.textContent =
    `Registration successful! ${name}, you are registered for ${event}.`;

  registrationForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
