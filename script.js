AOS.init();
const tips = [
  "Eat at least 5 servings of fruits and vegetables daily.",
  "Exercise for at least 30 minutes a day.",
  "Practice mindfulness or meditation to reduce stress.",
  "Get 7–9 hours of sleep each night.",
  "Limit sugar, salt, and processed foods.",
  "Take regular breaks if you sit for long hours.",
  "Wash your hands frequently to avoid illness.",
  "Get regular medical checkups and screenings."
];

function getNewTip() {
  const tipElement = document.getElementById("healthTip");
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipElement.textContent = tips[randomIndex];
}

function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("subscribeMsg");

  if (email) {
    message.textContent = `Thank you for subscribing, ${email}!`;
    message.style.color = "#16a34a";
  } else {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#dc2626";
  }
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = `${scrollPercent}%`;
});
