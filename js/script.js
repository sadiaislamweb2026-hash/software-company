document.addEventListener("DOMContentLoaded", function () {
  function updateDateTime() {
    const el = document.getElementById("dateTime");
    if (el) el.textContent = new Date().toLocaleString();
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you! Your message has been submitted successfully.");
      form.reset();
    });
  }

  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");
      const filter = button.dataset.filter;
      items.forEach(function (item) {
        item.style.display =
          filter === "all" || item.dataset.category === filter ? "" : "none";
      });
    });
  });
});
