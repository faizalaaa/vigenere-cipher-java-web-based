function encrypt() {
    var inputText = document.getElementById("inputText").value.toUpperCase();
    var key = document.getElementById("key").value.toUpperCase();
    var encryptedText = vigenereCipher(inputText, key);
    document.getElementById("result").innerText = "Encrypted Text: " + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value.toUpperCase();
    var key = document.getElementById("key").value.toUpperCase();
    var decryptedText = vigenereDecipher(inputText, key);
    document.getElementById("result").innerText = "Decrypted Text: " + decryptedText;
}

function vigenereCipher(inputText, key) {
    var result = "";
    var keyIndex = 0;

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode + key.charCodeAt(keyIndex)) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            result += inputText.charAt(i);
        }
    }

    return result;
}

function vigenereDecipher(inputText, key) {
    var result = "";
    var keyIndex = 0;

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - key.charCodeAt(keyIndex) + 26) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            result += inputText.charAt(i);
        }
    }

    return result;
}
