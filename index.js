// Toggle the navigation links
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active"); // Toggle the 'active' class
});

// Toggle the dropdown menu for the About section
document.getElementById("about-toggle").addEventListener("click", function () {
  const aboutMenu = document.getElementById("about-menu");
  aboutMenu.classList.toggle("active"); // Toggle the 'active' class for the dropdown
});

// Optional: Close dropdown if user clicks outside of it
window.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("about-menu");
  const dropdownToggle = document.getElementById("about-toggle");

  if (
    !dropdownMenu.contains(event.target) &&
    !dropdownToggle.contains(event.target)
  ) {
    dropdownMenu.classList.remove("active"); // Close dropdown if clicked outside
  }
});
