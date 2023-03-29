const button = document.querySelector("#button");
const toasts = document.querySelector("#toasts");

const messages = [
  "Hello World",
  "Hello Solar System",
  "Hello Galaxy",
  "Hello Whole Unviverse",
];

button.addEventListener("click", () =>
  createNotification("Invalid data entered!", "error")
);

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : "default");
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 5000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
