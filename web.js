function encoder(password) {
    let encoded = "";
    if (password.length < 4) {
        encoded = "$";
        password = "0" + password;
    } else {
        const first = password[0];
        const encodedFirst = String.fromCharCode(first.charCodeAt(0) + 4);
        encoded += encodedFirst;
    }

    for (let i = 1; i < 4; i++) {
        const second = password[i];
        const encodedChr = String.fromCharCode(second.charCodeAt(0) + i + 4);
        encoded += encodedChr;
    }

    return encoded;
}


function decoder(input) {
    let decoded = "";
    if (input[0] === "$") {
        decoded = " ";
    } else {
        const first = input[0];
        const decodedChar = String.fromCharCode(first.charCodeAt(0) - 4);
        decoded += decodedChar;
    }

    for (let i = 1; i < input.length; i++) {
        const char2 = input[i];
        const decodedChar = String.fromCharCode(char2.charCodeAt(0) - 4 - i);
        decoded += decodedChar;
    }

    return decoded;
}
