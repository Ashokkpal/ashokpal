document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const navLinks = document.getElementById("mobile-nav-links");

    toggleBtn.addEventListener("click", () => {
      // Show nav links
      navLinks.classList.add("show");
      // Hide MANU button
      toggleBtn.style.display = "none";

      // Hide nav links and show MANU again after 15s
      setTimeout(() => {
        navLinks.classList.remove("show");
        toggleBtn.style.display = "block";
      }, 10000); // 10000 ms = 10 seconds
    });
  });