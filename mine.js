const values = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()_+[]{}?><|"
};

let passwordLengthField = document.getElementById("length");
passwordLengthField.addEventListener("input", function () {
    document.getElementById("length-value").innerText = passwordLengthField.value;
});

let outputField = document.getElementById("password");
let button = document.querySelector(".generate-btn");
button.addEventListener("click", function () {
    outputField.value = generatePassword();
});

function generatePassword() {
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let number = document.getElementById("number").checked;
    let symbol = document.getElementById("symbol").checked;

    let chars = "";
    if (lowercase) chars += values.lowercase;
    if (uppercase) chars += values.uppercase;
    if (number) chars += values.number;
    if (symbol) chars += values.symbol;

    let passwordLength = +passwordLengthField.value;
    let password = "";
    for (let i = 1; i <= passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        let randomChar = chars[randomIndex];
        password += randomChar;
    }

    return password;
}
let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(outputField.value);
    alert("Password copied to clipboard!");
}); 
