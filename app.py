def encoder(password):
    encoded = ""
    if len(password) < 4:
        encoded = "$"
        password = "0"+password
    else:
        first = password[0]
        encoded_first = chr(ord(first) + 4)
        encoded = encoded + encoded_first
    for i in range(1,4):

        second = password[i]
        encoded_chr = chr(ord(second) + i + 4)
        encoded = encoded + encoded_chr
    return encoded

def decoder(input):
    decoded = ""
    if input[0] == "$":
        decoded = " "
    else:
        first = input[0]
        decoded_char = chr(ord(first) - 4)
        decoded = decoded + decoded_char

    for i in range(1, 4):
        char = input[i]
        decoded_char = chr(ord(char) - 4 - i)
        decoded = decoded + decoded_char

    return decoded

print(encoder("2468"))
print(decoder(encoder("2468")))


