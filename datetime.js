function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatted = now.toLocaleString("en-IN", options);
  const datetimeBox = document.getElementById("datetime");
  if (datetimeBox) datetimeBox.textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
