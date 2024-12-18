document.addEventListener("DOMContentLoaded", () => {
  // SPA navigation
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("nav a");

  function showPage(hash) {
    pages.forEach((page) => {
      page.classList.toggle("hidden", `#${page.id}` !== hash);
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === hash);
    });
  }

  window.addEventListener("hashchange", () => {
    showPage(window.location.hash || "#home");
  });

  showPage(window.location.hash || "#home");

  // Form handling
  const form = document.getElementById("contact-form");
  const responseDiv = document.getElementById("form-response");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    responseDiv.textContent = `Thank you, ${name}! We have received your message.`;
    responseDiv.classList.remove("hidden");

    // Simulate clearing form
    form.reset();
  });

  // External API Example (fetching dummy JSON data)
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log("Fetched data:", data.slice(0, 5)); // Logs first 5 posts
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
});
