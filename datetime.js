function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  document.getElementById('datetime').textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();
