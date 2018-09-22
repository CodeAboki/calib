function generatePassword() {
    document.getElementById("password").value = Math.floor(Math.random() * 1000 * 1000 * 100);
}