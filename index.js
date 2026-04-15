const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
function sendMessage() {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
}
sendButton.addEventListener("click", sendMessage);

console.log ("Hello, welcome to Table and chairs furniture website!");
