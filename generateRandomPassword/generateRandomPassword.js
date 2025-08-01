function generatePassword(passwordLen, includeLower, includeUpper, includeNumbers, includeSpecial) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-={}:<>?";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? lowercaseChars : "";
    allowedChars += includeUpper ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSpecial ? specialChars : "";

    if (passwordLen <= 0) {
        return `Password length must be at least one`;
    }

    if (allowedChars.length === 0) {
        return `At least one character type must be selected`;
    }

    for (let i = 0; i < passwordLen; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// ✅ This function reads values from the HTML page
function handleGenerate() {
    const passwordLen = parseInt(document.getElementById("passwordLen").value);
    const includeLower = document.getElementById("lowercase").checked;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    const password = generatePassword(passwordLen, includeLower, includeUpper, includeNumbers, includeSpecial);
    document.getElementById("result").value = password;
}
