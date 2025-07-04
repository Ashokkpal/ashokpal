document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldnvvpl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.innerText = "✅ Thank you! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.innerText = "❌ There was a problem submitting the form.";
        status.style.color = "red";
      }
    } catch (error) {
      status.innerText = "❌ Failed to send message. Please try again.";
      status.style.color = "red";
    }
  });
});
