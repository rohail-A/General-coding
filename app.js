document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navigation functionality
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Set active section and link
      const targetId = link.getAttribute("href").substring(1);
      sections.forEach((section) => section.classList.remove("active"));
      navLinks.forEach((link) => link.classList.remove("active"));

      document.getElementById(targetId).classList.add("active");
      link.classList.add("active");
    });
  });

  // Dynamic Services List
  const servicesList = document.getElementById("services-list");
  const services = ["Web Development", "UI/UX Design", "SEO Optimization", "App Development"];
  services.forEach((service) => {
    const li = document.createElement("li");
    li.textContent = service;
    servicesList.appendChild(li);
  });

  // Form Submission
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      responseMessage.textContent = `Thanks, ${name}! We'll respond to your message soon.`;
      responseMessage.style.color = "green";
      form.reset();
    } else {
      responseMessage.textContent = "Please fill out all fields.";
      responseMessage.style.color = "red";
    }
  });
});
