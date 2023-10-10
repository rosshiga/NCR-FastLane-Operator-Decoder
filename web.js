function encoder(password) {
  var encoded, encoded_chr, encoded_first, first, second;
  encoded = "";

  if (password.length < 4) {
    encoded = "$";
    password = "0" + password;
  } else {
    first = password[0];
    encoded_first = chr(ord(first) + 4);
    encoded = encoded + encoded_first;
  }

  for (var i = 1, _pj_a = 4; i < _pj_a; i += 1) {
    second = password[i];
    encoded_chr = chr(ord(second) + i + 4);
    encoded = encoded + encoded_chr;
  }

  return encoded;
}

function decoder(input) {
  var char1, decoded, decoded_char, first;
  decoded = "";

  if (input[0] === "$") {
    decoded = " ";
  } else {
    first = input[0];
    decoded_char = chr(ord(first) - 4);
    decoded = decoded + decoded_char;
  }

  for (var i = 1, _pj_a = 4; i < _pj_a; i += 1) {
    char1 = input[i];
    decoded_char = chr(ord(char1) - 4 - i);
    decoded = decoded + decoded_char;
  }

  return decoded;
}
