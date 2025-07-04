document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load theme preference or default to dark
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = savedTheme === "dark" || savedTheme === null;

  if (prefersDark) {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️"; // light icon
  } else {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙"; // dark icon
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});


